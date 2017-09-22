import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.button`
  width: 200px;
  border: 1px solid ${props => (props.checked ? '#00d1b2' : '#ff3860')};
  height: 48px;
  border-radius: 3px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  color: ${props => (props.checked ? '#00d1b2' : '#ff3860')};
`;

const CheckMark = styled.div`
  height: 16px;
  width: 16px;
`;

const Label = styled.div`
  margin-left: 16px;
  font-size: 16px;
`;

function CheckBox(props) {
  return (
    <Container className={props.className} checked={props.checked} onClick={props.onCheck}>
      <CheckMark>{props.checked ? '✅' : '❌'}</CheckMark>
      {!!props.label.length && <Label>{props.label}</Label>}
    </Container>
  );
}

CheckBox.defaultProps = {
  checked: false,
  label: '',
};

CheckBox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onCheck: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default CheckBox;
