import React, { useEffect, useState } from "react";

export const Publication = () => {

  const [txtPublic, setTxtPublic] = useState('проектов');
  const [txtBelow, setTxtBelow] = useState('Добавить новый проект');

  useEffect(() => {
    if(typeof window != "undefined") {
      if(window.location.pathname.split('/').pop() == 'projects') { setTxtPublic('проектов'); setTxtBelow('Добавить новый проект'); }
      if(window.location.pathname.split('/').pop() == 'news') { setTxtPublic('новостей'); setTxtBelow('Добавить новую новость'); }
      if(window.location.pathname.split('/').pop() == 'vacancies') { setTxtPublic('вакансий'); setTxtBelow('Создать новую вакансию'); }
      if(window.location.pathname.split('/').pop() == 'team') { setTxtPublic('команды'); setTxtBelow('Добавить нового участника команды'); }
    }
  });

    return(
      <div className='wrap_public_txt'>
          <p className='txtPublic'>Публикация {txtPublic}</p>
          <p className='txtBelow'><span>+</span> {txtBelow}</p>
      </div>
    )
}
