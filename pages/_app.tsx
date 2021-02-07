/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import DefaultSEO from '@/seo/default';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <DefaultSEO />
        <CssBaseline />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
