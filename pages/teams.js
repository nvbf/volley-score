import React from 'react';
import styled from 'styled-components';
import 'react-toggle/style.css'; // for ES6 modules
import Toggle from 'react-toggle';
import Box, { LabelBox } from '../components/Box';

const Container = styled.div`
  background-color: #f9f8fc;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    width: 800px;
    margin: auto;
    flex-wrap: wrap;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PreTitle = styled.div`
  font-size: 18px;
  color: #525f7f;
  font-weight: bolder;
  text-transform: uppercase;
  text-indent: 16px;
  padding-top: 16px;
`;

const Title = styled.h1`
  margin: 0;
  text-indent: 16px;
  font-size: 39px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 36px;
  height: 36px;
  min-width: 36px;
`;

const Name = styled.div`
  text-indent: 16px;
  flex-grow: 1;
`;

const ShortName = styled.div`
  text-transform: uppercase;
  color: #525f7f;
`;

const mizuno = [
  {
    name: 'NTNUI Volleyball',
    shortName: 'NTNUI',
    logo: 'http://volleystream.no/static/logo/ntnui.svg',
  },
  {
    name: 'Førde',
    shortName: 'Førde',
    logo: 'http://volleystream.no/static/logo/forde.svg',
  },
  {
    name: 'TIF Viking',
    shortName: 'Viking',
    logo: 'http://volleystream.no/static/logo/viking.svg',
  },
  {
    name: 'ToppVolley Norge',
    shortName: 'TVN',
    logo: 'http://volleystream.no/static/logo/tvn.svg',
  },
  {
    name: 'Randaberg IL',
    shortName: 'Randaberg',
    logo: 'http://volleystream.no/static/logo/randaberg.svg',
  },
  {
    name: 'Koll',
    shortName: 'Koll',
    logo: 'http://volleystream.no/static/logo/koll.svg',
  },
  {
    name: 'OSI',
    shortName: 'OSI',
    logo: 'http://volleystream.no/static/logo/osi.svg',
  },
  {
    name: 'Stod IL',
    shortName: 'Stod',
    logo: 'http://volleystream.no/static/logo/stod.svg',
  },
  {
    name: 'Lierne IL',
    shortName: 'Lierne',
    logo: 'http://volleystream.no/static/logo/lierne.svg',
  },
];

const firstDiv = [
  {
    name: 'Vestli IL',
    shortName: 'Vestli',
    logo: 'http://volleystream.no/static/logo/vestli.svg',
  },

  {
    name: 'Sandnes VBK',
    shortName: 'Sandnes',
    logo: 'http://volleystream.no/static/logo/sandnes.svg',
  },
  {
    name: 'Blindheim IL',
    shortName: 'Blindheim',
    logo: 'http://volleystream.no/static/logo/blindheim.svg',
  },
  {
    name: 'BSI',
    shortName: 'BSI',
    logo: 'http://volleystream.no/static/logo/bsi.svg',
  },
  {
    name: 'Askim VBK',
    shortName: 'Askim',
    logo: 'http://volleystream.no/static/logo/askim.svg',
  },
  {
    name: 'Sunnfjord IL',
    shortName: 'Sunnfjord',
    logo: 'http://volleystream.no/static/logo/sunnfjord.svg',
  },
  {
    name: 'KSK',
    shortName: 'KSK',
    logo: 'http://volleystream.no/static/logo/ksk.svg',
  },
  {
    name: 'Blussuvoll',
    shortName: 'Blussuvoll',
    logo: 'http://volleystream.no/static/logo/blussuvoll.svg',
  },
  {
    name: 'Tønsberg Volley',
    shortName: 'Tønsberg',
    logo: 'http://volleystream.no/static/logo/tonsberg.svg',
  },
  {
    name: 'TBK',
    shortName: 'TBK',
    logo: 'http://volleystream.no/static/logo/tbk.svg',
  },
];

function TeamBox(props) {
  return (
    <Box>
      <Image src={props.logo} alt={props.name} />
      <Name>{props.name}</Name>
      <ShortName>{props.shortName}</ShortName>
    </Box>
  );
}

const BigName = styled.div``;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-indent: 16px;
  margin-top: 24px;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const Button = styled.button`
  border: 1px solid #a70f7f;
  background-color: transparent;
  border-radius: 4px;
  height: 32px;
  width: 80px;
  text-align: center;
  color: #a70f7f;
  font-size: 18px;
  margin-top: 8px;
  margin-right: 16px;
`;

const NameInput = styled.input`
  font-size: 36px;
  margin-left: 16px;
  box-sizing: border-box;
  height: 100%;
  margin: 4px 8px;
  flex-grow: 1;
  min-width: 100px;
  border: none;
`;

class Teams extends React.Component {
  render() {
    return (
      <Container>
        <FlexColumn>
          <PreTitle>midtnordisk18</PreTitle>
          <TitleRow>
            <Title>Home Team</Title>
            <Button>Done</Button>
          </TitleRow>
        </FlexColumn>

        <TeamContainer>
          <Box>
            <Image src="http://volleystream.no/static/logo/ntnui.svg" alt="ntnui" />
            <NameInput value="NTNUI" />
          </Box>
          <LabelBox>
            <Name>Use logo</Name>
            <Toggle defaultChecked={false} icons={false} onChange={() => null} />
          </LabelBox>
        </TeamContainer>

        <SectionTitle>Mizunoligaen</SectionTitle>
        <TeamContainer>
          {mizuno.map(team => (
            <TeamBox logo={team.logo} name={team.name} shortName={team.shortName} />
          ))}
        </TeamContainer>

        <SectionTitle>1. Divisjon</SectionTitle>
        <TeamContainer>
          {firstDiv.map(team => (
            <TeamBox logo={team.logo} name={team.name} shortName={team.shortName} />
          ))}
        </TeamContainer>
      </Container>
    );
  }
}

export default Teams;
