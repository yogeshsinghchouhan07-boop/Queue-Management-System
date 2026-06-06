import "./App.css";
import { useState } from "react";
import QueueForm from "./components/queueForm";
import QueueDisplay from "./components/queueDisplay";
export default function App() {
  const[queue, setQueue] = useState([]);
const addToQueue =(customer)=>{
  //Adding customer to the queue 
  setQueue([...queue,{ ...customer, id:Date.now() , status:"waiting"}])
};
const updateStatus =(id,newStatus)=>{
  //Updating the status of the customer in the queue 
  setQueue(queue.map(customer=>{
    return customer.id === id?{...customer ,status : newStatus}:customer
  }))
};
const removeFromQueue =(id)=>{
  //Removing the Customer from the queue 
  setQueue(queue.filter(customer=> customer.id !==id))
};


  return (
    <div className="App">
      <div className="section">
        <h1>Queue Management system</h1>
      <p>Manage Your Customers Efficiently</p>
      
      </div>
      <main className="main">
       <div><QueueForm onAdd={addToQueue}/></div> 
       <div className="display"><QueueDisplay
       queue={queue}
       onUpdateStatus={updateStatus}
       onremove = {removeFromQueue}
       
       
       /></div> 
      </main>
      
    
     
    </div>
  );
}