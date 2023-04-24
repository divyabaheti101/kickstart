import { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";

class ContributeForm extends Component {
  state = {
    value: "",
  };

  onSubmit = (event) => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            label="ether"
            labelPosition="right"
            value={this.state.value}
            onChange={(event) => this.setState({ value: event.target.value })}
          />
        </Form.Field>
        <Button primary>Contribute!</Button>
      </Form>
    );
  }
}

export default ContributeForm;
