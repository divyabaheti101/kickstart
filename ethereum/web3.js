import Web3 from "web3";

// // const web3 = new Web3(window.web3.currentProvider);
// // deprecated
// window.ethereum.request({ method: "eth_requestAccounts" });
// const web3 = new Web3(window.ethereum);
//To handle nextJS server side rendering below code is used now

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    // "https://sepolia.infura.io/v3/a2b9871bfe66456db5f80d3564f4b94c"
    "https://sepolia.infura.io/v3/fee8dd8de68a4101a446b3b41ed1c065"
  );
  web3 = new Web3(provider);
}

export default web3;
