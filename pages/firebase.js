import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import Score from '../components/scoreboard/new/Scoreboard';
import FirebaseStore from '../store/firebase';

class Scoreboard extends React.Component {
  static async getInitialProps(context) {
    return {
      query: context.query,
    };
  }

  constructor(props) {
    super(props);
    this.store = new FirebaseStore(props.query.matchKey);
  }

  componentDidMount() {
    this.store.startUpdates();
  }

  componentWillUnmount() {
    this.store.stopUpdates();
  }

  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>OBS Scoreboard</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/css/base.css" />
        </Head>
        <Provider store={this.store}>
          <Score />
        </Provider>
      </div>
    );
  }
}

Scoreboard.propTypes = {
  query: PropTypes.shape({
    matchKey: PropTypes.string,
  }).isRequired,
};

export default Scoreboard;
