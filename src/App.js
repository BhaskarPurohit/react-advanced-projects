import Button from "./Button"
import React from "react"
const App = ()=>{
    const handleClickAction=()=>{
        console.log("clicked from parent");
    }
    return (
        
            <Button clickAction={handleClickAction}/>
        
    )
}

export default App