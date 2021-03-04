import React, { Component } from "react";
import PropTypes from "prop-types";

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;

    return <button onClick={onLeaveFeedback}>{options}</button>;
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.string.isRequired,
};

export default FeedbackOptions;
