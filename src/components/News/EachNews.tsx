import React, { useEffect } from "react";
import { Header } from '../Header';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import { NewsContent } from "./NewsContent";

export const EachNews = () => {

  useEffect(() => {
    if(typeof window != "undefined") {
      window.scrollTo(0, 0);
    }
  });
  
    return (
        <p className='wrap_main_page'>
            <Header />
            <NavBar />
            <NewsContent />
            <Footer />
        </p>
    )
}
