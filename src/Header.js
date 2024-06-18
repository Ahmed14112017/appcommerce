import React from 'react'
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <Link to="/" style={{textDecoration:"none"}} >
      <div className="header_logo">
<StorefrontIcon className='header-itemlogo' fontSize='large'/>
<h2 className='header-logotitle'>eSHOP</h2>
      </div>
      </Link>
       
      <div className="header-search">
      <input type='text' className='search-text' />
      <SearchIcon className='header-icon' />

      </div>
      <div className="header-nav">
        <div className="nav-item">
          <span className="nav-one"> Hello Guest </span>
          <span className="nav-two">Sign in</span>
        </div>
        <div className="nav-item">
        <span className="nav-one"> Your </span>
          <span className="nav-two">shope</span>
        </div>
        <Link to="/Checkout" style={{textDecoration:"none"}}>
        <div className="nav-itemBasket">
        <ShoppingBasketIcon />
          <span className="nav-two nav-itemcount">0</span>
        </div>
        </Link>
        
      </div>
    </div>
  )
}
