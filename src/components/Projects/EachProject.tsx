import React, { useEffect, useState } from "react";

import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { AllPhotos } from "./AllPhotos";
import { ProjectDescription } from "./ProjectDescription";
import { IProject } from "../../server/models/project";
import PopupPhoto from "./PopupPhoto";

let project: IProject;
declare global {
  interface Window {
    __INITIAL_PROJECT__: IProject;
  }
}

export const EachProject = () => {
  if (typeof window != "undefined") {
    project = window.__INITIAL_PROJECT__;
  }

  const [currentProject, setCurrentProject] = useState<IProject>(
    {} as IProject
  );

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

  useEffect(() => {
    if (typeof window != "undefined") {
      if (window.location.pathname.split("/").pop() == project._id) {
        setCurrentProject(project);
      }
    }
  });

  useEffect(() => {
    if (typeof window != "undefined") {
      window.scrollTo(0, 0);
    }
  });

  return (
    <p className="wrap_main_page">
      <Header />
      <NavBar />
      <p className="txt_about1Title txt_about1Title2">{currentProject.title}</p>
      <div className="wrap_main_page-project">
        <AllPhotos
          currentProject={currentProject}
          closePopup={closePopup}
          clickPopup={clickPopup}
          popupOpen={popupOpen}
        />
        <ProjectDescription currentProject={currentProject} />
      </div>
      <PopupPhoto
        photos={currentProject.arrayOfFiles ? currentProject.arrayOfFiles : []}
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        detailedImgName={detailedImgName}
        closePopup={closePopup}
      />
      <Footer />
    </p>
  );
};
