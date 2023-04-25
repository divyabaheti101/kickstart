import { Button, Form, Input } from "semantic-ui-react";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";

const { Component } = require("react");

class RequestNew extends Component {
  state = {
    description: "",
    value: "",
    reciepient: "",
  };

  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  onSubmit = async () => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);
    const { description, value, reciepient } = this.state;

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(
          description,
          web3.utils.toWei(value, "ether"),
          reciepient
        )
        .send({
          from: accounts[0],
        });
    } catch (err) {}
  };

  render() {
    return (
      <Layout>
        <h3>Create Request</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Value in Ether</label>
            <Input
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Reciepient</label>
            <Input
              value={this.state.reciepient}
              onChange={(event) =>
                this.setState({ reciepient: event.target.value })
              }
            />
          </Form.Field>
          <Button primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
