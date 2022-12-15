import React from "react";
const fone1 = "../../images/Rectangle 855-2.png";
const fone2 = "../../images/Rectangle 857-2.png";
const fone3 = "../../images/Rectangle 856-2.png";

export const Screen5 = () => {
  return (
    <div className="screen3">
      <div className="wrap_fone2">
        <img src={fone1} className="screen_imgs1" />
        <img src={fone2} className="screen_imgs1" />
        <img src={fone3} className="screen_imgs1" />
      </div>
      <p className="project_title2">
        Интересная среда для детей, молодёжи и взрослых
      </p>
      <a href="#request_field" className="request_field_link">
        <div className="discuss_button2" id="discuss_button2">
          Заполнить бриф
        </div>
      </a>
    </div>
  );
};
