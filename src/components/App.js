import Signup from "./user/Signup";
import Login from "./user/Login";
import Home from "./core/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
    <Router>

    <Routes>

    <Route exact path='/' element={<Home />} />

    <Route exact path='/signup' element={<Signup />} />

    <Route exact path='/login' element={<Login />} />

    </Routes>

    </Router>

    </div>
  );
}

export default App;
