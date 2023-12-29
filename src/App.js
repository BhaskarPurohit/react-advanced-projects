import Button from "./Button"
import React, {useState} from "react"
import Text from "./Text"
const App = ()=>{
    const [data, setData] = useState(
        [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
            { id: 3, name: "Charlie" },
            { id: 4, name: "David" },
            { id: 5, name: "Eva" },
    ])
    const handleClickAction=()=>{
        console.log("clicked from parent");
    }

    const addData=()=>{
        setData((prevData)=>[...data, {id:6, name:"Bhaskar"}])
    }
    return (
        <>
        {data.map((item, id)=>
            <Text key={item.id}>{item.name}</Text>
        )}
            {/* <Button data={{a:{b:{c:'c'}}}} clickAction={handleClickAction}/>
             */}
             <Button clickAction={addData}>Add more data</Button>
             
            
            </> 
    )
}

export default App