import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Authentication from './routes/auth/Authentication';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    console.log(token);
    axios.post('http://localhost:8000/api/auth/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res =>  {console.log(res); return res.json()})
    .then(data => {
      if (data.username) {
        setIsLoggedIn(true);
        setUserUsername(data.username);
      }
    });
  });

  return (
    <div className="App">
      {isLoggedIn ? <div>Dashboard Component</div>
        : <div>Authentication Component</div>}
      <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
    </div>
  );
}

export default App;
