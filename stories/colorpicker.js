import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import ColorPicker from '../components/form/ColorPicker';

storiesOf('ColorPicker', module)
  .addDecorator(withKnobs)
  .addWithInfo('standard', () =>
    <ColorPicker color="#cc0000" onColorSelect={action('onColorSelect')} />,
  );
