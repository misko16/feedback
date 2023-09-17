import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOption';
import Section from './Section';
import Statistics from './Statics';
import Notification from './Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback() > 0 ? Math.round((good / countTotalFeedback()) * 100) : 0;

  return (
    <div>
      <h1>Leave your Feedback</h1>
      <Section title="Feedback Options">
        <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={`${countPositiveFeedbackPercentage()}%`}
          />
        ) : (
          <Notification message="There is no feedback" /> // Використовуємо новий компонент
        )}
      </Section>
    </div>
  );
};

export default App;
