import { useState } from 'react';

function App() {
  const [score, setScore] = useState('0');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (score <= 3) {
      alert('Please tell us your observation 👎');
    } else if (score > 7) {
      alert('Thanks for your feedback we are always at your service 👌');
    } else {
      alert('Thanks for your feedback 👍');
    }
    setComment('');
    setScore('0');
  };
  return (
    <div className="App">
      <form
        onSubmit={handleSubmit}
        style={{
          width: '20rem',
          margin: '2rem',
          border: '2px solid gray',
          padding: '2rem',
        }}
      >
        <label htmlFor="score">Customer Feedback</label>
        <p>Please rate us</p>
        <p>Score: {score}🌟</p>
        <input
          type="range"
          name="score"
          id="score"
          min={0}
          max={10}
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <textarea
          style={{
            width: '100%',
            marginTop: '1rem',
            padding: '0.5rem',
          }}
          name="comment"
          id="comment"
          rows="5"
          required
          autoFocus
          value={comment}
          placeholder="Please enter your feedback comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          disabled={!comment || !score}
          style={{
            padding: '0.5rem',
            border: '2px solid black',
            borderRadius: '0.3rem',
            background: 'green',
            color: 'white',
            fontSize: '0.8rem',
            marginTop: '1rem',
          }}
        >
          Send Message
        </button>
        <div
          style={{
            marginTop: '1rem',
          }}
        >
          <p>Customers rating: {score}🌟</p>
          <p>Customers comment: {comment}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
