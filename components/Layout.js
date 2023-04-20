import React from "react";
import { Header } from "./Header";
import { Container } from "semantic-ui-react";
import Head from "next/head";

//head takes this styling to the head html file.
//placing this styling at layout as this is used for all pages.

export default (props) => {
  return (
    <Container>
      <Head>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>
      <Header />
      {props.children}
      {/* <h3>Footer<h3/> */}
    </Container>
  );
};
