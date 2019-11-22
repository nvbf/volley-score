import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Text } from 'evergreen-ui';
import { LabelBox } from './Box';

function ToggleBox(props) {
  const checked = props.checked || false;
  return (
    <LabelBox>
      <Text size={500} textIndent={16} flexGrow={1}>
        {props.label}
      </Text>
      <Switch checked={checked} height={24} onChange={e => props.onChange(e)} marginRight={16} />
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
