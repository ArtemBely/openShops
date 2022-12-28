import React, { FC } from "react";

 const Screen7: FC = () => {
   return (
     <div className="screen7">
       <div className="screen7-main">
         <p className="project_title2 screen7_title">
           Проектируем пространства <br /> для жизни, <span>работы</span> и
           творчества
         </p>
         <img
           src="../../images/screen7.png"
           alt="screen7 image"
           className="screen7_image"
         />
       </div>
       <a href="#request_field" className="request_field_link">
         <div style={{ width: "auto" }} className="discuss_button">
           Заполнить бриф
         </div>
       </a>
     </div>
   );
 };

 export default Screen7;
