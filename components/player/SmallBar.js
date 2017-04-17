import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animated from 'animated/lib/targets/react-dom';

const Container = styled.div`
  width: 300px;
  height: 72px;
  background-color: blue;
  display: flex;
  flex-direction: row;
  letter-spacing: 2px;
  border-bottom: 1px solid #001f3f;
  font-family: 'Source Sans Pro', sans-serif;
`;

const NameContainer = styled.div`
  height: 100%;
  width: 278px;
  background: blue;
  background: linear-gradient(#0074D9, #001f3f);
  font-weight: 600;
  font-size: 28px;
  padding-left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px black;
  overflow: hidden;
  position: relative;
`;

const Dangle = styled.div`
  height: 100%;
  width: 6px;
  background: white;
  background: linear-gradient(#ccc, #fff, #999);
`;

const Name = styled.span`
  position: absolute;
  left: -400px;
`;

const AnimatedName = Animated.createAnimatedComponent(Name);
const AnimatedContainer = Animated.createAnimatedComponent(Container);

class SmallBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.delay(this.props.animDelay),
      Animated.spring(this.state.anim, { toValue: 1, tension: 20 }),
    ]).start();
  }

  render() {
    return (
      <AnimatedContainer
        style={{
          height: this.state.anim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 72],
          }),
          opacity: this.state.anim,
        }}
      >
        <NameContainer>
          <AnimatedName
            style={{
              left: this.state.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [-500, 16],
              }),
            }}
          >
            {this.props.name}
          </AnimatedName>
        </NameContainer>
        <Dangle />
      </AnimatedContainer>
    );
  }
}

SmallBar.propTypes = {
  animDelay: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

SmallBar.defaultProps = {
  animDelay: 0,
};

export default SmallBar;
