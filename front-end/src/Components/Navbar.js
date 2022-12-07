import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <div>
         <nav>
           <button><Link to='/' id="add-party">Add Party</Link></button>
           <button><Link to='/display'>View Party</Link></button>

         </nav>

        </div>
    )
}

export default Navbar