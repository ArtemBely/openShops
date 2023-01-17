import React, { FC, useState } from "react";

import { IProject } from "../../server/models/project";

import PopupPhoto from "./PopupPhoto";

interface IAllPhotosProps {
  currentProject: IProject;
  closePopup: () => void;
  clickPopup: (arg0: any) => void;
  popupOpen: boolean;
}

export const AllPhotos: FC<IAllPhotosProps> = ({
  currentProject,
  closePopup,
  popupOpen,
  clickPopup,
}) => {
  return (
    <div className="wrap_allPhotos" onClick={closePopup}>
      <div className="allPhotos" onClick={(e) => e.stopPropagation()}>
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
    </div>
  );
};
