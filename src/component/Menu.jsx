import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact</Link>
                <Link to='/Faq'>Faq</Link>
        </div>
    );
};

export default Menu;
