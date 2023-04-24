import { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";

class ContributeForm extends Component {
  state = {
    value: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            label="ether"
            labelPosition="right"
            value={this.state.value}
            onChange={this.setState((event) => {
              value = event.target.value;
            })}
          />
        </Form.Field>
        <Button primary>Contribute!</Button>
      </Form>
    );
  }
}

export default ContributeForm;
