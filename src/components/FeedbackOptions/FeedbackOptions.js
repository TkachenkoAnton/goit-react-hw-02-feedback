import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./feedbackOptions.module.scss";

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;

    return (
      <button className={styles.feedback__buttons} onClick={onLeaveFeedback}>
        {options}
      </button>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.string.isRequired,
};

export default FeedbackOptions;
