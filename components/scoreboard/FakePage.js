import React from 'react';

import { Scoreboard } from './Scoreboard';

class ScoreboardForPrint extends React.Component {
  render() {
    const props = {
      isShowing: true,
      homeTeam: {
        points: 0,
        sets: 0,
        name: 'Test / Test 1',
      },
      awayTeam: {
        name: 'Test / Test 2',
        sets: 0,
        points: 0,
      },
    };

    return <Scoreboard {...props} />;
  }
}

module.exports = ScoreboardForPrint;
