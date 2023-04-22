import react, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";

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

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaign/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });

    return <Card.Group items={items}></Card.Group>;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>

          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              ></Button>
            </a>
          </Link>

          {this.renderCampaigns()}
        </div>
      </Layout>
    );
    // return <div>okay</div>;
  }
}

export default CampaignIndex;
