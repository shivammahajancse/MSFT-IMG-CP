import './App.css';
import './Components/Menu'
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Me from './Components/Me'
import Notification from './Components/Notification'
import Home from './Components/Home'
import Login from './Components/Login'
import { useState } from 'react';
import Signup from './Components/Signup';
import Contactus from './Components/Contactus'
function App() {
  const [LoginIs, setLoginIs] = useState(true);
  console.log("LoginIs value at start of app " +LoginIs);
  const admin = {id:"VasuVj24",pass:"123"};
  const receiveData = (obj)=>{
    if(admin.id===obj.userName && admin.pass===obj.pass){return setLoginIs(true);}
    console.log("LoginIs at receive data "+LoginIs);
    return false;
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
        <Route path='/signup' component={Signup}/>
        <Route path='/contact' component={()=><Contactus loginIs={LoginIs} handleLogout={handleLogout}/>}/>
        <Redirect to='/'/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
