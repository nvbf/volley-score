import React from 'react';
import ScorePreview from '../scorePreview';
import { PreTitle, Title, SubSectionTitle } from '../shared/Title';
import ControlPanel from '../control/NewControlPanel';
import SectionContainer from '../shared/SectionContainer';
import IconButton from '../shared/IconButton';

function ScoreControl(props) {
  return (
    <React.Fragment>
      <PreTitle>midtnordisk18</PreTitle>
      <Title>Scoreboard</Title>
      <SubSectionTitle>Preview</SubSectionTitle>
      <ScorePreview />
      <SubSectionTitle>Control Panel</SubSectionTitle>
      <ControlPanel
        flipped={false}
        homeTeam={{
          name: 'TBK',
          points: 16,
          sets: 1,
          logo: 'http://volleystream.no/static/logo/tbk.svg',
        }}
        guestTeam={{
          name: 'Askim',
          points: 9,
          sets: 2,
          logo: 'http://volleystream.no/static/logo/askim.svg',
        }}
      />
      <SectionContainer>
        <IconButton icon="/static/icon/flip.svg" text="Flip teams" />
        <IconButton icon="/static/icon/reset.svg" text="Reset points" />
      </SectionContainer>
    </React.Fragment>
  );
}

export default ScoreControl;
