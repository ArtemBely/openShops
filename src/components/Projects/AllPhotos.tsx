import React from "react";

const uno_main = "../../../images/projects/uno_main.jpg";
const fone1 = "../../../images/projects/1.jpg";
const fone2 = "../../../images/projects/2.jpg";
const fone3 = "../../../images/projects/3.jpg";
const fone4 = "../../../images/projects/4.jpg";
const fone5 = "../../../images/projects/5.jpg";
const fone6 = "../../../images/projects/6.jpg";
const fone7 = "../../../images/projects/7.jpg";
const fone8 = "../../../images/projects/8.jpg";
const fone9 = "../../../images/projects/9.jpg";
const fone10 = "../../../images/projects/10.jpg";
const fone11 = "../../../images/projects/11.jpg";
const fone12 = "../../../images/projects/12.jpg";
const fone13 = "../../../images/projects/13.jpg";
const fone14 = "../../../images/projects/14.jpg";
const fone15 = "../../../images/projects/15.jpg";
const fone16 = "../../../images/projects/16.jpg";
const fone17 = "../../../images/projects/17.jpg";
const fone18 = "../../../images/projects/18.jpg";
const fone19 = "../../../images/projects/19.jpg";
const fone20 = "../../../images/projects/20.jpg";
const fone21 = "../../../images/projects/21.jpg";
const fone22 = "../../../images/projects/22.jpg";
const fone23 = "../../../images/projects/23.jpg";
const fone24 = "../../../images/projects/24.jpg";
const fone25 = "../../../images/projects/25.jpg";

export const AllPhotos = () => {
  return (
    <div className="wrap_allPhotos">
      <div className="allPhotos">
        <p className="txt_about1Title" id="txt_about1TitleId">
          ЖК UNO Старокоптевский
        </p>
        <p className="date_style spec_data_style" id="spec_data_style">
          12 июля 2023
        </p>
        <div className="wrap_allImages">
          <img
            src={uno_main}
            className="each_photo_project first_photo_project"
          />
          <img src={fone1} className="each_photo_project" />
          <img src={fone2} className="each_photo_project" />
          <img src={fone3} className="each_photo_project" />
          <img src={fone4} className="each_photo_project" />
          <img src={fone5} className="each_photo_project" />
          <img src={fone6} className="each_photo_project" />
          <img src={fone7} className="each_photo_project" />
          <img src={fone8} className="each_photo_project" />
          <img src={fone9} className="each_photo_project" />
          <img src={fone10} className="each_photo_project" />
          <img src={fone11} className="each_photo_project" />
          <img src={fone12} className="each_photo_project" />
          <img src={fone13} className="each_photo_project hideMobile" />
          <img src={fone14} className="each_photo_project hideMobile" />
          <img src={fone15} className="each_photo_project hideMobile" />
          <img src={fone16} className="each_photo_project hideMobile" />
          <img src={fone17} className="each_photo_project hideMobile" />
          <img src={fone18} className="each_photo_project hideMobile" />
          <img src={fone19} className="each_photo_project hideMobile" />
          <img src={fone20} className="each_photo_project hideMobile" />
          <img src={fone21} className="each_photo_project hideMobile" />
          <img src={fone22} className="each_photo_project hideMobile" />
          <img src={fone23} className="each_photo_project hideMobile" />
          <img src={fone24} className="each_photo_project hideMobile" />
          <img src={fone25} className="each_photo_project hideMobile" />
        </div>
      </div>
    </div>
  );
};
