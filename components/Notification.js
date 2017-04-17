import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
    this.hide = this.hide.bind(this);
  }

  hide() {
    this.setState({
      hidden: true,
    });
  }

  render() {
    if (this.state.hidden) {
      return null;
    }

    return (
      <div className="notification">
        <button className="delete" onClick={this.hide} />
        {this.props.children}
      </div>
    );
  }
}

Notification.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Notification;
