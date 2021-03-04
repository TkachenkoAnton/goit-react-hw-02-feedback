import React, { Component } from "react";
import shortid from "shortid";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";
// eslint-disable-next-line
import baseStyles from "./base-styles/main-base-styles.scss";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateKeysArray = Object.keys(this.state);

  handleStateChange = (event) => {
    this.setState((prevState) => {
      const stateKey = event.target.textContent.toLowerCase();

      return { [stateKey]: prevState[stateKey] + 1 };
    });
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return Math.floor((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          {this.stateKeysArray.map((key) => {
            const uniqId = shortid.generate();

            return (
              <FeedbackOptions
                key={uniqId}
                options={this.capitalizeFirstLetter(key)}
                onLeaveFeedback={this.handleStateChange}
              />
            );
          })}
        </Section>

        {good > 0 || neutral > 0 || bad > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default App;
