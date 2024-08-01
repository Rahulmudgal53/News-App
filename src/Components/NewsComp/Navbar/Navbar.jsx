import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar(props) {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search/${search.length>0?search:'example'}`);
    };

    return (
        <nav>
            <div><Link to="/">APP_LOGO</Link></div>
            <form> 
                <div className="pseudo-search">
                  <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." autoFocus required/>
                  <i className="fa fa-globe places"></i>
                  <button className="fa fa-search" onClick={handleSearch} type="submit"></button>
                </div>
            </form>
            <ul>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/trending">Trending</Link></li>
                <li><Link to="/sports">Sports</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
