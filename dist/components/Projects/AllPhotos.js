import React, { useState } from "react";
import { allPhotosArr } from "./allPhotosArr";
import PopupPhoto from "./PopupPhoto";
export const AllPhotos = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [detailedImgId, setDetailedImgId] = useState(1);
    const clickPopup = (id) => {
        setPopupOpen(!popupOpen);
        setDetailedImgId(id);
        document.body.style.overflow = "hidden";
    };
    const closePopup = () => {
        setPopupOpen(false);
        document.body.style.overflow = "auto";
    };
    return (React.createElement("div", { className: "wrap_allPhotos", onClick: closePopup },
        React.createElement("div", { className: "allPhotos", onClick: (e) => e.stopPropagation() },
            React.createElement("p", { className: "txt_about1Title", id: "txt_about1TitleId" }, "\u0416\u041A UNO \u0421\u0442\u0430\u0440\u043E\u043A\u043E\u043F\u0442\u0435\u0432\u0441\u043A\u0438\u0439"),
            React.createElement("p", { className: "date_style spec_data_style", id: "spec_data_style", style: {
                    filter: popupOpen ? "grayscale(0%)" : "grayscale(100%)",
                } }, "12 \u0438\u044E\u043B\u044F 2023"),
            React.createElement("div", { className: "wrap_allImages" }, allPhotosArr.map((photo) => (React.createElement("img", { key: photo.id, src: photo.img, className: photo.className, onClick: () => clickPopup(photo.id) }))))),
        React.createElement(PopupPhoto, { popupOpen: popupOpen, setPopupOpen: setPopupOpen, detailedImgId: detailedImgId, closePopup: closePopup })));
};
