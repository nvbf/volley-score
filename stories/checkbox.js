import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, boolean, text } from '@kadira/storybook-addon-knobs';
import { host } from 'storybook-host';
import CheckBox from '../components/form/CheckBox';

const withHost = host({
  title: 'CheckBox',
  align: 'center',
  height: '80%',
  width: '100%',
});

storiesOf('CheckBox', module)
  .addDecorator(withKnobs)
  .addDecorator(withHost)
  .addWithInfo('standard', () => (
    <CheckBox
      checked={boolean('checked')}
      onCheck={action('onCheck')}
      label={text('label', 'Show logos')}
    />
  ));
