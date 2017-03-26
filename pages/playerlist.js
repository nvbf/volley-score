import React from 'react';
import Head from 'next/head';
import PlayerList from '../components/player/PlayerList';

const tromso = {
  name: 'BK Tromsø',
  logo: '/static/logo/bktromso.svg',
  players: [
    { num: 1, name: 'Kristoffer Østvik', position: 'Kant', image: 'http://poengliga.no/img_players/3.jpg' },
    { num: 2, name: 'Kristjan Valdimarsson', position: 'Senter', image: 'http://poengliga.no/img_players/player2.png' },
    { num: 3, name: 'Martin Støyten', position: 'Kant', image: 'http://poengliga.no/img_players/5.jpg' },
    { num: 7, name: 'Ivan Ristic', position: 'Kant', image: 'http://poengliga.no/img_players/86.jpg' },
    { num: 8, name: 'Petter Østvik', position: 'Senter', image: 'http://poengliga.no/img_players/223.jpg' },
    { num: 9, name: 'Ruben Mæland', position: 'Senter', image: 'http://poengliga.no/img_players/137.jpg' },
    { num: 10, name: 'Robin Bergheim', position: 'Opplegger', image: 'http://poengliga.no/img_players/61.jpg' },
    { num: 11, name: 'Christian Fredriksen', position: 'Opplegger', image: 'http://poengliga.no/img_players/player2.png' },
    { num: 14, name: 'Erlend Isaksen', position: 'Kant', image: 'http://poengliga.no/img_players/243.jpg' },
    { num: 15, name: 'Haakon Elvevoll', position: 'Kant', image: 'http://poengliga.no/img_players/244.jpg' },
    { num: 17, name: 'Peder Sørheim', position: 'Senter', image: 'http://poengliga.no/img_players/179.jpg' },
    { num: 12, name: 'Fredrik Østvik', position: 'Libero', image: 'http://poengliga.no/img_players/11.jpg' },
    { num: 18, name: 'Vegard Paulsen', position: 'Libero', image: 'http://poengliga.no/img_players/18.jpg' },
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
