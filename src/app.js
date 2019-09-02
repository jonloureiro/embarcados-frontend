import React, { useState } from 'react';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

function App() {
  const [hasUser, ] = useState(false);

  return (
    <>
      { hasUser ? (
        <Dashboard />
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
