pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public deployedContracts;

    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);

        deployedContracts.push(newCampaign);
    }

    function getDeployedContracts() public view returns (address[]) {
        return deployedContracts;
    }
}

contract Campaign{
    struct Request{
        string description;
        uint value;
        address reciepient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
        //when intializing a struct we just need to provide values of value type
        //mapping is a ref type, so no need
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable{
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value, address reciepient) public restricted{
        Request memory newRequest = Request({
            description: description,
            value: value,
            reciepient: reciepient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public {
        Request storage request = requests[index];

        require(!request.complete);
        require(request.approvalCount > (approversCount/2));

        request.reciepient.transfer(request.value);
        request.complete = true;
    }
}