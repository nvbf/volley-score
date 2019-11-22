import React from 'react';
import debounce from 'lodash.debounce';
import { TextInputField, Heading } from 'evergreen-ui';
import Container from './Container';

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
        <Heading size={900} marginTop={24} marginBottom={16} marginLeft={16}>
          Match ID
        </Heading>
        <Container>
          <TextInputField
            label="Insert match ID"
            width="100%"
            marginTop={8}
            marginBottom={24}
            inputHeight={48}
            value={this.state.matchId}
            onChange={(e) => {
              this.updateMatchId(e.target.value);
            }}
          />
          <TextInputField
            marginTop={8}
            marginBottom={24}
            label="Stream overlay link"
            width="100%"
            inputHeight={48}
            value={`http://score.volleystream.no/scoreboard?matchId=${this.state.matchId}`}
            disabled
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default MatchId;
