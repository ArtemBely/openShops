import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { allPhotosArr } from "./allPhotosArr";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (React.createElement("img", { className: "slick-arrow slick-prev", src: "../../../images/projects/left.png", alt: "right arrow", onClick: (e) => {
            onClick();
            e.stopPropagation();
        } }));
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (React.createElement("img", { className: "slick-arrow slick-next", src: "../../../images/projects/right.png", alt: "left arrow", onClick: (e) => {
            onClick();
            e.stopPropagation();
        } }));
}
const PopupPhoto = ({ popupOpen, detailedImgId, setPopupOpen, closePopup, }) => {
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
        const sliceArr = allPhotosArr.slice(detailedImgId - 1);
        const oldArr = allPhotosArr.slice(0, detailedImgId - 1);
        setFilteredArr([...sliceArr, ...oldArr]);
    }, [detailedImgId]);
    return (React.createElement(React.Fragment, null, popupOpen ? (React.createElement("div", { className: "popup_container" },
        React.createElement("div", { className: "popup_photo" },
            React.createElement("div", { className: "close_wrapper" },
                React.createElement("img", { src: "../../../images/projects/close.png", alt: "close", onClick: closePopup, className: "close_popup" })),
            React.createElement(Slider, Object.assign({}, settings), filteredArr.length > 1 ? (filteredArr.map((photo) => (React.createElement("div", { key: photo.id },
                React.createElement("img", { key: photo.id, src: photo.img, className: photo.className, style: {
                        filter: popupOpen ? "grayscale(0%)" : "grayscale(100%)",
                    }, onClick: (e) => e.stopPropagation() }))))) : (React.createElement("div", null, "none")))))) : (React.createElement(React.Fragment, null))));
};
export default PopupPhoto;
