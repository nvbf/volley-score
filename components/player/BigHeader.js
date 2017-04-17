import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animated from 'animated/lib/targets/react-dom';

const OuterContainer = styled.div`
  overflow: hidden;
  width: 908px;
  height: 96px;
  margin-bottom: 8px;
`;

const Container = styled.div`
  width: 908px;
  height: 96px;
  background: #ccc;
  background: linear-gradient(rgba(240, 240, 240, 1), rgba(210, 210, 210, 1));
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Source Sans Pro', sans-serif;
  text-transform: uppercase;
`;

const Dangle = styled.div`
  height: 100%;
  background: linear-gradient(#0074D9, #001f3f);
  width: 8px;
`;

const Logo = styled.img`
  height: 72px;
  width: 96px;
`;

const Text = styled.div`
  font-size: 44px;
  color: #001f3f;
  font-weight: 400;
  width: 100%;
`;

const AnimatedContainer = Animated.createAnimatedComponent(OuterContainer);

class BigHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widthAnim: new Animated.Value(0),
    };
  }

  componentDidUpdate() {
    if (this.props.isShowing) {
      Animated.spring(this.state.widthAnim, { toValue: 1 }).start();
    } else {
      Animated.spring(this.state.widthAnim, { toValue: 0 }).start();
    }
  }

  render() {
    return (
      <AnimatedContainer
        style={{
          opacity: this.state.widthAnim,
          width: this.state.widthAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 908],
          }),
        }}
      >
        <Container>
          <Logo src={this.props.logo} />
          <Text>{this.props.text}</Text>
          <Dangle />
        </Container>
      </AnimatedContainer>
    );
  }
}

BigHeader.propTypes = {
  logo: PropTypes.string.isRequired,
  isShowing: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default BigHeader;
