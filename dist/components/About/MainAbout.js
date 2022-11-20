import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import Request from '../Request';
import { AboutScreen } from './AboutScreen';
import { BelowScreen } from './BelowScreen';
import { Culture } from './Culture';
import { ChooseUs } from './ChooseUs';
import { Team } from './Team';
import { Vacancies } from './Vacancies';
function MainAbout() {
    return (React.createElement("p", { className: 'wrap_main_page' },
        React.createElement(Header, null),
        React.createElement(NavBar, null),
        React.createElement(AboutScreen, null),
        React.createElement(BelowScreen, null),
        React.createElement(Culture, null),
        React.createElement(ChooseUs, null),
        React.createElement(Team, null),
        React.createElement(Vacancies, null),
        React.createElement(Request, null),
        React.createElement(Footer, null)));
}
export default MainAbout;
