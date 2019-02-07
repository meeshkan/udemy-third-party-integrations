import { Box, Grommet, Heading } from "grommet";
import App, { Container } from "next/app";
import React from "react";

const theme = {
  global: {
    font: {
      family: "Roboto",
      height: "20px",
      size: "14px",
    },
  },
};

const AppBar = (props) => (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    />
  );

export default class MyApp extends App {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Grommet theme={theme} full>
            <Box fill>
              <AppBar>
                <Heading level="3" margin="none">porterduff 🦄</Heading>
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                <Box flex align="center">
                  <Component {...pageProps} />
                </Box>
              </Box>
            </Box>
        </Grommet>
     </Container>
    );
  }
}
