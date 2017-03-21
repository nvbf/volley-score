import React, { PropTypes } from 'react';
import { TwitterPicker } from 'react-color';
import styled from 'styled-components';

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

export function ColorPicker(props) {
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
  onChangeComplete: PropTypes.func.isRequired,
};

ColorPicker.defaultProps = {
  triangle: 'top-left',
};

export const ColorSelect = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 3px;
  background-color: ${props => props.background || '#DDDDDD' };
  color: white;
  line-height: 48px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
`;

export const PickerContainer = styled.div`
  margin-top: 10px;
`;

class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelecting: false,
    };
    this.handleColorSelect = this.handleColorSelect.bind(this);
    this.toggleSelecting = this.toggleSelecting.bind(this);
  }

  toggleSelecting() {
    this.setState({
      isSelecting: !this.state.isSelecting,
    });
  }

  handleColorSelect(color) {
    if (this.state.isSelecting) {
      this.props.onColorSelect(color);
    }
    this.toggleSelecting();
  }

  render() {
    return (
      <div>
        <ColorSelect background={this.props.color} onClick={this.toggleSelecting}>Pick shirt color</ColorSelect>
        { this.state.isSelecting &&
          <PickerContainer>
            <ColorPicker color={this.props.color} onChangeComplete={this.handleColorSelect} />
          </PickerContainer>
        }
      </div>
    );
  }
}

Picker.propTypes = {
  onColorSelect: PropTypes.func,
  color: PropTypes.string,
}

export default Picker;
