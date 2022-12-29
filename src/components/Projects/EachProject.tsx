import React, { useEffect, useState } from "react";

import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { AllPhotos } from "./AllPhotos";
import { ProjectDescription } from "./ProjectDescription";
import { IProject } from "../../server/models/project";

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
      <AllPhotos currentProject={currentProject} />
      <ProjectDescription currentProject={currentProject} />
      <Footer />
    </p>
  );
};
