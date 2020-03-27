import React from "react";
import {Route} from "react-router-dom"
import PizzaForm from "./components/PizzaForm"
import Home from "./components/Home"
import Submission from "./components/Submission"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <h3>Order pizza that's delivered right to your door</h3>
      <button>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path ="/pizza">
          <PizzaForm/>
        </Route>
        <Route path ="/submission">
          <Submission/>
        </Route>
      </button>
    </>
  );
};
export default App;
