import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import Score from '../components/scoreboard/new/Scoreboard';
import FirebaseStore from '../store/firebase';

class Scoreboard extends React.Component {
  static async getInitialProps({ query }) {
    return {
      tournament: query.tournament,
      match: query.match,
    };
  }

  constructor(props) {
    super(props);
    this.store = new FirebaseStore(props.tournament, props.match);
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
  tournament: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
};

export default Scoreboard;
