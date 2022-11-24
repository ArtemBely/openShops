import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import { FiltrNews } from './FiltrNews';
import { News } from './News';

function MainNews(){
    return(
      <p className='wrap_main_page'>
          <Header />
          <NavBar />
          <FiltrNews />
          <News />
          <Footer />
      </p>
    )
}

export default MainNews;
