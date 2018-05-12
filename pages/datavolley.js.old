import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import Score from '../components/scoreboard/Scoreboard';
import DataVolleyStore from '../store/datavolley';

class Scoreboard extends React.Component {
  static async getInitialProps({ query }) {
    return {
      match: query.match,
      homeColor: query.homeColor || '',
      awayColor: query.awayColor || '',
    };
  }

  constructor(props) {
    super(props);
    this.store = new DataVolleyStore(props.match, props.homeColor, props.awayColor);
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
  match: PropTypes.string.isRequired,
  homeColor: PropTypes.string,
  awayColor: PropTypes.string,
};

export default Scoreboard;
