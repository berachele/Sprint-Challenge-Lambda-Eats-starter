import React from "react"
import * as yup from "yup"
import axios from "axios"

//setup Schema

function PizzaForm() {
//state for form inputs
//state for errors
//invalidate our button
//for axios.post() to display/console.log
//UseEffect to enable.disable button
//implement validation--for name, must be 2+ characters
//submitForm funciton with axios.post()
    //resetting our form
//input change function with e.persist and new data object
    //checking if its an input or checkbox
    //bring in our validate and set to our event, update our formState
//return statement for Form
    return(
        //add value and onChange later
        <form>
            <label htmlFor="name">Name: &nbsp;
                <input 
                id="name"
                type="text"
                name="name"
                />
            </label><br/><br/>

            <label htmlFor="size">Crust Size: &nbsp;
                <select id="size" name="size">
                    <option>Personal 6"</option>
                    <option>Medium 10"</option>
                    <option>Large 12"</option>
                    <option>Family Size XL 18"</option>
                </select>
            </label><br/><br/>
            <fieldset>
                <p>Choose your Toppings:</p>
                <label htmlFor="toppings">&nbsp;<input type="checkbox" name="toppings" value="pepperoni" checked={true}/>Pepperoni</label>
                <label htmlFor="toppings">&nbsp;<input type="checkbox" name="toppings" value="sausage" checked={true}/>Sausage</label>
                <label htmlFor="toppings">&nbsp;<input type="checkbox" name="toppings" value="onions" checked={true}/>Onions</label>
                <label htmlFor="toppings">&nbsp;<input type="checkbox" name="toppings" value="cheese" checked={true}/>Extra Cheese</label>
            </fieldset><br/>
        
             <label htmlFor="instructions">List any special instructions: &nbsp;
                <br/><textarea 
                id="instructions"
                name="instructions"

                />
            </label><br/><br/>
            <button>Add to Order!</button>
        </form>
    )
}

export default PizzaForm