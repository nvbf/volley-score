// @flow
import React from 'react';
import Animated from 'animated/lib/targets/react-dom';

export type OpacityProps = {
  isShowing: boolean,
};

class OpacityContainer extends React.PureComponent {
  constructor(props: OpacityProps) {
    super(props);
    this.state = {
      opacity: new Animated.Value(this.props.isShowing ? 1 : 0),
    };
  }

  state: { opacity: any };

  componentWillUpdate(nextProps: OpacityProps) {
    if (!nextProps.isShowing) {
      Animated.spring(this.state.opacity, { toValue: 0 }).start();
    }
  }

  componentDidUpdate() {
    if (this.props.isShowing) {
      Animated.spring(this.state.opacity, { toValue: 1 }).start();
    }
  }

  props: { children: any };

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
