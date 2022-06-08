import { useState } from 'react';
import './App.css';
import Form from './components/SignIn';
import Dashboard from './components/Dashboard';

function App() {
  const [islogin, setlogin] = useState(true);
  // const [changelogin, change] = useState(!islogin);
  const UpdateLogin=() => {
    setlogin(!islogin)
  }
  return (islogin ? <Form ChangeLogIn={UpdateLogin} /> : <Dashboard ChangeLogIn={UpdateLogin}/>);
}

export default App;
