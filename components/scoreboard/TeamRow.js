import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { observer } from 'mobx-react';

const fadeIn = keyframes`
  0% { opacity: 0; }
  66% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const GrowRight = keyframes`
  from {
    width: 0%;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1
  }
`;

const ShrinkLeft = keyframes`
  0% { width: 100%; opacity: 1; }
  66% { width: 100%; opacity: 1; }
  100% { width: 0%; opacity: 0; }
`;

const GrowRightDiv = styled.div`
  width: ${props => (props.isShowing ? '100%' : '0%')};
  animation: ${props =>
    props.isShowing ? `${GrowRight} 0.3s linear` : `${ShrinkLeft} 0.6s linear`};
`;

const FadeInDiv = styled.div`
  opacity: ${props => (props.isShowing ? 1 : 0)};
  animation: ${props => (props.isShowing ? `${fadeIn} 0.5s linear` : `${fadeOut} 0.2s linear`)};
`;

const Row = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: content-box;
  flex-direction: row;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  min-height: 57px;
  height: 57px;
  margin-right: 8px;
  background-color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${props => (props.isShowing ? '57' : '0')}px;
  width: ${props => (props.isShowing ? '57' : '0')}px;
  opacity: ${props => (props.isShowing ? 1 : 0)};
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
`;

const NameAndPointContainer = styled.div`
  height: 57px;
  font-family: 'Open Sans', 'Source Sans Pro', sans-serif;
  font-size: 36px;
  color: #222b38;
  background-color: white;
  overflow: hidden;
  line-height: 55px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 32px;
  font-weight: 400;
  border-bottom: ${props => (props.showBorder ? '2px solid #222b38' : 'none')};
`;

const TeamColor = styled.div`
  background-color: ${props => props.color};
  width: 6px;
  height: 100%;
  flex-grow: 0;
`;

const TeamName = styled.div`
  text-indent: 16px;
  width: 260px;
  margin-right: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: ${props => props.size || '32'}px;
`;

const TeamSets = styled.div`
  width: 45px;
  height: 45px;
  color: white;
  background-color: #222b38;
  line-height: 45px;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-right: 16px;
  font-weight: 400;
`;

const TeamPoints = styled.div`
  width: 48px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-weight: 700;
  margin-right: 8px;
  margin-left: 8px;
`;

const GrowRight203 = keyframes`
  from {
    width: 0px;
    opacity: 0;
    border: none;
  }
  to {
    width: 203px;
    opacity: 1;
    border: 1px solid rgba(31, 154, 225, 1);
  }
`;

const ShrinkLeft203 = keyframes`
  0% { width: 203px; opacity: 1; border: 1px solid rgba(31, 154, 225, 1); }
  66% { width: 203px; opacity: 1; border: 1px solid rgba(31, 154, 225, 1); }
  100% { width: 0px; opacity: 0; border: none; }
`;

const PrevSetsContainer = styled.div`
  background: url('/static/blue-bar-270-55.svg');
  box-sizing: border-box;
  border: ${props => (props.isShowing ? '1px solid rgba(31, 154, 225, 1)' : 'none')};
  color: white;
  background-size: cover;
  display: flex;
  flex-direction: row;
  font-size: 32px;
  width: ${props => (props.isShowing ? '203px' : '0px')};
  animation: ${props =>
    props.isShowing ? `${GrowRight203} 0.3s linear` : `${ShrinkLeft203} 0.6s linear`};
`;

const PrevSet = FadeInDiv.extend`
  width: 67px;
  text-align: center;
`;
/*
const AnimPrevSetsContainer = Animated.createAnimatedComponent(PrevSetsContainer);
const AnimPrevSet = Animated.createAnimatedComponent(PrevSet);
const AnimatedLogo = Animated.createAnimatedComponent(LogoContainer);
*/

class TeamRow extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    textColor: PropTypes.string,
    logo: PropTypes.string,
    name: PropTypes.string,
    showColor: PropTypes.bool,
    showLogo: PropTypes.bool,
  };

  static defaultProps = {
    logo: '',
    name: '',
    color: '',
    showLogo: false,
    showColor: false,
    showPrevSets: false,
    textColor: '#ffffff',
  };

  constructor(props) {
    super(props);
  }

  getNameSize() {
    const len = this.props.name.length;
    if (len > 15) {
      return 20;
    }
    if (len > 12) {
      return 24;
    }
    return 32;
  }

  render() {
    const { showLogo, logo, showBorder, name, sets, points, color, showColor } = this.props;
  
    return (
      <Row>
        <LogoContainer isShowing={showLogo}>
          <Logo src={logo} />
        </LogoContainer>
        <NameAndPointContainer showBorder={showBorder}>
          {showColor && <TeamColor color={color} />}
          <TeamName size={this.getNameSize()}>{name}</TeamName>
          <TeamSets>{sets}</TeamSets>
          {/* }<PrevSetsContainer isShowing={showPrevSets}>
            <PrevSet isShowing={showPrevSets}>21</PrevSet>
            <PrevSet isShowing={showPrevSets}>25</PrevSet>
            <PrevSet isShowing={showPrevSets}>19</PrevSet>
          </PrevSetsContainer> */}
          <TeamPoints>{points}</TeamPoints>
        </NameAndPointContainer>
      </Row>
    );
  }
}

export default observer(TeamRow);
