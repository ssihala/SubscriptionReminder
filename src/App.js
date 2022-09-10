import { Button } from 'bootstrap';
import { useState } from 'react';
import './App.css';
import Login from './components/Login';

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      {user ? console.log("here"): <Login setUser={setUser}></Login>}
    </div>
    
  );
}

export default App;
