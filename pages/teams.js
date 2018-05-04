import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f9f8fc;
  display: flex;
  flex-direction: column;
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
`;

const Box = styled.div`
  background-color: #ffffff;
  border-top: 1px solid #e9e9e9;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: bolder;
  font-size: 18px;

  &:last-child {
    border-bottom: 1px solid #e9e9e9;
  }
`;

const Image = styled.img`
  width: 36px;
  height: 36px;
`;

const Name = styled.div`
  text-indent: 16px;
  flex-grow: 1;
`;

const ShortName = styled.div`
  text-transform: uppercase;
  color: #525f7f;
`;

const teams = [
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
    name: 'BK Tromsø',
    shortName: 'BKT',
    logo: 'http://volleystream.no/static/logo/bkt.svg',
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
    name: 'Bergkameratene',
    shortName: 'BK',
    logo: 'http://volleystream.no/static/logo/bk.svg',
  },
  {
    name: 'TSI',
    shortName: 'TSI',
    logo: 'http://volleystream.no/static/logo/tsi.svg',
  },
  {
    name: 'Sotra VBK',
    shortName: 'Sotra',
    logo: 'http://volleystream.no/static/logo/sotra.svg',
  },
  {
    name: 'Vestli IL',
    shortName: 'Vestli',
    logo: 'http://volleystream.no/static/logo/vestli.svg',
  },
  {
    name: 'Lierne IL',
    shortName: 'Lierne',
    logo: 'http://volleystream.no/static/logo/lierne.svg',
  },
  {
    name: 'Lier',
    shortName: 'Lier',
    logo: 'http://volleystream.no/static/logo/lierne.svg',
  },
  {
    name: 'Sandnes VBK',
    shortName: 'Sandnes',
    logo: 'http://volleystream.no/static/logo/sandnes.svg',
  },
  {
    name: 'KFUM Volda',
    shortName: 'Volda',
    logo: 'http://volleystream.no/static/logo/volda.svg',
  },
  {
    name: 'Blindheim IL',
    shortName: 'Blindheim',
    logo: 'http://volleystream.no/static/logo/blindheim.svg',
  },
  {
    name: 'Skjetten',
    shortName: 'Skjetten',
    logo: 'http://volleystream.no/static/logo/skjetten.svg',
  },
  {
    name: 'ØKSIL',
    shortName: 'ØKSIL',
    logo: 'http://volleystream.no/static/logo/oksil.svg',
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
    name: 'Spirit Lørenskog',
    shortName: 'Spirit',
    logo: 'http://volleystream.no/static/logo/spirit.svg',
  },
  {
    name: 'Farsund IL',
    shortName: 'Farsund',
    logo: 'http://volleystream.no/static/logo/farsund.svg',
  },
  {
    name: 'Polonia Oslo',
    shortName: 'Polonia',
    logo: 'http://volleystream.no/static/logo/polonia.svg',
  },
  {
    name: 'Molde VBK',
    shortName: 'Molde',
    logo: 'http://volleystream.no/static/logo/molde.svg',
  },
  {
    name: 'TRIO',
    shortName: 'TRIO',
    logo: 'http://volleystream.no/static/logo/trio.svg',
  },
  {
    name: 'Stord',
    shortName: 'Stord',
    logo: 'http://volleystream.no/static/logo/stord.svg',
  },
  {
    name: 'Kvernbit',
    shortName: 'Kvernbit',
    logo: 'http://volleystream.no/static/logo/kvernbit.svg',
  },
  {
    name: 'Rossvoll',
    shortName: 'Rossvoll',
    logo: 'http://volleystream.no/static/logo/rossvoll.svg',
  },
  {
    name: 'Søre Neset',
    shortName: 'Søre N',
    logo: 'http://volleystream.no/static/logo/sore.svg',
  },
  {
    name: 'Gneist',
    shortName: 'Gneist',
    logo: 'http://volleystream.no/static/logo/gneist.svg',
  },
  {
    name: 'Ålesund VK',
    shortName: 'Ålesund',
    logo: 'http://volleystream.no/static/logo/alesund.svg',
  },
  {
    name: 'SIF/Hessa IL',
    shortName: 'S/H',
    logo: 'http://volleystream.no/static/logo/hessa.svg',
  },
  {
    name: 'Fræna VK',
    shortName: 'Fræna',
    logo: 'http://volleystream.no/static/logo/frana.svg',
  },
  {
    name: 'Ellingsøy VBK',
    shortName: 'Ellingsøy',
    logo: 'http://volleystream.no/static/logo/ellingsoy.svg',
  },
  {
    name: 'Volda Studentidrettslag',
    shortName: 'Volda SI',
    logo: 'http://volleystream.no/static/logo/voldasi.svg',
  },
  {
    name: 'Bodø Volley',
    shortName: 'Bodø',
    logo: 'http://volleystream.no/static/logo/bodo.svg',
  },
  {
    name: 'Alta',
    shortName: 'Alta',
    logo: 'http://volleystream.no/static/logo/alta.svg',
  },
  {
    name: 'Sortland VBK',
    shortName: 'Sortland',
    logo: 'http://volleystream.no/static/logo/sortland.svg',
  },
  {
    name: 'Breimsbygda IL',
    shortName: 'Breim',
    logo: 'http://volleystream.no/static/logo/breimsbygda.svg',
  },
  {
    name: 'Studentspretten IL',
    shortName: 'S. Spretten',
    logo: 'http://volleystream.no/static/logo/studentspretten.svg',
  },
  {
    name: 'Sunnfjord IL',
    shortName: 'Sunnfjord',
    logo: 'http://volleystream.no/static/logo/sunnfjord.svg',
  },
  {
    name: 'Svelgen T&IF',
    shortName: 'Svelgen',
    logo: 'http://volleystream.no/static/logo/svelgen.svg',
  },
  {
    name: 'Florø T&IF',
    shortName: 'Florø',
    logo: 'http://volleystream.no/static/logo/floro.svg',
  },
  {
    name: 'Jølster IL',
    shortName: 'Jølster',
    logo: 'http://volleystream.no/static/logo/jolster.svg',
  },
  {
    name: 'Gjesdal',
    shortName: 'Gjesdal',
    logo: 'http://volleystream.no/static/logo/gjesdal.svg',
  },
  {
    name: 'KSK',
    shortName: 'KSK',
    logo: 'http://volleystream.no/static/logo/ksk.svg',
  },
  {
    name: 'UiSi',
    shortName: 'UiSI',
    logo: 'http://volleystream.no/static/logo/uisi.svg',
  },
  {
    name: 'Haugesund KFUK-KFUM',
    shortName: 'Haugesund',
    logo: 'http://volleystream.no/static/logo/haugesund.svg',
  },
  {
    name: 'Froland',
    shortName: 'Froland',
    logo: 'http://volleystream.no/static/logo/froland.svg',
  },
  {
    name: 'Straen',
    shortName: 'Straen',
    logo: 'http://volleystream.no/static/logo/straen.svg',
  },
  {
    name: 'KFUM Stavanger',
    shortName: 'Stavanger',
    logo: 'http://volleystream.no/static/logo/stavanger.svg',
  },
  {
    name: 'Mandal',
    shortName: 'Mandal',
    logo: 'http://volleystream.no/static/logo/mandal.svg',
  },
  {
    name: 'Fjellmann IL',
    shortName: 'Fjellmann',
    logo: 'http://volleystream.no/static/logo/fjellmann.svg',
  },
  {
    name: 'Blussuvoll',
    shortName: 'Blussuvoll',
    logo: 'http://volleystream.no/static/logo/blussuvoll.svg',
  },
  {
    name: 'Nyborg IL',
    shortName: 'Nyborg',
    logo: 'http://volleystream.no/static/logo/nyborg.svg',
  },
  {
    name: 'Snåsa',
    shortName: 'Snåsa',
    logo: 'http://volleystream.no/static/logo/snåsa.svg',
  },
  {
    name: 'Levangerstudentene',
    shortName: 'Levanger',
    logo: 'http://volleystream.no/static/logo/levanger.svg',
  },
  {
    name: 'Tønsberg Volley',
    shortName: 'Tønsberg',
    logo: 'http://volleystream.no/static/logo/tonsberg.svg',
  },
  {
    name: 'Bislett Volley',
    shortName: 'Bislett',
    logo: 'http://volleystream.no/static/logo/bislett.svg',
  },
  {
    name: 'Asker',
    shortName: 'Asker',
    logo: 'http://volleystream.no/static/logo/asker.svg',
  },
  {
    name: 'Kolbotn',
    shortName: 'Kolbotn',
    logo: 'http://volleystream.no/static/logo/kolbotn.svg',
  },
  {
    name: 'NHHI',
    shortName: 'NHHI',
    logo: 'http://volleystream.no/static/logo/nhhi.svg',
  },
  {
    name: 'Lyderhorn',
    shortName: 'Lyderhorn',
    logo: 'http://volleystream.no/static/logo/lyderhorn.svg',
  },
  {
    name: 'VSI',
    shortName: 'VSI',
    logo: 'http://volleystream.no/static/logo/vsi.svg',
  },
  {
    name: 'Kristiansund VBK',
    shortName: 'Kistiansund',
    logo: 'http://volleystream.no/static/logo/kristiansund.svg',
  },
  {
    name: 'Finnsnes',
    shortName: 'Finnsnes',
    logo: 'http://volleystream.no/static/logo/finnsnes.svg',
  },
  {
    name: 'Dristug',
    shortName: 'Dristug',
    logo: 'http://volleystream.no/static/logo/dristug.svg',
  },
  {
    name: 'GSI',
    shortName: 'GSI',
    logo: 'http://volleystream.no/static/logo/gsi.svg',
  },
  {
    name: 'Austrått',
    shortName: 'Austrått',
    logo: 'http://volleystream.no/static/logo/austratt.svg',
  },
  {
    name: 'KSI',
    shortName: 'KSI',
    logo: 'http://volleystream.no/static/logo/ksi.svg',
  },
  {
    name: 'Egersund',
    shortName: 'Egersund',
    logo: 'http://volleystream.no/static/logo/egersund.svg',
  },
  {
    name: 'Grimstad VBK',
    shortName: 'Grimstad',
    logo: 'http://volleystream.no/static/logo/grimstad.svg',
  },
  {
    name: 'Dysjaland',
    shortName: 'Dysjaland',
    logo: 'http://volleystream.no/static/logo/dysjaland.svg',
  },
  {
    name: 'Verdal',
    shortName: 'Verdal',
    logo: 'http://volleystream.no/static/logo/verdal.svg',
  },
  {
    name: 'TBK',
    shortName: 'TBK',
    logo: 'http://volleystream.no/static/logo/tbk.svg',
  },
  {
    name: 'Halden',
    shortName: 'Halden',
    logo: 'http://volleystream.no/static/logo/halden.svg',
  },
  {
    name: 'Borgen',
    shortName: 'Borgen',
    logo: 'http://volleystream.no/static/logo/borgen.svg',
  },
  {
    name: 'Oldenborg',
    shortName: 'Oldenborg',
    logo: 'http://volleystream.no/static/logo/oldenborg.svg',
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

class Teams extends React.Component {
  render() {
    return (
      <Container>
        <PreTitle>midtnordisk18</PreTitle>
        <Title>Home Team</Title>

        <Box>NTNUI</Box>
        <Box>Use logo</Box>
        {teams.map(team => (
          <TeamBox logo={team.logo} name={team.name} shortName={team.shortName} />
        ))}
      </Container>
    );
  }
}

export default Teams;
