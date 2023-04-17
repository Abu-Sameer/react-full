import React, { useEffect, useState } from 'react';
import Goals from './Goals';
import MapGoals from './MapGoals';
import Reduce from './Reduce';
import TestState from './TestState';

const btn = {
  padding: '0.7rem 1rem',
  backgroundColor: 'navy',
  color: 'white',
  border: 'none',
  borderRadius: '0.3rem',
  fontSize: '1rem',
  cursor: 'pointer',
};
export default function AllGoals() {
  const [goals, UpdateGoals] = useState([]);

  const addGoals = (goal) => {
    UpdateGoals([...goals, goal]);
  };

  const deleteByIndex = (index) => {
    UpdateGoals((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  const [data, setData] = useState('lemon');

  function handle() {
    setData(!data);
  }
  useEffect(() => {
    document.title = data ? 'Camon' : 'Tecno';
  }, [data]);

  return (
    <div>
      <button style={btn} onClick={handle}>
        Change Title
      </button>
      <div>
        <h3>Welcome to {data ? 'Camon' : 'Tecno'} Developer company</h3>
      </div>
      <Goals addGoals={addGoals} />
      <MapGoals delete={deleteByIndex} goals={goals} />
      <Reduce />
      <TestState />
    </div>
  );
}
