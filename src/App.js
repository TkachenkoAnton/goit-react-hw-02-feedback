import React, { Component } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendelStateChange = (event) => {
    this.setState((prevState) => {
      const stateKey = event.target.textContent.toLowerCase();
      return { [stateKey]: prevState[stateKey] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const stateKeysArray = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          {stateKeysArray.map((key) => (
            <FeedbackOptions
              key={key}
              options={this.capitalizeFirstLetter(key)}
              onLeaveFeedback={this.hendelStateChange}
            />
          ))}
        </Section>

        {this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
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
