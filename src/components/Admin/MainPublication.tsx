import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import { NewForm } from './NewForm';

function MainPublication(){
    return(
      <p className='wrap_main_page'>
          <HeaderAdmin />
          <NewForm />
      </p>
    )
}

export default MainPublication;
