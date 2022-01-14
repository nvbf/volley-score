import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import Score from '../components/scoreboard/Scoreboard';
import ScoreStore from '../store/store';

class Scoreboard extends React.Component {
  static async getInitialProps(context) {
    return {
      query: context.query,
    };
  }

  constructor(props) {
    super(props);
    const { matchId, scoreDelay} = props.query;
    this.store = new ScoreStore(matchId);
    if (scoreDelay) {
      this.store.setScoreDelay(parseInt(scoreDelay));
    }
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
        <Provider store={this.store}>
          <Score />
        </Provider>
      </div>
    );
  }
}

Scoreboard.propTypes = {
  query: PropTypes.shape({
    matchId: PropTypes.string.isRequired,
    scoreDelay: PropTypes.string // Can we somehow automatic convert this to int if present?
  }).isRequired,
};

export default Scoreboard;
