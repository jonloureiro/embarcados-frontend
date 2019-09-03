/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Switch } from '../../components';
import { api } from '../../utils';

import './dashboard.style.css';

function Dashboard({ setHasUser }) {
  const url = process.env.REACT_APP_WEBSOCKET || 'ws://localhost:8080'
  const ws = new WebSocket(`${url}/socket`, 'jonloureiro.dev');
  const [allowed, setAllowed] = useState(false);
  const [message, setMessage] = useState({ value: '0' , timestamp: Date.now() });
  const [currents, setCurrents] = useState([]);

  async function handleOnClick() {
    try {
      const response = await api.delete('/tokens');
      setHasUser(false);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    ws.onopen = function(ev) {
      ws.send(`;${allowed}`);
    }
  }, [allowed])

  useEffect(() => {
    ws.onmessage = function(ev) {
      const value = ev.data;
      console.log(value);
      if (value !== ';false' && value !== ';true') {
        const timestamp = Date.now();
        const newState = {
            value,
            timestamp,
        }
        setMessage(newState);
      }
    }
  }, [])

  useEffect(() => {
    setCurrents([
      message,
      ...currents
    ])
  }, [message])

  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Dashboard</h2>
      <Switch setAllowed={setAllowed} />
      <button className="dashboard__button" onClick={handleOnClick}>Logout</button>
      <ul className="dashboard__list">
        { currents.map((current, i) => (
            <li key={i}>
              { current.value }
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default Dashboard;