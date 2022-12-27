import React, { useState, useEffect } from "react";

declare global {
    interface Window {
        __INITIAL_ERRORS__:Array<string>;
    }
}

export const Form = () => {

  const [err, setErr] = useState('');
  useEffect(() => {
    if(typeof window != "undefined") {
      setErr(window.__INITIAL_ERRORS__[0]);
      console.log(window.__INITIAL_ERRORS__)
    }
  })

    return(
      <div className='wrap_form'>
          <div className='form_inside'>
              <form method='POST' action='/login/signin' id='signinForm' style={{ position: 'absolute' }}></form>
                  <p className='admin_txt'>Кабинет администратора</p>
                  <p className='login_txt'>Логин</p>
                  <p className='login_txt'>Пароль</p>
                  <input type='email' name='email' form='signinForm' required className='login_inputs email_inp'/>
                  <input type='password' name='password' form='signinForm' required className='login_inputs pass_inp'/>
                  <button className='login_btn' form='signinForm' type='submit'>Вход</button>
                  <p style={{ color: 'red' }}>{err}</p>
          </div>
      </div>
    )
}
