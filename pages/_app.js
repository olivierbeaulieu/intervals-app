import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import settings from '../reducers/settings';
import { GROMMET_THEME } from '../components/config';
import { Grommet } from 'grommet';

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
const makeStore = (initialState, options) => {
  return createStore(
    combineReducers({
      settings,
    }),
    initialState
  );
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // we can dispatch from here too
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    if (typeof window !== 'undefined') {
      window.store = store;
    }

    return (
      <Provider store={store}>
        <Grommet theme={GROMMET_THEME}>
          <Component {...pageProps} />
        </Grommet>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
