import react, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card } from "semantic-ui-react";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approvalsCount: summary[3],
      manager: summary[4],
    };
  }

  renderCampaigns() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approvalsCount,
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "Created the contract and can raise requests to spend money",
        style: { overflowWrap: "break-word" },
      },
    ];

    return <Card.Group items={items}></Card.Group>;
  }

  render() {
    return (
      <Layout>
        <h3>Show Campaign</h3>
        {this.renderCampaigns()}
      </Layout>
    );
  }
}

export default CampaignShow;
