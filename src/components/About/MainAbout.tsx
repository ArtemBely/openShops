import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";
import { Request } from "../Request";
import { AboutScreen } from "./AboutScreen";
import { BelowScreen } from "./BelowScreen";
import { Culture } from "./Culture";
import { ChooseUs } from "./ChooseUs";
import { Team } from "./Team";
import { Vacancies } from "./Vacancies";

function MainAbout() {
  return (
    <p className="wrap_main_page">
      <Header />
      <NavBar />
      <AboutScreen />
      <BelowScreen />
      <Culture />
      <ChooseUs />
      <Team />
      <Vacancies />
      <Request />
      <Footer />
    </p>
  );
}

export default MainAbout;
