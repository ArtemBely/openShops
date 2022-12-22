import React, { useState, useEffect } from "react";
var arr:Array<number> = [0];

export const Technical = () => {

  const [count, setCount] = useState(1);

  const increaseCount = () => { setCount((prevState) => (prevState + 1)); }

  useEffect(() => {
    arr.push(count); console.log(arr)
  }, [count]);

  const returnFields = () => {
    return(
      <div>
          {arr.map((key:number) => (
            <div>
                <p className='post_name'>Заголовок {key+1}</p>
                <input type='text' className='main_characteristics_input' name={`technicalTitle${key+1}`}/>
                <p className='post_name special_descr'>Описание {key+1}</p>
                <input type='text' className='main_characteristics_input' name={`technicalDescription${key+1}`}/>
            </div>
          ))}
      </div>
    )
  }

    return(
      <div>
          <p className='post_name bold_name'>Технические характеристики</p>
          {returnFields()}
          <p className='post_name add_block' onClick={increaseCount}><span>+</span> Добавить блок</p>
      </div>
    )
}
