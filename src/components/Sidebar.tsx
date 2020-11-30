import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar : React.FC = () => {
    return (
        <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/expenses">Expenses</Link></li>
           <li><Link to="/participants">Participants</Link></li>
           <li><Link to="/groups">Groups</Link></li>
        </ul>
    )
}

export default Sidebar