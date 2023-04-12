import React from 'react';

const cont = {
  display: 'flex',
  flexDirection: 'column',
  width: '30%',
  alignItems: 'center',
  margin: '2rem 2rem',
};

export default function MapGoals(props) {
  const goals = props.goals;
  return (
    <div style={cont}>
      <ul>
        {goals.map((item, index) => (
          <li key={index}>
            <span>
              My prayer is to: {item.prayer}, before {item.achieve}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
