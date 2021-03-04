import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Section/section.module.scss";

class Notification extends Component {
  render() {
    const { message } = this.props;

    return <h2 className={styles.container}>{message}</h2>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
