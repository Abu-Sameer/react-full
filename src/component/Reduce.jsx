import React, { useReducer } from 'react';

const btn = {
  padding: '0.7rem 1rem',
  backgroundColor: 'navy',
  color: 'white',
  border: 'none',
  borderRadius: '0.3rem',
  fontSize: '1rem',
  cursor: 'pointer',
  margin: '1rem',
};

const newHook = (current, action) => {
  if (action.type === 'buy goods') return { capital: current.capital - 10 };
  if (action.type === 'sold goods') return { capital: current.capital + 10 };
  if (action.type === 'star visitation')
    return { capital: current.capital + 2000 };
  return newHook;
};

export default function Reduce() {
  const moneyInBank = { capital: 1500 };
  const [current, debit] = useReducer(newHook, moneyInBank);

  return (
    <div>
      <h1>Reducer Hooks</h1>
      <h2>Company current account balance: ${current.capital} </h2>
      <button style={btn} onClick={() => debit({ type: 'buy goods' })}>
        Goods bought
      </button>
      <button style={btn} onClick={() => debit({ type: 'sold goods' })}>
        Goods sold
      </button>
      <button style={btn} onClick={() => debit({ type: 'star visitation' })}>
        Visiting stars
      </button>
    </div>
  );
}
