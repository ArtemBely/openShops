import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
const logo = "../../images/Frame 1.svg";
const spec_screen_logo = '../../images/Frame 1 — копия 3.svg';
const white_logo = "../../images/Frame 1 — копия.svg";
const contact_header = '../../images/Frame 1 — копия 4.svg';
export const Header = () => {
    const [imgIndicate, setImg] = useState({});
    const [headerIndicate, setHeader] = useState({});
    const [contactIndicate, setContact] = useState({});
    const [whiteHeader, setWhiteHeader] = useState({});
    useEffect(() => {
        if (typeof window != "undefined" && window.location.pathname == '/') {
            document.body.style.backgroundColor = "#010101";
            setImg(true);
            if (window.localStorage.getItem('count') == '6') {
                setHeader(false);
            }
            else {
                setHeader(true);
            }
        }
        else {
            setImg(false);
        }
        if (typeof window != "undefined" && window.location.pathname == '/contacts') {
            document.body.style.backgroundColor = "#010101";
            setContact(true);
        }
        else {
            setContact(false);
        }
        if (typeof window != "undefined" && (window.location.pathname == '/about' ||
            window.location.pathname == '/projects') || window.location.pathname == '/news') {
            document.body.style.backgroundColor = "white";
            setWhiteHeader(true);
        }
        else {
            setWhiteHeader(false);
        }
    }, []);
    return (React.createElement("div", { className: 'wrap_header', style: { backgroundColor: whiteHeader ? 'white' : 'transparent' } },
        React.createElement("div", { className: 'header' },
            React.createElement(NavLink, { to: '/' },
                React.createElement("img", { src: !headerIndicate ? spec_screen_logo : imgIndicate ? logo : contactIndicate ? contact_header : white_logo, id: 'logo' })),
            React.createElement("div", { className: 'wrap_menu' },
                React.createElement(NavLink, { to: '/about', className: 'menu_links', activeClassName: 'active_menu_links', style: { color: whiteHeader ? '#010101' : headerIndicate ? 'white' : '#2f4666' } }, "\u041E \u043D\u0430\u0441"),
                React.createElement(NavLink, { to: '/projects', className: 'menu_links', activeClassName: 'active_menu_links', style: { color: whiteHeader ? '#010101' : headerIndicate ? 'white' : '#2f4666' } }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"),
                React.createElement(NavLink, { to: '/news', className: 'menu_links', activeClassName: 'active_menu_links', style: { color: whiteHeader ? '#010101' : headerIndicate ? 'white' : '#2f4666' } }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"),
                React.createElement(NavLink, { to: '/contacts', className: 'menu_links', activeClassName: 'active_menu_links', style: { color: whiteHeader ? '#010101' : headerIndicate ? 'white' : '#2f4666' } }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")))));
};
