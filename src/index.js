//created root -->> created child -->> appended the child
import React from "react"
import ReactDOM from "react-dom"
// const root = document.getElementById("root")
// const p = document.createElement('p')
// p.innerText = "Bruce Wayne of Gotham"      //innerText because we are not injecting any text, just text
// root.appendChild(p)
// const apiData = "hello from API"
const isMorning = false
const morningText = "good morning Mr. Wayne"
const afternoonText = "good afternoon Mr. Wayne"

const morningElement = <div>{morningText + ` it is 7am`}</div>
const afternoonElement = <div onClick={()=> HandleClick()}>{afternoonText + ` it is 2pm`}</div>
const greeting =isMorning ? morningElement: afternoonElement

function HandleClick(){
    console.log("i was clicked ");
}


const GreetingComponent = function(){
    return (
        <div>{greeting}</div>
    )
}

console.log(GreetingComponent);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<GreetingComponent/>)
