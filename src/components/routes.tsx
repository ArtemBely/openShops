import Main from './Main';
import MainContacts from './Contacts/MainContacts';
import MainAbout from './About/MainAbout';

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
  }
]

export default routes;
