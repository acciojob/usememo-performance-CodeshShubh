
import React, { useMemo, useState } from "react";
import './../styles/App.css';

const tasks = [
  { id: 1, title: "Task 1", status: "active" },
  { id: 2, title: "Task 2", status: "completed" },
  { id: 3, title: "Task 3", status: "active" },
  { id: 4, title: "Task 4", status: "completed" },
  { id: 5, title: "Task 5", status: "completed" },
  { id: 6, title: "Task 6", status: "active" },
  { id: 7, title: "Task 7", status: "completed" },
  { id: 8, title: "Task 8", status: "active" },
  { id: 9, title: "Task 9", status: "completed" },
  { id: 10, title: "Task 10", status: "active" },
  { id: 11, title: "Task 11", status: "active" },
  { id: 12, title: "Task 12", status: "completed" },
  { id: 13, title: "Task 13", status: "active" },
  { id: 14, title: "Task 14", status: "completed" },
  { id: 15, title: "Task 15", status: "completed" },
  { id: 16, title: "Task 16", status: "active" },
  { id: 17, title: "Task 17", status: "completed" },
  { id: 18, title: "Task 18", status: "completed" },
  { id: 19, title: "Task 19", status: "active" },
  { id: 20, title: "Task 20", status: "completed" },
  { id: 21, title: "Task 21", status: "active" },
  { id: 22, title: "Task 22", status: "completed" },
  { id: 23, title: "Task 23", status: "active" },
  { id: 24, title: "Task 24", status: "completed" },
  { id: 25, title: "Task 25", status: "active" },
  { id: 26, title: "Task 26", status: "active" },
  { id: 27, title: "Task 27", status: "completed" },
  { id: 28, title: "Task 28", status: "active" },
  { id: 29, title: "Task 29", status: "completed" },
  { id: 30, title: "Task 30", status: "active" },
  { id: 31, title: "Task 31", status: "completed" },
  { id: 32, title: "Task 32", status: "completed" },
  { id: 33, title: "Task 33", status: "active" },
  { id: 34, title: "Task 34", status: "completed" },
  { id: 35, title: "Task 35", status: "active" },
  { id: 36, title: "Task 36", status: "completed" },
  { id: 37, title: "Task 37", status: "completed" },
  { id: 38, title: "Task 38", status: "active" },
  { id: 39, title: "Task 39", status: "active" },
  { id: 40, title: "Task 40", status: "completed" },
  { id: 41, title: "Task 41", status: "completed" },
  { id: 42, title: "Task 42", status: "active" },
  { id: 43, title: "Task 43", status: "completed" },
  { id: 44, title: "Task 44", status: "active" },
  { id: 45, title: "Task 45", status: "completed" },
  { id: 46, title: "Task 46", status: "active" },
  { id: 47, title: "Task 47", status: "completed" },
  { id: 48, title: "Task 48", status: "active" },
  { id: 49, title: "Task 49", status: "active" },
  { id: 50, title: "Task 50", status: "completed" }
];


const App = () => {
   const [data , setData ]= useState(tasks);
   const [filterData , setFilterData] = useState(data)

    const memoData = useMemo(()=>{
         return filterData
    },[filterData])

 const activeTasks = ()=>{
   const activeFilter = data.filter((items)=>items.status==="active")
   setFilterData(activeFilter) 
 }

 const completedTasks = ()=>{
  const completedFilter = data.filter((items)=>items.status==="completed")
  setFilterData(completedFilter) 
}

  return (
    <div>
      <div>
         <button onClick={()=>setFilterData(tasks)} >All</button>
         <button onClick={activeTasks} >Active</button>
         <button onClick={completedTasks} >Completed</button>
      </div>

      <h1>Note: Lists is artificially slowed down!</h1>
      <ul>

        {
          
          memoData.map((items)=>{
            return(
              <li key={items.id} style={items.status==="completed" ? { textDecorationLine:"line-through" } : { textDecorationLine:"none" } }>{items.title}</li>
            )
          })
        }
        </ul> 
    </div>
  )
}

export default App
