import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./section.module.scss";

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <section className={styles.container}>
        <h2 className={styles.main__title}>{title}</h2>
        <div className={styles.feedbackButtons__container}>{children}</div>
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
