import React from "react"
import {useHistory} from "react-router-dom"


function Home() {
    const goBack = useHistory()
    // console.log("go back", goBack)

    const buyPizza = () => {
        console.log("Submitting...")
        goBack.push("/pizza")
    }
    return (
        <button data-cy="order" onClick={buyPizza}>Order Now!</button>
    )
}

export default Home