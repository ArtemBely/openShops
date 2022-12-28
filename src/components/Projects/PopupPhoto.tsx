import React, { FC, useEffect, useState } from "react";
import Slider from "react-slick";

 import { allPhotosArr } from "./allPhotosArr";

 interface IPopupPhoto {
   popupOpen: boolean;
   detailedImgId: number;
   setPopupOpen: (arg0: boolean) => void;
   closePopup: () => void;
 }

 function SampleNextArrow(props: any) {
   const { className, style, onClick } = props;
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
   const { className, style, onClick } = props;
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
   detailedImgId,
   setPopupOpen,
   closePopup,
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
     const sliceArr = allPhotosArr.slice(detailedImgId - 1);
     const oldArr = allPhotosArr.slice(0, detailedImgId - 1);
     setFilteredArr([...sliceArr, ...oldArr]);
   }, [detailedImgId]);

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
                 filteredArr.map((photo: any) => (
                   <div key={photo.id}>
                     <img
                       key={photo.id}
                       src={photo.img}
                       className={photo.className}
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
