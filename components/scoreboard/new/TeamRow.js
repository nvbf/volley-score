// @flow
import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { observer } from 'mobx-react';
import Animated from 'animated/lib/targets/react-dom';

const Row = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: content-box;
  flex-direction: row;
  overflow: hidden;
`;

const ImageLogo = styled.img`
  width: 34px;
  height: 34px;
`;

const ShirtColor = styled.div`
  border-radius: 0px;
  background-color: ${props => props.hex};
  background: linear-gradient(
    ${props => darken(0.15, props.hex)},
    ${props => props.hex},
    ${props => darken(0.15, props.hex)}
  );
  width: 8px;
  height: 50px;
`;

const Name = styled.div`
  letter-spacing: 1px;
  font-size: 24px;
  min-width: 100px;
  max-width: 200px;
  text-transform: uppercase;
  margin-left: 8px;
  height: 22px;
  line-height: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${props => props.color};
  text-shadow: 1px 1px #000;
  font-weight: 400;
`;

const AnimatedLogo = Animated.createAnimatedComponent(ImageLogo);
const AnimatedShirtColor = Animated.createAnimatedComponent(ShirtColor);

export type TeamRowProps = {
  color: string,
  textColor: string,
  logo: string,
  name: string,
  showColor: boolean,
  showLogo: boolean,
};

export type TeamRowState = {
  logoAnim: any,
  colorAnim: any,
};

@observer class TeamRow extends React.Component {
  static defaultProps = {
    logo: '',
    name: '',
    color: '',
    showLogo: false,
    showColor: false,
  };

  constructor(props: TeamRowProps) {
    super(props);
    this.state = {
      logoAnim: new Animated.Value(props.showLogo ? 1 : 0),
      colorAnim: new Animated.Value(props.showColor ? 1 : 0),
    };
  }

  state: TeamRowState;

  shouldComponentUpdate(nextProps: TeamRowProps) {
    return (
      this.props.color !== nextProps.color ||
      this.props.name !== nextProps.name ||
      this.props.showColor !== nextProps.showColor ||
      this.props.showLogo !== nextProps.showLogo
    );
  }

  componentWillUpdate(nextProps: TeamRowProps) {
    if (!nextProps.showColor) {
      Animated.spring(this.state.colorAnim, { toValue: 0 }).start();
    }
    if (!nextProps.showLogo) {
      Animated.spring(this.state.logoAnim, { toValue: 0 }).start();
    }
  }

  componentDidUpdate() {
    if (this.props.showColor) {
      Animated.spring(this.state.colorAnim, { toValue: 1 }).start();
    }
    if (this.props.showLogo) {
      Animated.spring(this.state.logoAnim, { toValue: 1 }).start();
    }
  }

  props: TeamRowProps;

  render() {
    console.log('COLOR:', this.props.color);
    return (
      <Row>
        <AnimatedShirtColor
          style={{
            opacity: this.state.colorAnim,
            width: this.state.colorAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 8],
            }),
          }}
          hex={this.props.color}
        />
        <AnimatedLogo
          style={{
            opacity: this.state.logoAnim,
            width: this.state.logoAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 33],
            }),
            marginLeft: this.state.logoAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 8],
            }),
          }}
          src={this.props.logo}
          alt="Team Logo"
        />

        <Name color={this.props.textColor}>{this.props.name}</Name>
      </Row>
    );
  }
}

TeamRow.defaultProps = {
  color: '#ffffff00',
  textColor: '#ffffff',
};

export default TeamRow;
