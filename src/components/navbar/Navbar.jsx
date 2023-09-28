import React, { useState } from 'react'
import './navbar.scss'
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
   
    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png' alt='Netflix-logo' />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search  className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src='https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=400' alt='profile' />
                <div className="profile">
                    <ArrowDropDown className='icon' />
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>

                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

