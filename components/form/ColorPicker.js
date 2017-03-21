import React, { PropTypes } from 'react';
import { TwitterPicker } from 'react-color';

const colors = [
  '#F2F2F2',
  '#224161',
  '#0074D9',
  '#7FDBFF',
  '#39CCCC',
  '#3D9970',
  '#2ECC40',
  '#01FF70',
  '#FFDC00',
  '#FF851B',
  '#FF4136',
  '#85144b',
  '#F012BE',
  '#B10DC9',
  '#111111',
  '#AAAAAA',
  '#DDDDDD',
];

function ColorPicker(props) {
  return (
    <TwitterPicker
      colors={colors}
      triangle={props.triangle}
      onChangeComplete={props.onChangeComplete}
    />
  );
}

ColorPicker.propTypes = {
  triangle: PropTypes.oneOf(['hide', 'top-left', 'top-right']),
  onChangeComplete: PropTypes.func,
};

export default ColorPicker;
