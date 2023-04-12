import { useState } from 'react';
import Sents from './Sents';

function Form() {
  const [score, setScore] = useState('0');
  const [comment, setComment] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment('');
    setScore('0');
    setMessageSent(true);
  };
  return (
    <div className="Form">
      <div
        style={{
          background: messageSent ? 'rgb(220, 215, 215)' : '',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          position: 'relative',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            width: '20rem',
            margin: '2rem',
            border: '3px solid gray',
            padding: '1rem 2rem',
            borderRadius: '0.3rem',
            boxShadow: '6px 6px 7px black',
          }}
        >
          <h2>Customer Feedback</h2>
          <h3>Please rate us</h3>
          <h5>Score: {score}🌟</h5>
          <input
            type="range"
            name="score"
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
              border: '2px solid gray',
              borderRadius: '0.3rem',
            }}
            name="comment"
            id="comment"
            rows="5"
            autoFocus
            value={comment}
            placeholder="Please enter your feedback comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            disabled={!comment}
            style={{
              padding: '0.5rem',
              border: '2px solid black',
              borderRadius: '0.3rem',
              background: 'green',
              color: 'white',
              fontSize: '0.8rem',
              marginTop: '1rem',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
          <div
            style={{
              marginTop: '1rem',
            }}
          ></div>
        </form>
        {messageSent && <Sents massage={messageSent} back={setMessageSent} />}
      </div>
    </div>
  );
}

export default Form;
