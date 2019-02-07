import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

interface IProps {
    styleTags: {};
}

export default class MyDocument extends Document<IProps> {
  public static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  public render() {
    return (
      <html lang="en-US">
        <Head>
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="fragment" content="!" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="shortcut icon" type="image/png" href="/static/img/shortcut-icon.png" />
          <link rel="apple-touch-icon" sizes="196x196" type="image/png" href="/static/img/mobile-app-icon.png" />
        </Head>
        <body style={{ margin: 0 }} >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
