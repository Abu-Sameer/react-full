import { useState } from 'react';
import Sents from './Sents';

export default function Form() {
  const [range, setRange] = useState(0);
  const [comment, setComment] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (cansave) {
      setMessageSent(true);
    }
  }
  const cansave = [range, comment].every(Boolean);
  return (
    <div
      className={`bg-${
        messageSent ? 'secondary' : ''
      } d-flex flex-column justify-content-center align-items-center position-relative`}
      style={{
        height: '100vh',
      }}
    >
      <form
        className="d-flex flex-column justify-content-center align-items-center rounded py-2 px-4"
        style={{
          border: '3px solid blueviolet',
        }}
      >
        <h3>Customer's Feedback</h3>
        <h4>Please rate us</h4>
        <h5>Score: {range}🌟</h5>
        <input
          type="range"
          name="range"
          min={0}
          max={10}
          value={range}
          onChange={(e) => setRange(e.target.value)}
        />
        <textarea
          style={{
            border: '2px solid blueviolet',
          }}
          className="mt-1 p-2 rounded w-100"
          name="comment"
          rows="3"
          autoFocus
          value={comment}
          placeholder="Please enter your feedback"
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          disabled={!cansave}
          onClick={handleSubmit}
          className="btn btn-primary mt-2"
        >
          Send Message
        </button>
      </form>
      {messageSent && (
        <Sents range={range} comment={comment} back={setMessageSent} />
      )}
    </div>
  );
}
