import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyle } from '../theme';
import { UserAgentProvider } from '../lib/ua';

export default class WooApp extends App {
  state = {
    userAgent: this.props.userAgent
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const userAgent = ctx.req
      ? ctx.req.headers['user-agent']
      : navigator.userAgent;

    return { pageProps, userAgent };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    const { userAgent } = this.state;
    if (userAgent !== navigator.userAgent) {
      this.setState({ userAgent: navigator.userAgent });
    }
  };

  render() {
    const { Component, pageProps } = this.props;
    const { userAgent } = this.state;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <UserAgentProvider value={userAgent}>
              <Component {...pageProps} />
            </UserAgentProvider>
          </>
        </ThemeProvider>
      </Container>
    );
  }
}
