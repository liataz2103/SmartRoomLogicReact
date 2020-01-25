import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <nav className="navbar bg-primary">
                <h1> SmartHouse</h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                   
                </ul>
            </nav>
            
        </div>
    )
}
