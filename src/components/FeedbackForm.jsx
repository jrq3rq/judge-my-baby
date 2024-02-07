import React, { useState } from "react";

// Reusable Likert Scale Component
const LikertScale = ({ question, onChange, options = 5 }) => {
  return (
    <div>
      <h4>{question}</h4>
      <div>
        {Array.from({ length: options }, (_, i) => (
          <label key={i}>
            <input
              type="radio"
              name={question}
              value={i + 1}
              onChange={onChange}
            />{" "}
            {i + 1}
          </label>
        ))}
      </div>
    </div>
  );
};

// Main Component
const FeedbackForm = () => {
  const questions = [
    "First Impressions",
    "Uniqueness",
    "Utility and Value Proposition",
    "Feasibility and Execution Potential",
    "Market Fit and Demand",
    "Improvement Suggestions",
    "Interest Level",
    "Visual and Presentation Quality",
    "Feedback on Description",
    "Overall Potential",
  ];

  const [ratings, setRatings] = useState({});

  const handleRatingChange = (question) => (event) => {
    setRatings({ ...ratings, [question]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ratings);
    // Submit the ratings here, for example, to an API endpoint
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <LikertScale
          key={question}
          question={question}
          onChange={handleRatingChange(question)}
        />
      ))}
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
