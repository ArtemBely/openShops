import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import Request from '../Request';
import { Contact } from './Contact';

function MainContacts(){
    return(
      <p className='wrap_main_page'>
          <Header />
          <NavBar />
          <Contact />
          <Request />
          <Footer />
      </p>
    )
}

export default MainContacts;
