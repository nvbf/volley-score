import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'mobx-react';
import Score from '../components/scoreboard/Scoreboard';
import FirebaseStore from '../store/firebase';

class Scoreboard extends React.Component {
  static async getInitialProps({ query }) {
    return {
      tournament: query.tournament,
      match: query.match,
      homeColor: query.homeColor || '',
      awayColor: query.awayColor || '',
    };
  }

  constructor(props) {
    super(props);
    this.store = new FirebaseStore(props.tournament, props.match, props.homeColor, props.awayColor);
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
  tournament: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
  homeColor: PropTypes.string.isRequired,
  awayColor: PropTypes.string.isRequired,
};

export default Scoreboard;
