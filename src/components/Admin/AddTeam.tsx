import React, { useState, useEffect } from "react";
import { defineUpdate } from './defineUpdate';

export const AddTeam = (props:any) => {

  const [name, setData] = useState({
    name: '',
    title: ''
  });

  useEffect(() => {
    if(props.data) setData({ name: props.data.name, title: props.data.title });
  },[]);

  const handleChange = (e:any) => {
    setData({
       ...name,
       [e.target.name]: e.target.value
     });
  }

    return(
      <div style={{ display: typeof window != "undefined" && window.location.pathname.split('/')[2] == 'team' ? 'block' : 'none' }}>
          <form action={`/publication/${defineUpdate()}`} method='POST' id='teamForm' encType="multipart/form-data"></form>
          <p className='post_name'>Имя</p>
          <input type='text' name='name' form='teamForm' value={props.data ? name.name : undefined} onChange={handleChange} required className='post_input'/>
          <p className='post_name'>Должность</p>
          <input type='text' name='title' form='teamForm' value={props.data ? name.title : undefined} onChange={handleChange} required className='post_input'/>
      </div>
    )
}
