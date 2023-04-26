import React, { Component } from "react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import { Button } from "semantic-ui-react";
import Campaign from "../../../ethereum/campaign";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestsCount().call();

    //Due to Limitation of Solidity
    //We can get all requests in one go from Solidity as Request is a Struct type.
    //So we loop thru the requests using count of requests.
    const requests = await Promise.all(
      Array(requestCount)
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );

    console.log(requests);

    return { address, requests };
  }

  render() {
    return (
      <Layout>
        <h3>Request List</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Create Request</Button>
          </a>
        </Link>
      </Layout>
    );
  }
}

export default RequestIndex;
