import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <div>
         <nav>
           <Link to='/' id="add-party">Add Party</Link>
           <Link to='/display'>View Party</Link>

         </nav>

        </div>
    )
}

export default Navbar