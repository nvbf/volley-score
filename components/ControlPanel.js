import React, { PropTypes } from 'react';
import TeamControl from './TeamControl';

function ControlPanel(props) {
  return (
    <div>
      <section className="section">
        <h1 className="title is-1">Volleyball Scoreboard</h1>
      </section>
      <section className="section">
        <label className="label" htmlFor="matchId">Match ID</label>
        <p className="control">
          <input
            type="text"
            className="input is-large"
            onChange={props.onMatchIdChange}
            placeholder="Match ID"
            id="matchId"
          />
        </p>
      </section>
      { props.matchId.length > 2 &&
        <div>
          <section id="scoreLinkSection" className="section">
            <label className="label" htmlFor="scoreLink">Scoreboard Link</label>
            <p className="control">
              <input
                type="text"
                className="input is-large"
                placeholder="Scoreboard Link"
                id="scoreLink"
                readOnly
                value={`${window.location.href}scoreboard?matchId=${props.matchId}`}
              />
            </p>
          </section>
          <section id="controlPanel" className="section">
            <div className="columns is-mobile">
              <TeamControl
                nameLabel="Home Team"
                name={props.nameA}
                onNameChange={props.onNameAChange}
                points={props.pointsA}
                sets={props.setA}
                incrementPoints={() => props.onIncrement('pointsA')}
                decrementPoints={() => props.onDecrement('pointsA')}
                incrementSets={() => props.onIncrement('setA')}
                decrementSets={() => props.onDecrement('setA')}
                onLogoChange={props.onLogoAChange}
                logo={props.logoA}
                isFlipped
              />
              <TeamControl
                nameLabel="Away Team"
                name={props.nameB}
                onNameChange={props.onNameBChange}
                points={props.pointsB}
                sets={props.setB}
                incrementPoints={() => props.onIncrement('pointsB')}
                decrementPoints={() => props.onDecrement('pointsB')}
                incrementSets={() => props.onIncrement('setB')}
                decrementSets={() => props.onDecrement('setB')}
                onLogoChange={props.onLogoBChange}
                logo={props.logoB}
              />
            </div>
          </section>
          <section id="buttonList" className="section is-flex">
            <div className="control">
              <a className="button is-large is-danger" onClick={props.onResetClick}>Reset points</a>
            </div>
          </section>
        </div>
      }
      </div>
  );
}

ControlPanel.propTypes = {
  onMatchIdChange: PropTypes.func,
  onNameAChange: PropTypes.func,
  onNameBChange: PropTypes.func,
  onLogoAChange: PropTypes.func,
  onLogoBChange: PropTypes.func,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onResetClick: PropTypes.func,
  matchId: PropTypes.string,
  pointsA: PropTypes.number,
  pointsB: PropTypes.number,
  setA: PropTypes.number,
  setB: PropTypes.number,
  nameA: PropTypes.string,
  nameB: PropTypes.string,
  logoA: PropTypes.string,
  logoB: PropTypes.string,
};

export default ControlPanel;
