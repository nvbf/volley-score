import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, number, text } from '@kadira/storybook-addon-knobs';
import { host } from 'storybook-host';
import Bar from '../components/player/Bar';
import BarList from '../components/player/BarList';
import Header from '../components/player/Header';
import PlayerList from '../components/player/PlayerList';
import BigHeader from '../components/player/BigHeader';

const numberRange = (label, min, max) =>
  number(
    label,
    0,
    {
      range: true,
      min,
      max,
      step: 1,
      default: 1,
    },
    1,
  );

const tromso = {
  name: 'BK Tromsø',
  logo: '/logo/bktromso.svg',
  players: [
    { num: 2, name: 'Kristjan Valdimarsson', position: 'Senter' },
    { num: 3, name: 'Martin Støyten', position: 'Kant' },
    { num: 7, name: 'Ivan Ristic', position: 'Kant' },
    { num: 8, name: 'Petter Østvik', position: 'Senter' },
    { num: 9, name: 'Ruben Mæland', position: 'Senter' },
    { num: 10, name: 'Robin Bergheim', position: 'Opplegger' },
    { num: 11, name: 'Christian Fredriksen', position: 'Opplegger' },
    { num: 14, name: 'Erlend Isaksen', position: 'Kant' },
    { num: 15, name: 'Haakon Elvevoll', position: 'Kant' },
    { num: 17, name: 'Peder Sørheim', position: 'Senter' },
    { num: 12, name: 'Fredrik Østvik', position: 'Libero' },
    { num: 18, name: 'Vegard Paulsen', position: 'Libero' },
  ],
};

const ntnui = {
  name: 'NTNUI',
  logo: '/logo/ntnui.svg',
  players: [
    { num: 1, name: 'Erlend Henriksveen', position: 'Kant' },
    { num: 2, name: 'Vegard Løkken', position: 'Senter' },
    { num: 4, name: 'Cato Seljevold', position: 'Sebter' },
    { num: 6, name: 'Rune Hamnes', position: 'Senter' },
    { num: 7, name: 'Jon Arnesen', position: 'Kant' },
    { num: 8, name: 'Ivar Råheim', position: 'Senter' },
    { num: 9, name: 'Sigurd Van Dijk Festøy', position: 'Diagonal' },
    { num: 11, name: 'Morten Lillehagen', position: 'Kant' },
    { num: 13, name: 'Eskil Haugum', position: 'Opplegger' },
    { num: 15, name: 'Espen Mokkelbost', position: 'Opplegger' },
    { num: 3, name: 'Simen Henriksveen', position: 'Libero' },
    { num: 5, name: 'Sjur Føyen', position: 'Libero' },
  ],
};

const withHost = host({
  title: 'Bar',
  align: 'center',
  height: '720px',
  width: '1280px',
  backdrop: '#222',
});

storiesOf('Bar', module)
  .addDecorator(withKnobs)
  .addDecorator(withHost)
  .addWithInfo('single normal', () => (
    <Bar
      number={numberRange('Shirt number', 1, 16)}
      name={text('name', 'Arjan Van Dijk Festøy')}
      position={text('position', 'Diagonal')}
    />
  ))
  .addWithInfo('single libero', () => (
    <Bar
      number={numberRange('Shirt number', 1, 16)}
      name={text('name', 'Magnus Rodahl')}
      position={text('position', 'Libero')}
    />
  ))
  .addWithInfo('BarList', () => <BarList team={tromso} />)
  .addWithInfo('Header', () => <Header logo={tromso.logo} text={tromso.name} />)
  .addWithInfo('BigHeader', () => <BigHeader logo={tromso.logo} text={tromso.name} />)
  .addWithInfo('DoublePlayerList', () => <PlayerList team={tromso} />);
