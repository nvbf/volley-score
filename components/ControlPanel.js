import React, { PropTypes } from 'react';
import TeamControl from './TeamControl';
import classNames from 'classnames';
import styled from 'styled-components';
import CheckBox from './form/CheckBox';
import Notification from './Notification';

const SuperCheckBox = styled(CheckBox)`
  margin-right: 4px;
`;

function ControlPanel(props) {
  return (
    <div>
      <section className="section container">

        <h1 className="title is-1">Volleyball Scoreboard</h1>
      </section>
      <section className="section container">
        <Notification>
          Please insert a match code. This can be anything.
          It does not really matter what it is, unless you want to remember it for later, or when you open
          this page on your cell phone.<br />
          If you pick something common, like "123", chances are high someone else i going to do the same.<br />
          <strong>Example</strong>: "dragvoll-court-1".
        </Notification>
        <label className="label" htmlFor="matchId">Match Code</label>
        <p className="control">
          <input
            type="text"
            className="input is-large"
            onChange={props.onMatchIdChange}
            placeholder="Match Code"
            id="matchId"
          />
        </p>
      </section>
      { props.matchId.length > 2 &&
        <div>
          <section id="scoreLinkSection" className="section container">
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
          <section id="buttonList" className="section container is-flex">
            <div className="control">
              <button className="button is-large is-danger right-margin-4" onClick={props.onResetClick}>Reset points</button>
              <button className="button is-large is-info right-margin-4" onClick={props.onFlipClick}>Flip teams</button>
            </div>
            <SuperCheckBox
              checked={props.showLogos}
              label="Team logos"
              onCheck={props.onLogoCheck}
            />
            <SuperCheckBox
              checked={props.showColors}
              label="Shirt colors"
              onCheck={props.onColorCheck}
            />
          </section>
          <section id="controlPanel" className="section container">
            <div className={classNames('columns', 'is-mobile', { 'is-reversed': props.isFlipped })}>
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
                isFlipped={!props.isFlipped}
                isGreen={false}
                showLogo={props.showLogos}
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
                isFlipped={props.isFlipped}
                isGreen
                showLogo={props.showLogos}
              />
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
  onLogoCheck: PropTypes.func,
  onColorCheck: PropTypes.func,
  onFlipClick: PropTypes.func.isRequired,
  matchId: PropTypes.string,
  pointsA: PropTypes.number,
  pointsB: PropTypes.number,
  setA: PropTypes.number,
  setB: PropTypes.number,
  nameA: PropTypes.string,
  nameB: PropTypes.string,
  logoA: PropTypes.string,
  logoB: PropTypes.string,
  isFlipped: PropTypes.bool,
  showLogos: PropTypes.bool,
  showColors: PropTypes.bool,
};

export default ControlPanel;
