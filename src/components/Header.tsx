import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
const logo = "../../images/Frame 1.svg";
const spec_screen_logo = '../../images/Frame 1 — копия 3.svg';
const white_logo = "../../images/Frame 1 — копия.svg";
const contact_header = '../../images/Frame 1 — копия 4.svg';

declare global {
    interface Window {

    }
}

export const Header = () => {

  const [imgIndicate, setImg] = useState({});
  const [headerIndicate, setHeader] = useState({});
  const [contactIndicate, setContact] = useState({});
  const [whiteHeader, setWhiteHeader] = useState({});

  useEffect(() => {
    if(typeof window != "undefined" && window.location.pathname == '/') {
      document.body.style.backgroundColor = "#010101"
      setImg(true);
      if(window.localStorage.getItem('count') == '6') {
        setHeader(false);
      }
      else { setHeader(true); }
    }
    else { setImg(false); }

    if(typeof window != "undefined" && window.location.pathname == '/contacts') {
      document.body.style.backgroundColor = "#010101"
      setContact(true);
    }
    else { setContact(false); }

    if(typeof window != "undefined" && (window.location.pathname == '/about' ||
     window.location.pathname == '/projects') || window.location.pathname == '/news') {
      document.body.style.backgroundColor = "white"
      setWhiteHeader(true);
    }
    else { setWhiteHeader(false); }

  }, []);

    return (
      <div className='wrap_header' style={{ backgroundColor: whiteHeader ? 'white' : 'transparent' }}>
          <div className='header'>
                <NavLink to='/'><img src={!headerIndicate ? spec_screen_logo : imgIndicate ? logo : contactIndicate ? contact_header : white_logo} id='logo'/></NavLink>
                <div className='wrap_menu'>
                  <NavLink to='/about' className='menu_links' activeClassName='active_menu_links' style={{ color: whiteHeader ? '#010101' : headerIndicate ? 'white' : '#2f4666' }}>О нас</NavLink>
                  <NavLink to='/projects' className='menu_links' activeClassName='active_menu_links' style={{ color: whiteHeader ? '#010101' : headerIndicate ? 'white' : '#2f4666' }}>Проекты</NavLink>
                  <NavLink to='/news' className='menu_links' activeClassName='active_menu_links' style={{ color: whiteHeader ? '#010101' : headerIndicate ? 'white' : '#2f4666' }}>Новости</NavLink>
                  <NavLink to='/contacts' className='menu_links' activeClassName='active_menu_links' style={{ color: whiteHeader ? '#010101' : headerIndicate ? 'white' : '#2f4666' }}>Контакты</NavLink>
                </div>
          </div>
      </div>
    )
}
