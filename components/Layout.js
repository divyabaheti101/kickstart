import React from "react";
import { Header } from "./Header";
import { Container } from "semantic-ui-react";

export default (props) => {
  return (
    <Container>
      <Header />
      {props.children}
      {/* <h3>Footer<h3/> */}
    </Container>
  );
};
