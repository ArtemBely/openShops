import Main from './Main';
import MainContacts from './Contacts/MainContacts';
import MainAbout from './About/MainAbout';
import MainProjects from './Projects/MainProjects';
import MainNews from './News/MainNews';

const routes:Array<Object> = [
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
  }
]

export default routes;
