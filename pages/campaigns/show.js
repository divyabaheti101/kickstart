import react, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Button, Card, Grid } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/contributeForm";
import { Link } from "../../routes";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }

  renderCampaigns() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "Created the contract and can raise requests to spend money",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (Wei)",
        description:
          "You must conttribute minimum of this wei, to become an approver",
        style: { overflowWrap: "break-word" },
      },
      {
        header: requestsCount,
        meta: "Number of requests raised",
        description: "Requests are raised to spend money of Contract",
        style: { overflowWrap: "break-word" },
      },
      {
        header: approversCount,
        meta: "Number of People contributed to Contributed to Contract",
        description: "The number of people who can approve the Requests",
        style: { overflowWrap: "break-word" },
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Balance of Contract (Ether)",
        description: "Remaining balance with the contract in Ether.",
        style: { overflowWrap: "break-word" },
      },
    ];

    return <Card.Group items={items}></Card.Group>;
  }

  render() {
    return (
      <Layout>
        <h3>Show Campaign</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCampaigns()}</Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
