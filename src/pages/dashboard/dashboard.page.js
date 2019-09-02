import React from 'react';
import { api } from '../../utils';

import './dashboard.style.css';

function Dashboard({ setHasUser }) {
  async function handleOnClick() {
    try {
      const response = await api.delete('/tokens');
      setHasUser(false);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Dashboard</h2>
      <button className="dashboard__button" onClick={handleOnClick}>Logout</button>
    </div>
  )
}

export default Dashboard;