import Signup from "./user/Signup";
import Login from "./user/Login";
import Home from "./core/Home";
import Menu from "./core/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
    <Router>

    <Switch>
    
    <Route exact path="/" >
          <Home/> 
    </Route>

    <Route exact path="/signup" >
          <Signup/> 
    </Route>

    <Route exact path="/login" >
          <Login/> 
    </Route>

    {/* <Route exact path='/signup' element={<Signup />} />

    <Route exact path='/login' element={<Login />} /> */}

    </Switch>

    </Router>

    </div>
  );
}

export default App;
