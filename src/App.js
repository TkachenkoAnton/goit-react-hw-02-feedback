import React, { Component } from "react";

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
    const totalVotes = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={this.hendelGoodStateChange}>Good</button>
          <button onClick={this.hendelNeutralStateChange}>Neutral</button>
          <button onClick={this.hendelBadStateChange}>Bad</button>
        </div>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
        <div>
          <p>Total: {totalVotes}</p>
          <p>Positive feedback: {positiveFeedbackPercentage}%</p>
        </div>
      </>
    );
  }
}

export default App;
