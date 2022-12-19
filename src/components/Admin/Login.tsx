import React from 'react';
import { Form } from './Form';
import HeaderAdmin from './HeaderAdmin';

function Login(){
    return(
      <p className='wrap_main_page'>
          <HeaderAdmin />
          <Form />
      </p>
    )
}

export default Login;
