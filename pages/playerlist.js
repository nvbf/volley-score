import React from 'react';
import Head from 'next/head';
import PlayerList from '../components/player/PlayerList';

const tromso = {
  name: 'BK Tromsø',
  logo: '/static/logo/bktromso.svg',
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

export default () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>OBS Scoreboard</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
      <link rel="stylesheet" href="/static/css/base.css" />
    </Head>
    <PlayerList team={tromso} />
  </div>
);
