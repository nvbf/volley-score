import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, boolean, text, select } from '@kadira/storybook-addon-knobs';
import { host } from 'storybook-host';
import ColorPicker from '../components/form/ColorPicker';

const withHost = host({
  title: 'ColorPicker',
  align: 'center',
  height: '80%',
  width: '100%',
});

storiesOf('ColorPicker', module)
  .addDecorator(withKnobs)
  .addDecorator(withHost)
  .addWithInfo('standard', () => (
    <ColorPicker
      triangle={select('triangle', ['hide', 'top-left', 'top-right'], 'top-left')}
      onChangeComplete={action('onChangeComplete')}
    />
  ));
