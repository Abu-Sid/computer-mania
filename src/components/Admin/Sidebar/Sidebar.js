import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import React from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className="sidebar">
      
            <Link to="/manage"> 
              <h3><SupervisorAccountIcon/>Manage Product List</h3> 
            </Link>
          
            <Link to="/addEvent">
               <h3><PersonAddIcon/> Add event</h3>
            </Link>
          
            </div>
        </div>
    );
};

export default Sidebar;