import React, { Component } from "react";

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;

    return <button onClick={onLeaveFeedback}>{options}</button>;
  }
}

export default FeedbackOptions;
