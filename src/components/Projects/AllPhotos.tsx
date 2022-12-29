import React, { FC, useState } from "react";

import { IProject } from "../../server/models/project";

import PopupPhoto from "./PopupPhoto";

interface IAllPhotosProps {
  currentProject: IProject;
}

export const AllPhotos: FC<IAllPhotosProps> = ({ currentProject }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [detailedImgName, setDetailedImgName] = useState("");

  const clickPopup = (name: string) => {
    setPopupOpen(!popupOpen);
    setDetailedImgName(name);
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
          {currentProject.title}
        </p>
        <p
          className="date_style spec_data_style"
          id="spec_data_style"
          style={{
            filter: popupOpen ? "grayscale(0%)" : "grayscale(100%)",
          }}
        >
          {currentProject.tag}
        </p>
        <div className="wrap_allImages">
          {currentProject.arrayOfFiles &&
            currentProject.arrayOfFiles.map((photo, index) => (
              <img
                key={photo}
                src={`../../../uploads/${photo}`}
                className={
                  index === 0
                    ? "each_photo_project first_photo_project"
                    : "each_photo_project"
                }
                onClick={() => clickPopup(photo)}
              />
            ))}
        </div>
      </div>
      <PopupPhoto
        photos={currentProject.arrayOfFiles ? currentProject.arrayOfFiles : []}
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        detailedImgName={detailedImgName}
        closePopup={closePopup}
      />
    </div>
  );
};
