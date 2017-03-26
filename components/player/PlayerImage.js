import React from 'react';
import styled from 'styled-components';
import Animated from 'animated/lib/targets/react-dom';
import SmallBar from './SmallBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const ImageContainer = styled.div`
  width:  300px;
  height: 0px;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;
  background: #ccc;
`;

const Image = styled.img`
  height: 450px;
  width: 300px;
  position: absolute;
  left: 0;
`;

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedImageContainer = Animated.createAnimatedComponent(ImageContainer);

class PlayerImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      heightAnim: new Animated.Value(0),
    };
  }

  componentDidUpdate() {
    if (this.props.isShowing) {
      Animated.spring(this.state.heightAnim, { toValue: 1 }).start();
    } else {
      Animated.spring(this.state.heightAnim, { toValue: 0 }).start();
    }
  }

  render() {
    let { player } = this.props;
    return (
      <Container>
        <AnimatedImageContainer
          style={{
            height: this.state.heightAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 450] }),
            opacity: this.state.heightAnim,
          }}
        >
          <Image src={player.image} />
        </AnimatedImageContainer>
        {this.props.isShowing  && <SmallBar number={player.number} name={player.name} /> }
      </Container>
    );
  }
}

export default PlayerImage;
