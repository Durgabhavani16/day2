import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Using react-icons for logos
import "./header.css";
const Header = ({ cartCount }) => {
  return (
    <header style={headerStyles.container}>
      <img src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png" alt="Logo" style={{width:'50px'}} />
      <div style={headerStyles.searchContainer}>
        <input type="text" placeholder="Search..." style={headerStyles.searchInput} />
        <button style={headerStyles.searchButton}>Search</button>
      </div>
      <div style={headerStyles.cartContainer}>
        <FaShoppingCart style={headerStyles.cartIcon} />
        <span style={headerStyles.cartCount}>{cartCount}</span>
      </div>
      <div style={headerStyles.userContainer}>
        <FaUser style={headerStyles.userIcon} />
        <span style={headerStyles.username}>Hello, Username</span>
        <select style={headerStyles.dropdown}>
          <option>Profile</option>
          <option>Settings</option>
          <option>Logout</option>
        </select>
      </div>
    </header>
  );
};

const headerStyles = {
  // Styles remain the same
};

export default Header;
