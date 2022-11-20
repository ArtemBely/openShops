import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Request from './Request';
import { Partners } from './Partners';
import { Buildings } from './Buildings';
import { Detailed } from './Detailed';
import Screen from './Screen';

function Main(){
    return(
      <div className='wrap_main_page'>
          <Header />
          <Screen />
          <Detailed />
          <Buildings />
          <Partners />
          <Request />
          <Footer />
      </div>
    )
}

export default Main;
