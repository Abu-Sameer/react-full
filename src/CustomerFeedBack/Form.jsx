import { useState } from 'react';
import Sents from './Sents';

function Form() {
  const [score, setScore] = useState({
    range: '0',
    comment: '',
  });
  const [messageSent, setMessageSent] = useState(false);

  function handeChange(e) {
    setScore({ ...score, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setScore({ range: '0', comment: '' });
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
          <h5>Score: {score.range}🌟</h5>
          <input
            type="range"
            name="range"
            min={0}
            max={10}
            value={score.range}
            onChange={handeChange}
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
            rows="5"
            autoFocus
            value={score.comment}
            placeholder="Please enter your feedback comment"
            onChange={handeChange}
          />
          <button
            disabled={!score.comment}
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
        </form>
        {messageSent && <Sents back={setMessageSent} />}
      </div>
    </div>
  );
}

export default Form;
