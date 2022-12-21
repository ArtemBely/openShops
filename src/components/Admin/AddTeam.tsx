import React from "react";

export const AddTeam = () => {
    return(
      <div style={{ display: typeof window != "undefined" && window.location.pathname.split('/').pop() == 'team' ? 'block' : 'none' }}>
          <p className='post_name'>Имя</p>
          <input type='text' className='post_input'/>
          <p className='post_name'>Должность</p>
          <input type='text' className='post_input'/>
      </div>
    )
}
