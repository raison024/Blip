import './App.css';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";
import {useState} from 'react';
import Home from './Components/Home/Home';
import Registration from './Components/Reg/Reg';
import Plan from './Components/Plan/Plan';
import Login from './Components/Login/Login';
import Team from './Components/Team/Team';
import AdminLogin from './Components/Admin/AdminLogin/AdminLogin';
import AdminHome from './Components/Admin/AdminHome/AdminHome';
import UserList from './Components/Admin/AdminHome/components/userlist';
import MovieList from './Components/Admin/AdminHome/components/movielist';
import PlanList from './Components/Admin/AdminHome/components/planlist';
import EditUser from './Components/Admin/AdminHome/components/editusers.component';
import EditMovie from './Components/Admin/AdminHome/components/editmovie.component';
import AddUser from './Components/Admin/AdminHome/components/adduser';
import AddMovie from './Components/Admin/AdminHome/components/addmovie';
import AddPlan from './Components/Admin/AdminHome/components/addplan';
import StartPage from './Components/StartPage/StartPage';
import Payment from './Components/payment/payment';

function App() {

  const [user,setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <StartPage />
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/reg">
          <Registration />
        </Route>
        <Route path="/plan">
          <Plan />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/adminlogin">
          <AdminLogin />
        </Route>
        <Route path="/adminhome">
          <AdminHome />
        </Route>
        <Route path="/userlist">
          <UserList />
        </Route>
        <Route path="/movielist">
          <MovieList />
        </Route>
        <Route path="/planlist">
          <PlanList />
        </Route>
        <Route path="/edituser">
          <EditUser />
        </Route>
        <Route path="/edit/:id">
          <EditMovie />
        </Route>
        <Route path="/adduser">
          <AddUser />
        </Route>
        <Route path="/addmovie">
          <AddMovie />
        </Route>
        <Route path="/addplan">
          <AddPlan />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;