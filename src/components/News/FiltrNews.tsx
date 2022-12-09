import React from "react";

export const FiltrNews = () => {

  const changeFiltr = (e:any) => {
    document.querySelectorAll('.each_categoryNews').forEach((item) => {
      item.classList.remove('choosenCategory');
    });
    e.target.classList.add('choosenCategory');
  }

    return (
      <div className='wrap_aboutProject'>
        <div id='project_title'>
            <p className='about_title spec_about_title'>Новости</p>
        </div>
          <div className='aboutProject'>
                <div className='wrap_allNews'>
                    <p className='each_categoryNews choosenCategory' id='choosenAllCategory' onClick={changeFiltr}>Все проекты</p>
                    <p className='each_categoryNews' onClick={changeFiltr}>Конкурсные проекты</p>
                    <p className='each_categoryNews' onClick={changeFiltr}>Конкурсные проекты</p>
                    <p className='each_categoryNews' onClick={changeFiltr}>Конкурсные проекты</p>
                    <p className='each_categoryNews' onClick={changeFiltr}>Конкурсные проекты</p>
                    <p className='each_categoryNews planchHidden' onClick={changeFiltr}>Конкурсные проекты</p>
                </div>
          </div>
      </div>
    )
}
