// import Button from "./Button"
// import React, {useState, useCallback, useEffect} from "react"
// import Text from "./Text"
// // const App = ()=>{
// //     // const [data, setData] = useState(
// //     //     [
// //     //         { id: 1, name: "Alice" },
// //     //         { id: 2, name: "Bob" },
// //     //         { id: 3, name: "Charlie" },
// //     //         { id: 4, name: "David" },
// //     //         { id: 5, name: "Eva" },
// //     // ])
// //     // const handleClickAction=()=>{
// //     //     console.log("clicked from parent");
// //     // }

// //     // const addData=()=>{
// //     //     setData((prevData)=>[...data, {id:6, name:"Bhaskar"}])
// //     // }
// //     // return (
// //     //     <>
// //     //     {data.map((item, id)=>
// //     //         <Text key={item.id}>{item.name}</Text>
// //     //     )}
// //     //         {/* <Button data={{a:{b:{c:'c'}}}} clickAction={handleClickAction}/>
// //     //          */}
// //     //          <Button clickAction={addData}>Add more data</Button>
             
            
// //     //         </> 
// //     // )

// //     //i have a text and a button and on click of the button, the text has to be changed
// //     // const [message, setMessage] = useState("good morning")
// //     // const changeMessage= useCallback(()=>{
// //     //     // console.log("before update ",message);
// //     //      setMessage((prevData)=> {
// //     //         console.log("previous data ",prevData);
// //     //         return "hello user, good afternoon"
// //     //      })
// //     //     //  console.log("after update ", message);
// //     // },[])
// //     // return(
// //     //     <>
// //     //       <div>
// //     //         <h1>{message}</h1>
// //     //             <Button clickAction={changeMessage}>change message</Button>
// //     //       </div>
        
// //     //     </>
// //     // )
// //     useEffect(()=>{
// //         console.log("useeffect running")

// //     },[])  //[] is dependency array
// //   return(

// //   )

// // }

// const App = ()=>{
//     const [data , setData] = useState(0)
//     useEffect(()=>{
//         console.log("useEffect running")
//     },[])
//     return(
//         <>
//         {data}
//         <br></br>
//           <button onClick={()=> setData((prevData)=> prevData + 1 )}>Update</button>
        
//         </>
//     )
// }








// export default App

import React, {useState, useCallback, useEffect} from 'react'
import ButtonWithToolTip from "./ButtonWithToolTip"

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
















