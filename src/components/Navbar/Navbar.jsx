import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'

import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import './Navbar.css'

const Navbar = () => {

    var User = null 

  return (
    <nav>
        <div className="navbar">
            {/* we will add various tabs 
            of navbar such as home about us ,, using the link element*/}
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type="text" placeholder='Search...' />
                <img src={search} alt="search" width="18" className='search-icon'/>
            </form> 

            {   User === null ?
                <Link to='/Auth' className='nav-item nav-links'>Log In </Link> :
                <>
                    <Link to='/'><Avatar>M</Avatar><Avatar /></Link>
                    <Button>Log Out</Button>
                </>     
            }
        </div>
    </nav>
  )
}

export default Navbar
