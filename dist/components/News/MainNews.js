import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import { FiltrNews } from './FiltrNews';
import { News } from './News';
function MainNews() {
    return (React.createElement("p", { className: 'wrap_main_page' },
        React.createElement(Header, null),
        React.createElement(NavBar, null),
        React.createElement(FiltrNews, null),
        React.createElement(News, null),
        React.createElement(Footer, null)));
}
export default MainNews;
