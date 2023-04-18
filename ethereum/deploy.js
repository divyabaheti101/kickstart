const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "initial response truly oak promote uncover adapt drop average unlock simple flock",
  "https://goerli.infura.io/v3/fee8dd8de68a4101a446b3b41ed1c065"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Account Used", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Address of Contract deployed", result.options.address);
  provider.engine.stop();
};
deploy();
