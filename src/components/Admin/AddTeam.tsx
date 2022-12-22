import React from "react";

export const AddTeam = () => {
    return(
      <div style={{ display: typeof window != "undefined" && window.location.pathname.split('/').pop() == 'team' ? 'block' : 'none' }}>
          <form action='/publication/team' method='POST' id='teamForm'></form>
          <p className='post_name'>Имя</p>
          <input type='text' name='name' form='teamForm' required className='post_input'/>
          <p className='post_name'>Должность</p>
          <input type='text' name='title' form='teamForm' required className='post_input'/>
      </div>
    )
}
