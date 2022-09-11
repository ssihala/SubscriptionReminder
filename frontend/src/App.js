import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Login from './components/Login';
import MainContainer from './components/MainContainer';


function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      {user ? <MainContainer></MainContainer> : <Login setUser={setUser}></Login>}
    </div>
  );

}

export default App;
