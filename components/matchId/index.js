import React from 'react';
import { SectionTitle } from '../shared/Title';
import TextInput from './TextInput';
import Container from './Container';
import InputLabel from './InputLabel';
import debounce from 'lodash/debounce';

class MatchId extends React.Component {
  constructor(props) {
    super(props);
    this.bouncedOnChange = debounce(props.onChange, 200);
    this.state = {
      matchId: props.id || '',
    };
  }

  updateMatchId = (matchId) => {
    this.setState({
      matchId,
    });
    this.bouncedOnChange(matchId);
  };

  render() {
    return (
      <React.Fragment>
        <SectionTitle>Match ID</SectionTitle>
        <Container>
          <InputLabel>Insert match ID</InputLabel>
          <TextInput
            value={this.state.matchId}
            onChange={(e) => {
              this.updateMatchId(e.target.value);
            }}
          />
          <InputLabel>Stream overlay link</InputLabel>
          <TextInput
            value={`http://score.volleystream.no/scoreboard?matchId=${this.state.matchId}`}
            disabled
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default MatchId;
