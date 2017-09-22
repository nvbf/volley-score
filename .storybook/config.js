import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

function loadStories() {
  require('../stories/scoreboard');
  require('../stories/checkbox');
  require('../stories/colorpicker');
}

configure(loadStories, module);
