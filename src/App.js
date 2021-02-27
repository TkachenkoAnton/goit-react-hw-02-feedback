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

  hendelGoodStateChange = () =>
    this.setState((prevState) => {
      return { good: prevState.good + 1 };
    });

  hendelNeutralStateChange = () =>
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 };
    });

  hendelBadStateChange = () =>
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 };
    });

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={"Good"}
            onLeaveFeedback={this.hendelGoodStateChange}
          />
          <FeedbackOptions
            options={"Neutral"}
            onLeaveFeedback={this.hendelNeutralStateChange}
          />
          <FeedbackOptions
            options={"Bad"}
            onLeaveFeedback={this.hendelBadStateChange}
          />
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
