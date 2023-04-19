import react, { Component } from "react";
import factory from "../ethereum/factory";

class CampaignIndex extends Component {
  async componentDidMount() {
    const campaign = await factory.methods.getDeployedContracts().call();

    console.log(campaign);
  }

  render() {
    return <div>Okay</div>;
  }
}

export default CampaignIndex;
