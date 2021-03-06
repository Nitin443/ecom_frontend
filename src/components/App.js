import Signup from "./user/Signup";
import Login from "./user/Login";
import Home from "./core/Home";
import PrivateRoute from "./authApi/PrivateRoute";
import AdminRoute from "./authApi/AdminRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin";
import AddProduct from "./admin/AddProduct";
import Shop from "./core/Shop";
import SingleProduct from "./core/SingleProduct";
import Cart from "./core/Cart";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";

// Routes define here

function App() {
  return (
    <div className="App">
      
    <Router>

    <Switch>
    
    <Route exact path="/" >
          <Home/> 
    </Route>

    <Route exact path="/shop" >
          <Shop/> 
    </Route>

    <Route exact path="/signup" >
          <Signup/> 
    </Route>

    <Route exact path="/login" >
          <Login/> 
    </Route>

    <PrivateRoute path="/user/dashboard" exact component={Dashboard}/>

    <PrivateRoute path="/profile/:userId" exact component={Profile}/>

    <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>

    <AdminRoute path="/create/category" exact component={AddCategory}/>

    <AdminRoute path="/crete/product" exact component={AddProduct}/>

    <AdminRoute path="/admin/products" exact component={ManageProducts}/>

    <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct}/>

    <Route exact path="/product/:productId" >
          <SingleProduct />
    </Route>

    <Route exact path="/cart" >
          <Cart />
    </Route>


    {/* <PrivateRoute exact path="/dashboard">
      <Dashboard />
    </PrivateRoute> */}

    {/* <Route exact path='/signup' element={<Signup />} />

    <Route exact path='/login' element={<Login />} /> */}

    </Switch>

    </Router>

    </div>
  );
}

export default App;
