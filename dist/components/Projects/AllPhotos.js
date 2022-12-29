import React, { useState } from "react";
import PopupPhoto from "./PopupPhoto";
export const AllPhotos = ({ currentProject }) => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [detailedImgName, setDetailedImgName] = useState("");
    const clickPopup = (name) => {
        setPopupOpen(!popupOpen);
        setDetailedImgName(name);
        document.body.style.overflow = "hidden";
    };
    const closePopup = () => {
        setPopupOpen(false);
        document.body.style.overflow = "auto";
    };
    return (React.createElement("div", { className: "wrap_allPhotos", onClick: closePopup },
        React.createElement("div", { className: "allPhotos", onClick: (e) => e.stopPropagation() },
            React.createElement("p", { className: "txt_about1Title", id: "txt_about1TitleId" }, currentProject.title),
            React.createElement("p", { className: "date_style spec_data_style", id: "spec_data_style", style: {
                    filter: popupOpen ? "grayscale(0%)" : "grayscale(100%)",
                } }, currentProject.tag),
            React.createElement("div", { className: "wrap_allImages" }, currentProject.arrayOfFiles &&
                currentProject.arrayOfFiles.map((photo, index) => (React.createElement("img", { key: photo, src: `../../../uploads/${photo}`, className: index === 0
                        ? "each_photo_project first_photo_project"
                        : "each_photo_project", onClick: () => clickPopup(photo) }))))),
        React.createElement(PopupPhoto, { photos: currentProject.arrayOfFiles ? currentProject.arrayOfFiles : [], popupOpen: popupOpen, setPopupOpen: setPopupOpen, detailedImgName: detailedImgName, closePopup: closePopup })));
};
