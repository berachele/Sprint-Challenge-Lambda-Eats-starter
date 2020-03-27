import React, {useState, useEffect} from "react"
import * as yup from "yup"
import axios from "axios"

//setup Schema
const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field").min(2),
    size: yup.string(),
    pepperoni: yup.boolean().oneOf([true], "Please choose at lease one topping"),
    sausage: yup.boolean().oneOf([true], "Please choose at lease one topping"),
    onions: yup.boolean().oneOf([true], "Please choose at lease one topping"),
    cheese: yup.boolean().oneOf([true], "Please choose at lease one topping")
})

function PizzaForm() {
//state for form inputs
const [form, setForm] = useState({
    name: "",
    size: "",
    pepperoni:"",
    sausage:"",
    onions:"",
    cheese:"",
    instructions:""
})

//state for errors
const [errors, setErrors] = useState({
    name: "",
    size: "",
    pepperoni:"",
    sausage:"",
    onions:"",
    cheese:"",
    instructions:""
})

//invalidate our button
const [disableButton, setDisableButton] = useState(true)

//for axios.post() to display/console.log
const [submit, setSubmit] = useState([])

//UseEffect to enable.disable button
useEffect(()=> {
    formSchema.isValid(form).then(valid => {
        setDisableButton(!valid)
    })
}, [form])

//implement validation--for name, must be 2+ characters
const validateName = e => {
    yup.reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(()=>{
        setErrors({
            ...errors, [e.target.name] : ""
        })
    })
    .catch(err => {
        setErrors({
            ...errors, [e.target.name]: err.errors
        })
    })
}

//submitForm funciton with axios.post()
const submitForm = e => {
    e.preventDefault();
    axios
    .post("https://reqres.in/api/users", form)
    .then(response => {
        console.log("Success!", submit)

        //reset form
        setForm({
            name: "",
            size: "",
            pepperoni:"",
            sausage:"",
            onions:"",
            cheese:"",
            instructions:""
        })
    })
    .catch(err => {
        console.log("ERROR!", err.response)
    })
}
//input change function with e.persist and new data object
const inputChange = e => {
    e.persist()
    //checking if its an input or checkbox
    const newFormData = {
        ...form, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    }
    //bring in our validate and set to our event, update our formState
    validateName(e)
    setForm(newFormData)
}

//return statement for Form
    return(
        //add value and onChange later
        <form>
            <label htmlFor="name">Name: &nbsp;
                <input 
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={inputChange}
                />
            </label><br/><br/>

            <label htmlFor="size">Crust Size: &nbsp;
                <select id="size" name="size" value={form} onChange={inputChange}>
                    <option>Personal 6"</option>
                    <option>Medium 10"</option>
                    <option>Large 12"</option>
                    <option>Family Size XL 18"</option>
                </select>
            </label><br/><br/>
            <fieldset>
                <p>Choose your Toppings:</p>
                <label htmlFor="toppings">&nbsp;<input type="checkbox" name="toppings" checked={form.pepperoni} onChange={inputChange}/>Pepperoni</label>
                <label htmlFor="toppings">&nbsp;<input type="checkbox" name="toppings" checked={form.sausage} onChange={inputChange}/>Sausage</label>
                <label htmlFor="toppings">&nbsp;<input type="checkbox" name="toppings" checked={form.onions} onChange={inputChange}/>Onions</label>
                <label htmlFor="toppings">&nbsp;<input type="checkbox" name="toppings" checked={form.cheese} onChange={inputChange}/>Extra Cheese</label>
            </fieldset><br/>
        
             <label htmlFor="instructions">List any special instructions: &nbsp;
                <br/><textarea 
                id="instructions"
                name="instructions"
                value={form.instructions}
                onChange={inputChange}
                />
            </label><br/><br/>
            <button disabled={disableButton} type="submit">Add to Order!</button>
        </form>
    )
}

export default PizzaForm