import React, { useState, useEffect } from "react";
var arr:Array<number> = [0];

export const Description = (props:any) => {

  const [count, setCount] = useState(1);

  const increaseCount = () => { setCount((prevState) => (prevState + 1)); arr.push(count) }

  //useEffect(() => { arr.push(count) }, [count]);

  const returnFields = () => {
    return(
      <div>
          {arr.map((key:number) => (
            <div>
                <p className='post_name'>Заголовок {key+1}</p>
                <input type='text' name='descriptionTitle' form='projectsForm' required className='main_characteristics_input'/>
                <p className='post_name special_descr'>Описание {key+1}</p>
                <textarea name='descriptionTxt' form='projectsForm' required className='main_characteristics_area'/>
            </div>
          ))}
      </div>
    )
  }

    return(
      <div>
          <p className='post_name bold_name'>Подробное описание проекта</p>
          {returnFields()}
          <p className='post_name add_block' onClick={increaseCount}><span>+</span> Добавить блок</p>
      </div>
    )
}
