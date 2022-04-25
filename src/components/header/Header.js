import React from "react";
import "./Header.css";
import punkLogo from "../../assets/header/cryptopunk-logo.png";
import searchIcon from "../../assets/header/search.png";
import themeSwitchIcon from "../../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className='header' id='topnav'>
      <div className='logoContainer'>
        <img src={punkLogo} className='punkLogo' alt='cryptopunk logo' />
      </div>
      <div className='searchBar'>
        <div className='searchIconContainer'>
          <img src={searchIcon} alt='search icon' />
        </div>
        <input
          className='searchInput'
          placeholder='Collection, item or user...'
        />
      </div>
      <div className='themeSwitchContainer'>
        <img src={themeSwitchIcon} alt='light/dark mode icon' />
      </div>

      <button className='toggle-collapse'>
        <i class='fa fa-bars' aria-hidden='true'></i>
      </button>
      <div className='navbar-collapse'>
        <div className='headerItems'>
          <p>Drops</p>
          <p>Marketplace</p>
          <p>Create</p>
          <div className='loginBtn'>GET IN</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
