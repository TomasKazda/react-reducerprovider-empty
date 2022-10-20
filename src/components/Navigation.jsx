import React from 'react'
import {Link} from 'react-router-dom'
const Navigation = () => {


    return (
        <div>
            <Link to="/">Listing</Link>
            <Link to="/add">Settings</Link>
        </div>
    )
}

export default Navigation;