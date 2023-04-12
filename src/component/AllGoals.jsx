import React, { useState } from 'react';
import Goals from './Goals';
import MapGoals from './MapGoals';

export default function AllGoals() {
  const [goals, UpdateGoals] = useState([]);

  const addGoals = (goal) => {
    UpdateGoals([...goals, goal]);
  };

  return (
    <div>
      <Goals addGoals={addGoals} />
      <MapGoals goals={goals} />
    </div>
  );
}
