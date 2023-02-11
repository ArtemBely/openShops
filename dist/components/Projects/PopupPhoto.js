import React, { useEffect, useState } from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { onClick } = props;
    return (React.createElement("img", { className: "slick-arrow slick-prev", src: "../../../images/projects/left.png", alt: "right arrow", onClick: (e) => {
            onClick();
            e.stopPropagation();
        } }));
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (React.createElement("img", { className: "slick-arrow slick-next", src: "../../../images/projects/right.png", alt: "left arrow", onClick: (e) => {
            onClick();
            e.stopPropagation();
        } }));
}
const PopupPhoto = ({ popupOpen, detailedImgName, setPopupOpen, closePopup, photos, }) => {
    const [filteredArr, setFilteredArr] = useState([]);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: React.createElement(SamplePrevArrow, null),
        prevArrow: React.createElement(SampleNextArrow, null),
    };
    useEffect(() => {
        const index = photos.findIndex((item) => item === detailedImgName);
        const sliceArr = photos.slice(index);
        const oldArr = photos.slice(0, index);
        setFilteredArr([...sliceArr, ...oldArr]);
        console.log([...sliceArr, ...oldArr]);
    }, [detailedImgName]);
    return (React.createElement(React.Fragment, null, popupOpen ? (React.createElement("div", { className: "popup_container" },
        React.createElement("div", { className: "popup_photo" },
            React.createElement("div", { className: "close_wrapper" },
                React.createElement("img", { src: "../../../images/projects/close.png", alt: "close", onClick: closePopup, className: "close_popup" })),
            React.createElement(Slider, Object.assign({}, settings), filteredArr.length > 1 ? (filteredArr.map((photo, index) => (React.createElement("div", { key: photo.id },
                React.createElement("img", { key: photo, src: `../../../uploads/${photo}`, className: index === 0
                        ? "each_photo_project first_photo_project"
                        : "each_photo_project", style: {
                        filter: popupOpen ? "grayscale(0%)" : "grayscale(100%)",
                    }, onClick: (e) => e.stopPropagation() }))))) : (React.createElement("div", null, "none")))))) : (React.createElement(React.Fragment, null))));
};
export default PopupPhoto;
