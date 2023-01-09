import React, { useEffect } from "react";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Footer } from "../Footer";
import { Request } from "../Request";
import { ContentVacancy } from "./ContentVacancy";

export const EachVacancy = () => {
  useEffect(() => {
    if (typeof window != "undefined") {
      window.scrollTo(0, 0);
    }
  });

  return (
    <p className="wrap_main_page">
      <Header />
      <NavBar />
      <ContentVacancy />
      <Request />
      <Footer />
    </p>
  );
};
