import './App.css';
import './Components/Menu'
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Me from './Components/Me'
import Notification from './Components/Notification'
import Home from './Components/Home'
import Login from './Components/Login'
import { useState } from 'react';
function App() {
  const [LoginIs, setLoginIs] = useState(false);
  return (
    <div className="header">
    <Router>
      <Switch>
        <Route path='/' exact component={()=><Home loginIs={LoginIs}/>} /> 
        <Route path='/Notification' component={()=><Notification loginIs={LoginIs}/>} />
        <Route path='/me' component={()=><Me loginIs={LoginIs}/>} />
        <Route path='/login' component={()=><Login LoginIs={LoginIs}/>}/>
        <Redirect to='/'/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
