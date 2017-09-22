import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import CheckBox from '../components/form/CheckBox';

storiesOf('CheckBox', module)
  .addDecorator(withKnobs)
  .addWithInfo('standard', () =>
    <CheckBox
      checked={boolean('checked')}
      onCheck={action('onCheck')}
      label={text('label', 'Show logos')}
    />,
  );
