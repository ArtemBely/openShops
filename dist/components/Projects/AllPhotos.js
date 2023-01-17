import React from "react";
export const AllPhotos = ({ currentProject, closePopup, popupOpen, clickPopup, }) => {
    return (React.createElement("div", { className: "wrap_allPhotos", onClick: closePopup },
        React.createElement("div", { className: "allPhotos", onClick: (e) => e.stopPropagation() },
            React.createElement("p", { className: "date_style spec_data_style", id: "spec_data_style", style: {
                    filter: popupOpen ? "grayscale(0%)" : "grayscale(100%)",
                } }, currentProject.tag),
            React.createElement("div", { className: "wrap_allImages" }, currentProject.arrayOfFiles &&
                currentProject.arrayOfFiles.map((photo, index) => (React.createElement("img", { key: photo, src: `../../../uploads/${photo}`, className: index === 0
                        ? "each_photo_project first_photo_project"
                        : "each_photo_project", onClick: () => clickPopup(photo) })))))));
};
