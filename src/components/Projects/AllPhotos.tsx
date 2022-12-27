import React, { useEffect, useRef, useState } from "react";
import { allPhotosArr } from "./allPhotosArr";
import PopupPhoto from "./PopupPhoto";

export const AllPhotos = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [detailedImgId, setDetailedImgId] = useState(1);

  const clickPopup = (id: number) => {
    setPopupOpen(!popupOpen);
    setDetailedImgId(id);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopupOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="wrap_allPhotos" onClick={closePopup}>
      <div className="allPhotos" onClick={(e) => e.stopPropagation()}>
        <p className="txt_about1Title" id="txt_about1TitleId">
          ЖК UNO Старокоптевский
        </p>
        <p
          className="date_style spec_data_style"
          id="spec_data_style"
          style={{
            filter: popupOpen ? "grayscale(0%)" : "grayscale(100%)",
          }}
        >
          12 июля 2023
        </p>
        <div className="wrap_allImages">
          {allPhotosArr.map((photo: any) => (
            <img
              key={photo.id}
              src={photo.img}
              className={photo.className}
              onClick={() => clickPopup(photo.id)}
            />
          ))}
        </div>
      </div>
      <PopupPhoto
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        detailedImgId={detailedImgId}
        closePopup={closePopup}
      />
    </div>
  );
};
