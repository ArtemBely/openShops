import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import { Filtr } from './Filtr';

function MainProjects(){
    return(
      <p className='wrap_main_page'>
          <Header />
          <NavBar />
          <Filtr />
          <Footer />
      </p>
    )
}

export default MainProjects;
