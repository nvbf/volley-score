import React from 'react';
import Head from 'next/head';
import Score from '../components/scoreboard/Scoreboard.js';
import isEqual from 'lodash/isEqual';
import ScoreStore from '../store/store';
import { Provider } from 'mobx-react';

class Scoreboard extends React.Component {

  constructor(props) {
    super(props);
    this.store = new ScoreStore(props.query.matchId);
  }

  static async getInitialProps(context) {
    return {
      query: context.query,
    };
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.state, nextState);
  }*/

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

export default Scoreboard;
