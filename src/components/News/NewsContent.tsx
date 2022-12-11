import React from "react";
const fone1 = "../../../images/Rectangle 14-5-2.png";

export const NewsContent = () => {

    return (
      <div className='wrap_contentVacancy'>
          <div className='contentVacancy'>
              <p className='txt_about1Title'>Название новости</p>
              <p className='date_style spec_data_style' id='spec_data_style_news'>12 июля 2023</p>
              <img src={fone1} />
              <p className='descr_of_vacs'>Описание новости</p>
              <div className='txt_vacancy main_txt'>
                  <p className='txt_vacancy'>Описание новости. At vero eos et accusamus et iusto odio dignissimos
                   ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
                   dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                   similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                   Et harum quidem rerum facilis est et expedita distinctio.
                  </p>
                  <p className='txt_vacancy'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                   impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                  </p>
                  <p className='txt_vacancy'>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                   eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
                   delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                  </p>
              </div>
          </div>
      </div>
    )
}
