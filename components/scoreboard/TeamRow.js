import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Animated from 'animated/lib/targets/react-dom';
import isEqual from 'lodash/isEqual';

const Row = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: content-box;
`;

const ImageLogo = styled.img`
  width: 34px;
  height: 34px;
`;

const ShirtColor = styled.div`
  border-radius: 3px;
  background-color: ${props => props.hex};
  width: 16px;
  height: 16px;
  margin-left: 8px;
  border: 1px solid #111;
`;

const Name = styled.div`
  letter-spacing: 1px;
  font-size: 20px;
  min-width: 100px;
  text-transform: uppercase;
  margin-left: 8px;
  text-shadow: 1px 1px #000;
`;

const Sets = styled.div`
  width: 18px;
  padding: 2px 0px;
  text-align: center;
  color: #000;
  background-color: papayawhip;
  border-radius: 3px;
  height: 20px;
`;

const Score = styled.div`
  font-weight: 300;
  background-color: white;
  color: black;
  width: 34px;
  height: 34px;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  border-radius: 3px;
  margin-left: 8px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AnimatedLogo = Animated.createAnimatedComponent(ImageLogo);

class TeamRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoAnim: new Animated.Value(0),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
       this.props.color !== nextProps.color
    || this.props.name !== nextProps.name
    || this.props.points !== nextProps.points
    || this.props.sets !== nextProps.sets
    || this.props.showColor !== nextProps.showColor
    || this.props.showLogos !== nextProps.showLogos
    );
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.showLogos) {
      Animated.spring(this.state.logoAnim, { toValue: 0 }).start();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.showLogos) {
      Animated.spring(this.state.logoAnim, { toValue: 1 }).start();
    }
  }

  render() {
    const { props } = this;
    return (
      <Row>
        <LeftContainer>
          <AnimatedLogo
            style={{
              opacity: this.state.logoAnim,
              width: this.state.logoAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 33] }),
            }}
            src={props.logo} alt="Home Team Logo"
          />
          { props.showColor && <ShirtColor hex={props.color} /> }
          <Name>{props.name}</Name>
        </LeftContainer>
        <RightContainer>
          <Sets>{props.sets}</Sets>
          <Score>{props.points}</Score>
        </RightContainer>
      </Row>
    );
  }
}

TeamRow.propTypes = {
  color: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
  points: PropTypes.number,
  sets: PropTypes.number,
  showColor: PropTypes.bool,
  showLogos: PropTypes.bool,
}

TeamRow.defaultProps = {
  sets: 0,
  points: 0,
  logo: '',
  name: '',
  color: '',
  showLogos: false,
  showColor: false,
};

export default TeamRow;
