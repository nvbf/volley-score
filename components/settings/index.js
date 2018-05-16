import React from 'react';
import styled from 'styled-components';
import ToggleBox from '../shared/ToggleBox';
import { SectionTitle, SubSectionTitle } from '../shared/Title';
import SectionContainer from '../shared/SectionContainer';
import SelectBox from '../shared/SelectBox';

const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function Settings(props) {
  return (
    <React.Fragment>
      <SectionTitle>Settings</SectionTitle>
      <SectionContainer>
        <ToggleBox label="Show shirt colors" />
        <ToggleBox label="Show logos" />
      </SectionContainer>
      <SectionContainer>
        <SectionGroup>
          <SubSectionTitle>Home Team</SubSectionTitle>
          <SelectBox
            text="Trondheim Ballklubb"
            logo="http://volleystream.no/static/logo/tbk.svg"
            selectText="Select club"
          />
          <SelectBox text="Coral Blue" color="lightblue" selectText="Select color" />
        </SectionGroup>
        <SectionGroup>
          <SubSectionTitle>Guest Team</SubSectionTitle>
          <SelectBox
            text="Askim VBK"
            logo="http://volleystream.no/static/logo/askim.svg"
            selectText="Select club"
          />
          <SelectBox text="Crazy Yellow" color="orange" selectText="Select color" />
        </SectionGroup>
      </SectionContainer>
    </React.Fragment>
  );
}

export default Settings;
