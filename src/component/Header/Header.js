import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <>
               <Link to="/">Home</Link>
               <Link to="/aboutus">About Us</Link>
          </>
     );
};

export default Header;