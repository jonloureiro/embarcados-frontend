import React from 'react';

import './switch.style.css';

function Switch({ setAllowed }) {
  function handleOnChange(ev) {
    setAllowed(ev.target.checked);
  }

  return (
    <label className="switch">
      <input type="checkbox" onChange={handleOnChange} />
      <span className="slider round" />
    </label>
  );
}

export default Switch;