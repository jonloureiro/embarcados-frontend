import React, { useState, useEffect } from 'react';
import { Dashboard, Login, Loading } from './pages';
import { api } from './utils';

function App() {
  const [hasUser, setHasUser] = useState(false);
  const [loading, setLoading] = useState(true);

  async function init() {
    try {
      const response = await api.get('/users/me');
      setHasUser(response.status === 200);
    } catch (err) {
      console.log('Usuário não logado');
      setHasUser(false);
    }
    setLoading(false)
  }


  useEffect(() => {
    init()
  }, [])

  if (loading) return <Loading />
  else if (hasUser) return <Dashboard setHasUser={setHasUser} />
  return <Login setHasUser={setHasUser} />
}

export default App;
