import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
const white_logo = "../../../images/Frame 1 — копия.svg";
function HeaderAdmin() {
    useEffect(() => {
        if (typeof window != "undefined" && (window.location.pathname == "/login" ||
            window.location.pathname.split('/')[1] == "pannel" ||
            window.location.pathname.split('/')[1] == "publication")) {
            document.body.style.backgroundColor = "#f2f2f5";
        }
    });
    return (React.createElement("div", { className: 'wrap_header_admin' },
        React.createElement("div", { className: 'header_admin' },
            React.createElement("a", { href: '/', className: 'wrap_admin_logo' },
                React.createElement("img", { src: white_logo })),
            React.createElement("div", { className: 'wrap_admin_links', style: { display: typeof window != "undefined" && window.location.pathname == "/login" ? 'none' : 'flex' } },
                React.createElement(NavLink, { to: '/pannel/projects', className: typeof window != "undefined" && window.location.pathname.split('/').pop() == "projects" ? 'admin_links active_menu_links' : 'admin_links', activeClassName: 'active_menu_links' }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"),
                React.createElement(NavLink, { to: '/pannel/news', className: typeof window != "undefined" && window.location.pathname.split('/').pop() == "news" ? 'admin_links active_menu_links' : 'admin_links', activeClassName: 'active_menu_links' }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"),
                React.createElement(NavLink, { to: '/pannel/vacancies', className: typeof window != "undefined" && window.location.pathname.split('/').pop() == "vacancies" ? 'admin_links active_menu_links' : 'admin_links', activeClassName: 'active_menu_links' }, "\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438"),
                React.createElement(NavLink, { to: '/pannel/team', className: typeof window != "undefined" && window.location.pathname.split('/').pop() == "team" ? 'admin_links active_menu_links' : 'admin_links', activeClassName: 'active_menu_links' }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430")),
            React.createElement("div", { className: 'wrap_admin_exit', style: { display: typeof window != "undefined" && window.location.pathname == "/login" ? 'none' : 'flex' } },
                React.createElement("a", { href: '#' }, "\u0412\u044B\u0439\u0442\u0438")))));
}
export default HeaderAdmin;
