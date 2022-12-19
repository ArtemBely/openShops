import React from "react";

export const Form = () => {

    return(
      <div className='wrap_form'>
          <div className='form_inside'>
              <p className='admin_txt'>Кабинет администратора</p>
              <p className='login_txt'>Логин</p>
              <p className='login_txt'>Пароль</p>
              <input type='email' className='login_inputs email_inp'/>
              <input type='password' className='login_inputs pass_inp'/>
              <button className='login_btn'>Вход</button>
          </div>
      </div>
    )
}
