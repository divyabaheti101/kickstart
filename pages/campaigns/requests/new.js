import { Button, Form, Input } from "semantic-ui-react";
import Layout from "../../../components/Layout";

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

  render() {
    return (
      <Layout>
        <h3>Create Request</h3>
        <Form>
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
            <label>Value</label>
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
