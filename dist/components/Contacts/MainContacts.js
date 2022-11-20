import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import Request from '../Request';
import { Contact } from './Contact';
function MainContacts() {
    return (React.createElement("p", { className: 'wrap_main_page' },
        React.createElement(Header, null),
        React.createElement(NavBar, null),
        React.createElement(Contact, null),
        React.createElement(Request, null),
        React.createElement(Footer, null)));
}
export default MainContacts;
