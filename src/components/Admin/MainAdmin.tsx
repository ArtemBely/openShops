import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import { Publication } from './Publication';

function MainAdmin(){
    return(
      <p className='wrap_main_page'>
          <HeaderAdmin />
          <Publication />
      </p>
    )
}

export default MainAdmin;
