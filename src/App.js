
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddEvent from "./components/Admin/AddEvent";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


export const UserContext= createContext();
export const ProductContext= createContext();


function App() {
  const [loggedUser,setLoggedUser]=useState({})
  const [orderProduct,setOrderProduct]=useState({})
console.log(loggedUser);
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
    <ProductContext.Provider value={[orderProduct,setOrderProduct]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/order">
            <Order/>
          </PrivateRoute>
          <PrivateRoute path="/addEvent">
            <AddEvent/>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout/>
          </PrivateRoute>

          <Route path="*">
            <h1>page not found</h1>
          </Route>
        </Switch>
      </Router>
      </ProductContext.Provider>  
    </UserContext.Provider>
  );
}


export default App;
