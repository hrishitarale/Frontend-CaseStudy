import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import SearchBar from './SearchBar';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  return(
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Profiles</Link></li>
        <li><Link to="/admin">Admin Panel</Link></li>
      </ul>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </nav>
  );
};

export default Navbar;