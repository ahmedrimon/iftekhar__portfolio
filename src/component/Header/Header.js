import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <section className="text-center mt-6 font-plainThin font-bold text-lg">
               <Link className="" to="/">Home</Link>
               <Link className="ml-6" to="/aboutus">About Us</Link>
          </section>
     );
};

export default Header;