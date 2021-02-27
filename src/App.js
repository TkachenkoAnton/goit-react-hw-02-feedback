import React, { Component } from "react";
import Statistics from "./components/Statistics";

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
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={this.hendelGoodStateChange}>Good</button>
          <button onClick={this.hendelNeutralStateChange}>Neutral</button>
          <button onClick={this.hendelBadStateChange}>Bad</button>
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default App;
