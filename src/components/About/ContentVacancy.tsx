import React from "react";
const fone1 = "../../../images/Rectangle 14-4-2.png";

export const ContentVacancy = () => {

    return (
      <div className='wrap_contentVacancy'>
          <div className='contentVacancy'>
              <p className='txt_about1Title spec_txt_about1Title'>Название вакансии</p>
              <img src={fone1} />
              <p className='descr_of_vacs'>Описание вакансии</p>
              <div className='txt_vacancy main_txt'>
                <p className='txt_vacancy spec_descr'>Текст описания вакансии. At vero eos et accusamus
                 et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                 atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                 similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                 Et harum quidem rerum facilis est et expedita distinctio.</p>
                <p className='txt_vacancy spec_descr'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
                 facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </p>
                 <p className='txt_vacancy spec_descr'>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                  repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                  maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
              </div>
              <div className='wrap_txtVacs'>
                <p className='bold_vacancy'>Наименование вакансии</p>
                <p className='txt_vacancy'>Главный инженер</p>
                <p className='bold_vacancy'>Aдрес</p>
                <p className='txt_vacancy'>г. Моска, Мясницкая ул., вл. 41, стр. 6, 7</p>
              </div>
          </div>
      </div>
    )
}
