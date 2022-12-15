import React, { useEffect } from "react";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { AllPhotos } from "./AllPhotos";
import { ProjectDescription } from "./ProjectDescription";

export const EachProject = () => {
  useEffect(() => {
    if (typeof window != "undefined") {
      window.scrollTo(0, 0);
    }
  });

  return (
    <p className="wrap_main_page">
      <Header />
      <NavBar />
      <AllPhotos />
      <ProjectDescription />
      <Footer />
    </p>
  );
};
