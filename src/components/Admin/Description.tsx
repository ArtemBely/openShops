import React, { useState, useEffect } from "react";
var arr:Array<number> = [0];
let mainNameArr:any;
let mainDescriptionArr:any;

export const Description = (props:any) => {

  const [count, setCount] = useState(1);
  const [name, setData] = useState({
    mainName: [],
    mainDescription: []
  });

  const increaseCount = () => { setCount((prevState) => (prevState + 1)); arr.push(count) }

  useEffect(() => {
    /*arr.push(count);*/
    if(typeof window != "undefined" && window.location.pathname.split('/').length == 4) arr.pop();
    if(props.val && props.val != null) {
        setData({ mainName: props.val[0], mainDescription: props.val[1] });
        mainNameArr = [...name.mainName];
        mainDescriptionArr = [...name.mainDescription];
     }
   }, []);

   //existed values
   const returnFields = () => {
     if(props.val && props.val != null)
     return (
       <div>
         {props.val[0].map((item:any, key:number) => ( 
           <div>
               <p className='post_name'>Заголовок {key+1}</p>
               <input type='text' name='descriptionTitle' form='projectsForm' value={props.val ? name.mainName[key] : undefined} onChange={(e:any) => {
                 mainNameArr[key] = e.target.value;
                 setData({ ...name, mainName: mainNameArr })
               }} required className='main_characteristics_input'/>
               <p className='post_name special_descr'>Описание {key+1}</p>
               <textarea name='descriptionTxt' form='projectsForm' value={props.val ? name.mainDescription[key] : undefined} onChange={(e:any) => {
                 mainDescriptionArr[key] = e.target.value;
                 setData({ ...name, mainDescription: mainDescriptionArr });
               }} required className='main_characteristics_area'/>
           </div>
         ))}
       </div>
     )
     return
   }

  //new values
  const returnNewFields = () => {
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
            {returnNewFields()}
          <p className='post_name add_block' onClick={increaseCount}><span>+</span> Добавить блок</p>
      </div>
    )
}
