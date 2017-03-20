import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, number, select, boolean } from '@kadira/storybook-addon-knobs';
import { host } from 'storybook-host';
import Scoreboard from '../components/scoreboard/Scoreboard';

const withHost = host({
  title: 'Scoreboard',
  align: 'center',
  height: '80%',
  width: '100%',
});

const numberFromZeroToNinetyNine = label => number(label, 0, {
   range: true,
   min: 0,
   max: 99,
   step: 1,
});

const numberFromZeroToNine = label => number(label, 0, {
   range: true,
   min: 0,
   max: 9,
   step: 1,
});

const logoSelect = label => select(label, {
  '/logo/ksk.svg': 'KSK',
  '/logo/ntnui.svg': 'NTNUI',
  '/logo/viking.svg': 'Viking'
}, '/logo/ntnui.svg');


storiesOf('Scoreboard', module)
  .addDecorator(withKnobs)
  .addDecorator(withHost)
  .addWithInfo('with no props', () => (
    <Scoreboard
      homeTeam={{
        name: text('homeTeam name'),
        logo: logoSelect('logo'),
        points: numberFromZeroToNinetyNine('points'),
        sets: numberFromZeroToNine('sets'),
        color: text('color'),
      }}
      awayTeam={{
        name: text('awayTeam name'),
        logo: logoSelect('awayteam logo'),
        points: numberFromZeroToNinetyNine('awayteam points'),
        sets: numberFromZeroToNine('awayteam sets'),
        color: text('awayteam color'),
      }}
      showColors={boolean('show color')}
      showLogos={boolean('show logos')}

    />
  ));
