import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <Link to={'/'}>Home</Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;