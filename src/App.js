import React from "react";
import {Route, Link} from "react-router-dom"
import PizzaForm from "./components/PizzaForm"
import Home from "./components/Home"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Order pizza that's delivered right to your door</p>
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
