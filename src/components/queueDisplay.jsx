import React from 'react'

function QueueDisplay({ queue, onUpdateStatus, onremove }) {
    const getStatusColor=(status)=>{
        switch(status)
        {
            case 'waiting':
             return"var(--warning)";
             case 'serving':
             return"var(--success)";
             case 'completed':
             return"var(--info)";
             default:
                return"var(--text)";

}
        
    }
  return (
    <div className='queue-display'>
        <h2>Current Queue</h2>
        {queue.length==0?(<p className="no-data">No customers in queue</p>) :(
        <div className='queue-list'>
            {queue.map((customer)=> (
                <div className='queue-item' key={customer.id}>
                    <div className="customer-info">
                        <h3>{customer.name}</h3>
                        <p><strong>Service:</strong> {customer.service}</p>
                        <span className="status" style={{ color: getStatusColor(customer.status) }}>
                            {customer.status}
                        </span>
                    </div>
                    <div className="customer-actions">
                        <select 
                            value={customer.status} 
                            onChange={(e) => onUpdateStatus(customer.id, e.target.value)}
                            className="status-select"
                        >
                            <option value="waiting">Waiting</option>
                            <option value="serving">Serving</option>
                            <option value="completed">Completed</option>
                        </select>
                        <button 
                            onClick={() => onremove(customer.id)}
                            className="remove-btn"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
        )}
    </div>
  )
}

export default QueueDisplay
