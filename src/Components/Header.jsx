import React, { useEffect, useState } from 'react'

import Search from "../assets/images/search.svg"
import User from "../assets/images/user-icon.svg"
import Polygon from "../assets/images/polygon.svg"
import Menu from "../assets/images/menu-h.svg"
import CloseMenu from "../assets/images/close-menu.svg"
import Logo from "../assets/images/logo.png"
import "../assets/css/Navbar.css";
import { Link, useLocation, useNavigate } from 'react-router-dom'


export const Header = () => {

  const menuItems = [
    {
      title: "ABOUT US",
      url: "/PP-About",
      cName: "nav-links"
    },
    {
      title: "SERVICES",
      url: "/services",
      cName: "nav-links"
    },
    {
      title: "CONSULTANTS",
      url: "/ethical-sandards",
      cName: "nav-links"
    },
    {
      title: "FOOD AID",
      url: "/food-aid",
      cName: "nav-links"
    }

  ];

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [isAffixed, setIsAffixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsAffixed(true);
      } else {
        setIsAffixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const linkClick = () => {
    navigate('/login');
  };
  const SearchCon = () => {
    navigate('/PP-consultation');
  };


  const { pathname } = useLocation()


  return (
    <>
      <nav className={`navbar ${isAffixed ? 'affix' : ''}`}>
        {pathname == '/' ?
          <h1 className="navbar-logo">
            <Link to="/">
              <img src={Logo} alt="" /></Link>
          </h1>
          :
          <h1 className="navbar-logo black-logo">
            <Link to="/">
              <img src={Logo} alt="" /></Link>
          </h1>
        }
        <div className="menu-icon" onClick={handleClick}>
          <img src={active ? CloseMenu : Menu} />


        </div>
        <div className={active ? "nav-menu active" : "nav-menu"}>
          <ul className='main-menu'>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} className={item.cName}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className='Login-more'>
            <button className='text-btn header-secch-btn' onClick={SearchCon}><img className='img-fluid ' src={Search} alt="" /></button>
            <button className='btn-primary login-btn-mange' onClick={linkClick}><img className='img-fluid' src={User} alt="" />Login</button>
            <button className='btn-primary more-value px-4'><span>More</span> <img className='img-fluid' src={Polygon} alt="" />
              <div className='more-menu-show'>
                <ul>
                  <li><Link>Book An Appointment</Link></li>
                  <li><Link> Benefit Of the Prophetic</Link></li>
                  <li><Link> Consultant Opportunity</Link></li>
                  <li><Link> Consultants' Ethical Standards</Link></li>
                  <li><Link> Customer Satisfaction Guaranteed</Link></li>
                  <li><Link> Pricing</Link></li>
                  <li><Link>  How to get started</Link></li>
                  <li><Link to="/PP-Gifts-OF-Prophecy"> Prophetic Gift Vs Psychic Ability</Link></li>
                  <li><Link> Contact Us</Link></li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
