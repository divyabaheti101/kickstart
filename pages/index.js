import react, { Component } from "react";
import factory from "../ethereum/factory";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedContracts().call();
    return { campaigns };
  }

  //In next if you want to load any data, it should be loaded in this method, instead of
  //get componentMount as in react
  //it is static bcoz we don't want to create instance of CampaignIndex just want to render it.

  // async componentDidMount() {
  //   const campaign = await factory.methods.getDeployedContracts().call();

  //   console.log(campaign);
  // }

  render() {
    return <div>{this.props.campaigns[0]}</div>;
    // return <div>okay</div>;
  }
}

export default CampaignIndex;
