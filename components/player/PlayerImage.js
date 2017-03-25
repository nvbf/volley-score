import React from 'react';
import styled from 'styled-components';
import Animated from 'animated/lib/targets/react-dom';
import SmallBar from './SmallBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Image = styled.img`
  width:  298px;
  height: 0px;
  opacity: 0;
  border: 1px solid rgba(240, 240, 240, 0.8);
  margin-bottom: 8px;
`;

const AnimatedImage = Animated.createAnimatedComponent(Image);

class PlayerImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heightAnim: new Animated.Value(0),
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.delay(this.props.delay * 2),
      Animated.stagger(300, [
        Animated.spring(this.state.heightAnim, { toValue: 1 }),
        Animated.spring(this.state.fadeAnim, { toValue: 1 }),
      ]),
    ]).start();
  }

  render() {
    return (
      <Container>
        <AnimatedImage
          style={{
            height: this.state.heightAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 448] }),
            opacity: this.state.fadeAnim,
          }}
          src={this.props.image} />
        <SmallBar number={this.props.number} name={this.props.name} />
      </Container>
    );
  }
}

export default PlayerImage;
