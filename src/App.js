import React from "react";
import {Route, Link} from "react-router-dom"
import PizzaForm from "./components/PizzaForm"
import Home from "./components/Home"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <button>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path ="/pizza">
          <PizzaForm/>
        </Route>
      </button>
    </>
  );
};
export default App;
