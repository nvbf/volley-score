import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LabelBox } from './Box';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const Label = styled.span`
  text-indent: 16px;
  flex-grow: 1;
`;

function ToggleBox(props) {
  const checked = props.checked || false;
  return (
    <LabelBox>
      <Label>{props.label}</Label>
      <Toggle checked={checked} icons={false} onChange={(e) => props.onChange(e)} />
    </LabelBox>
  );
}

ToggleBox.defaultProps = {
  checked: false,
  label: '',
};

ToggleBox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default ToggleBox;
