import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import { Filtr } from './Filtr';
function MainProjects() {
    return (React.createElement("p", { className: 'wrap_main_page' },
        React.createElement(Header, null),
        React.createElement(NavBar, null),
        React.createElement(Filtr, null),
        React.createElement(Footer, null)));
}
export default MainProjects;
