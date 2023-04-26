import { Table } from "semantic-ui-react";

const { Component } = require("react");

class RequestRow extends Component {
  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    return (
      <Row>
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{request.value}</Cell>
        <Cell>{request.reciepient}</Cell>
        <Cell>
          {request.approvalCount} / {approversCount}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
