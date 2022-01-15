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
  console.log("LoginIs value at start of app " +LoginIs);
  const admin = {id:"VasuVj24",pass:"123"};
  const receiveData = (obj)=>{
    admin.id===obj.userName && admin.pass===obj.pass ? setLoginIs(true) : setLoginIs(false);
    console.log("LoginIs at receive data "+LoginIs);
  }
  const handleLogout = ()=>{
      if(LoginIs===true){
      setLoginIs(false);
      }
      console.log(LoginIs);
    console.log("error in LogOut");
  }
  return (
    <div className="header">
    <Router>
      <Switch>
        <Route path='/' exact component={()=><Home loginIs={LoginIs} handleLogout={handleLogout}/>} />
        <Route path='/Notification' component={()=><Notification loginIs={LoginIs} handleLogout={handleLogout}/>} />
        <Route path='/me' component={()=><Me loginIs={LoginIs} handleLogout={handleLogout}/>} />
        <Route path='/login' component={()=><Login LoginIs={LoginIs} handleLogout={handleLogout} receiveData={receiveData}/>}/>
        <Redirect to='/'/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
