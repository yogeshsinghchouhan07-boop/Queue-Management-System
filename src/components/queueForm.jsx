import {useState} from "react";
import {FaUserPlus} from "react-icons/fa";
import "../App.css";
export default function QueueForm({onAdd}) {
    const [name, setName] = useState("");
    const [service, setService] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        //validations
        if(!name.trim() || !service.trim())return;
        onAdd({name,service});
        setName("");
        setService("");
    };
    return(
        <>
        <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to Queue</h2>
        <div className = "form-group">
        <input className="Name" placeholder="Customer Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className = "form-group">
        <select  className = "selection" value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="consultation">Consultation</option>
             <option value="payment">Payment</option>
              <option value="support">Support</option>
           
        </select>
        </div>
        <button type="submit"><FaUserPlus/>Add to Queue</button>
        
        
        
        
        
        
        </form>
        
        
        

        
        
        
        
        
        </>
    )
}