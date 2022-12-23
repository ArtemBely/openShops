import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
const white_logo = "../../../images/Frame 1 — копия.svg";

function HeaderAdmin(){

  useEffect(() => {
    if (typeof window != "undefined" && (window.location.pathname == "/login" ||
      window.location.pathname.split('/')[1] == "pannel" ||
      window.location.pathname.split('/')[1] == "publication")) {
      document.body.style.backgroundColor = "#f2f2f5";
    }
  });

    return(
      <div className='wrap_header_admin'>
          <div className='header_admin'>
              <a href='/' className='wrap_admin_logo'><img src={white_logo} /></a>
              <div className='wrap_admin_links' style={{ display: typeof window != "undefined" && window.location.pathname == "/login" ? 'none' : 'flex' }}>
                  <NavLink to='/pannel/projects' className={typeof window != "undefined" && window.location.pathname.split('/')[2] == "projects" ? 'admin_links active_menu_links' : 'admin_links'} activeClassName='active_menu_links'>Проекты</NavLink>
                  <NavLink to='/pannel/news' className={typeof window != "undefined" && window.location.pathname.split('/')[2] == "news" ? 'admin_links active_menu_links' : 'admin_links'} activeClassName='active_menu_links'>Новости</NavLink>
                  <NavLink to='/pannel/vacancies' className={typeof window != "undefined" && window.location.pathname.split('/')[2] == "vacancies" ? 'admin_links active_menu_links' : 'admin_links'} activeClassName='active_menu_links'>Вакансии</NavLink>
                  <NavLink to='/pannel/team' className={typeof window != "undefined" && window.location.pathname.split('/')[2] == "team" ? 'admin_links active_menu_links' : 'admin_links'} activeClassName='active_menu_links'>Команда</NavLink>
              </div>
              <div className='wrap_admin_exit' style={{ display: typeof window != "undefined" && window.location.pathname == "/login" ? 'none' : 'flex' }}>
                  <a href='#'>Выйти</a>
              </div>
          </div>
      </div>
    )
}

export default HeaderAdmin;
