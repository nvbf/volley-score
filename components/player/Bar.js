import React from 'react';
import styled from 'styled-components';
import Animated from 'animated/lib/targets/react-dom';

const Container = styled.div`
  width: 600px;
  height: 0px;
  background-color: blue;
  display: flex;
  flex-direction: row;
  letter-spacing: 2px;
  border-bottom: 1px solid #001f3f;
  font-family: 'Source Sans Pro', sans-serif;
`;

const NumContainer = styled.div`
  height: 100%;
  width: 72px;
  background: ${props => props.active ?  '#FFDC00' : 'white'};
  background: ${props => props.active ? 'linear-gradient(#FFDC00, #FFB54B)' : 'linear-gradient(#fff, #aaa)'};
  display: flex;
  align-items: center;
  justify-content: center;

`;

const NameContainer = styled.div`
  height: 100%;
  width: 346px;
  background: blue;
  background: linear-gradient(#0074D9, #001f3f);
  font-weight: 600;
  font-size: 28px;
  padding-left: 16px;
  line-height: 48px;
  color: white;
  text-shadow: 1px 1px black;
  overflow: hidden;
  position: relative;
`;

const PositionContainer = styled.div`
  height: 100%;
  width: 160px;
  background: blue;
  background: linear-gradient(#0074D9, #001f3f, #001f3f);
  font-weight: 600;
  font-size: 20px;
  line-height: 48px;
  color: ${props => props.libero ? '#FFDC00' : '#FFFFFF'};
  text-transform: uppercase;
  text-align: center;
  position: relative;
  overflow: hidden;
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

const Position = styled.span`
  width: 160px;
  text-align: center;
  position: absolute;
  right: -200px;
`;

const Num = styled.span`
  font-size: 42px;
  font-weight: 400;
  color: #001f3f;
  opacity: 0;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const AnimatedName = Animated.createAnimatedComponent(Name);
const AnimatedPosition = Animated.createAnimatedComponent(Position);
const AnimatedNum = Animated.createAnimatedComponent(Num);

class Bar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstAnim: new Animated.Value(0),
      anim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    console.log(this.props.animDelay);
    Animated.sequence([
      Animated.delay(this.props.animDelay),
      Animated.spring(this.state.firstAnim, { toValue: 1, tension: 70 }),
      Animated.delay(200),
      Animated.spring(this.state.anim, { toValue: 1, tension: 20 }),
    ]).start();
  }

  render() {
    return (
      <AnimatedContainer style={{
        height: this.state.firstAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 48] }),
      }}>
        <NumContainer active={this.props.active}>
          <AnimatedNum style={{
            opacity: this.state.anim,
          }}>
            {this.props.number}
          </AnimatedNum>
        </NumContainer>
        <NameContainer>
          <AnimatedName style={{
            left: this.state.anim.interpolate({ inputRange: [0, 1], outputRange: [-500, 16] })
          }}>
            {this.props.name}
          </AnimatedName>
        </NameContainer>
        <PositionContainer libero={this.props.position.toLowerCase() === 'libero'}>
          <AnimatedPosition style={{
            right: this.state.anim.interpolate({ inputRange: [0, 1], outputRange: [-250, 0] })
          }}>
            {this.props.position}
          </AnimatedPosition>
        </PositionContainer>
        <Dangle />
      </AnimatedContainer>
  );
  }
}

Bar.defaultProps = {
  animDelay: 0,
};

export default Bar;
