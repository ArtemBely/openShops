import Main from './Main';
import MainContacts from './Contacts/MainContacts';
import MainAbout from './About/MainAbout';
import { EachVacancy } from './About/EachVacancy';
import { EachNews } from './News/EachNews';
import MainProjects from './Projects/MainProjects';
import MainNews from './News/MainNews';
import { EachProject } from './Projects/EachProject';
import MainAdmin from './Admin/MainAdmin';
import Login from './Admin/Login';
import MainPublication from './Admin/MainPublication';
const routes = [
    {
        path: '/',
        exact: true,
        component: Main
    },
    {
        path: '/contacts',
        exact: true,
        component: MainContacts
    },
    {
        path: '/about',
        exact: true,
        component: MainAbout
    },
    {
        path: '/projects',
        exact: true,
        component: MainProjects
    },
    {
        path: '/news',
        exact: true,
        component: MainNews
    },
    {
        path: ['/pannel', '/pannel/projects', '/pannel/news',
            '/pannel/vacancies', '/pannel/team'],
        exact: true,
        component: MainAdmin
    },
    {
        path: ['/publication', '/publication/projects', '/publication/news',
            '/publication/vacancies', '/publication/team'],
        exact: true,
        component: MainPublication
    },
    {
        path: '/login',
        exact: true,
        component: Login
    },
    {
        path: '/about/:id',
        exact: true,
        component: EachVacancy
    },
    {
        path: '/news/:id',
        exact: true,
        component: EachNews
    },
    {
        path: '/projects/:id',
        exact: true,
        component: EachProject
    }
];
export default routes;
