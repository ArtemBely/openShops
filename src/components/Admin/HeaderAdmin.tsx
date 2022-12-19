import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
const white_logo = "../../../images/Frame 1 — копия.svg";

function HeaderAdmin(){

  useEffect(() => {
    if (typeof window != "undefined" && (window.location.pathname == "/login" ||
      window.location.pathname == "/pannel" || window.location.pathname == "/pannel/projects" ||
      window.location.pathname == "/pannel/news" || window.location.pathname == "/pannel/vacancies" || window.location.pathname == "/pannel/team")) {
      document.body.style.backgroundColor = "#f2f2f5";
    }
  });

    return(
      <div className='wrap_header_admin'>
          <div className='header_admin'>
              <a href='/' className='wrap_admin_logo'><img src={white_logo} /></a>
              <div className='wrap_admin_links' style={{ display: typeof window != "undefined" && window.location.pathname == "/login" ? 'none' : 'flex' }}>
                  <NavLink to='/pannel/projects' className='admin_links' activeClassName='active_menu_links'>Проекты</NavLink>
                  <NavLink to='/pannel/news' className='admin_links' activeClassName='active_menu_links'>Новости</NavLink>
                  <NavLink to='/pannel/vacancies' className='admin_links' activeClassName='active_menu_links'>Вакансии</NavLink>
                  <NavLink to='/pannel/team' className='admin_links' activeClassName='active_menu_links'>Команда</NavLink>
              </div>
              <div className='wrap_admin_exit' style={{ display: typeof window != "undefined" && window.location.pathname == "/login" ? 'none' : 'flex' }}>
                  <a href='#'>Выйти</a>
              </div>
          </div>
      </div>
    )
}

export default HeaderAdmin;
