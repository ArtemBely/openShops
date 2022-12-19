import React from 'react';
const white_logo = "../../../images/Frame 1 — копия.svg";

function HeaderAdmin(){
    return(
      <div className='wrap_header_admin'>
          <div className='header_admin'>
              <a href='/' className='wrap_admin_logo'><img src={white_logo} /></a>
          </div>
      </div>
    )
}

export default HeaderAdmin;
