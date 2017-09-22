import React from 'react';
import PropTypes from 'prop-types';
import Animated from 'animated/lib/targets/react-dom';

class OpacityContainer extends React.PureComponent {
  static propTypes = {
    isShowing: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    isShowing: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(this.props.isShowing ? 1 : 0),
    };
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.isShowing) {
      Animated.spring(this.state.opacity, { toValue: 0 }).start();
    }
  }

  componentDidUpdate() {
    if (this.props.isShowing) {
      Animated.spring(this.state.opacity, { toValue: 1 }).start();
    }
  }

  render() {
    return (
      <Animated.div
        style={{
          opacity: this.state.opacity,
        }}
      >
        {this.props.children}
      </Animated.div>
    );
  }
}

export default OpacityContainer;
