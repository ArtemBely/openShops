import React, { FC, useEffect, useState } from "react";
import Slider from "react-slick";

interface IPopupPhoto {
  popupOpen: boolean;
  detailedImgName: string;
  setPopupOpen: (arg0: boolean) => void;
  closePopup: () => void;
  photos: string[];
}

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <img
      className="slick-arrow slick-prev"
      src="../../../images/projects/left.png"
      alt="right arrow"
      onClick={(e) => {
        onClick();
        e.stopPropagation();
      }}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <img
      className="slick-arrow slick-next"
      src="../../../images/projects/right.png"
      alt="left arrow"
      onClick={(e) => {
        onClick();
        e.stopPropagation();
      }}
    />
  );
}

const PopupPhoto: FC<IPopupPhoto> = ({
  popupOpen,
  detailedImgName,
  setPopupOpen,
  closePopup,
  photos,
}) => {
  const [filteredArr, setFilteredArr] = useState<any[]>([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
  };

  useEffect(() => {
    const index = photos.findIndex((item) => item === detailedImgName);
    const sliceArr = photos.slice(index);
    const oldArr = photos.slice(0, index);
    setFilteredArr([...sliceArr, ...oldArr]);
    console.log([...sliceArr, ...oldArr]);
  }, [detailedImgName]);

  return (
    <>
      {popupOpen ? (
        <div className="popup_container">
          <div className="popup_photo">
            <div className="close_wrapper">
              <img
                src="../../../images/projects/close.png"
                alt="close"
                onClick={closePopup}
                className="close_popup"
              />
            </div>
            <Slider {...settings}>
              {filteredArr.length > 1 ? (
                filteredArr.map((photo: any, index) => (
                  <div key={photo.id}>
                    <img
                      key={photo}
                      src={`../../../uploads/${photo}`}
                      className={
                        index === 0
                          ? "each_photo_project first_photo_project"
                          : "each_photo_project"
                      }
                      style={{
                        filter: popupOpen ? "grayscale(0%)" : "grayscale(100%)",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                ))
              ) : (
                <div>none</div>
              )}
            </Slider>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PopupPhoto;
