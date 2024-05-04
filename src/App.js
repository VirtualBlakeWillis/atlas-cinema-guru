import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


import Authentication from './routes/auth/Authentication';
import Header from './components/navigation/Header';
import Dashboard from './routes/dashboard/Dashboard';
import Activity from './components/Activity';
import SideBar from './components/navigation/SideBar';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      axios.post('http://localhost:8000/api/auth/', {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      if (res.data.username) {
        setIsLoggedIn(true);
        setUserUsername(res.data.username);
        console.log('logged in! isLoggedIn:', isLoggedIn);
      }
    })
    .catch(err => console.log(err));
  } else {
    console.log("No token found")
  }
  });

  return (
      <div className="App">
        {isLoggedIn ? 
          <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        :
          <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} setPassword={setPassword} />
        }
      </div>
  );
}

export default App;
