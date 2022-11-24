import React, { useState, useEffect } from "react";

export const NavBar = () => {

    const [currentPath, setCurrentPath] = useState('');
    useEffect(() => {
      if(typeof window != "undefined") {
        setCurrentPath(window.location.pathname == '/contacts' ? 'Контакты' :
                       window.location.pathname == '/about' ? 'О нас' :
                       window.location.pathname == '/projects' ? 'Проекты' :
                       window.location.pathname == '/news' ? 'Новости' : '')
      }
    }, []);

    return (
      <div className='wrap_navbar'>
          <div className='navbar'>
              <p className='navbar_style'>Главная → {currentPath}</p>
          </div>
      </div>
    )
}
