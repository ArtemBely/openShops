import React, { useState, useEffect, FC } from "react";
import { INews } from "../server/models/news";
import { IProject } from "../server/models/project";

interface INavBarProps {
  currentNews?: INews;
  currentProject?: IProject;
}

export const NavBar: FC<INavBarProps> = ({ currentNews, currentProject }) => {
  const [currentPath, setCurrentPath] = useState("");
  const [navPath, setNavPath] = useState("");

  useEffect(() => {
    console.log("currentNews: ", currentNews);
  }, [currentNews]);

  useEffect(() => {
    setNavPath(
      currentPath.split("→")[0].trim() === "О нас"
        ? "/about"
        : currentPath.split("→")[0].trim() === "Проекты"
        ? "/projects"
        : currentPath.split("→")[0].trim() === "Новости"
        ? "/news"
        : currentPath.split("→")[0].trim() === "Контакты"
        ? "/contacts"
        : ""
    );
  }, [currentPath]);

  useEffect(() => {
    if (typeof window != "undefined") {
      setCurrentPath(
        window.location.pathname == "/contacts"
          ? "Контакты"
          : window.location.pathname == "/about"
          ? "О нас"
          : window.location.pathname ==
            "/about/" + window.location.pathname.split("/").pop()
          ? `О нас → ${currentNews?.title}`
          : window.location.pathname == "/projects"
          ? "Проекты"
          : window.location.pathname ==
            "/projects/" + window.location.pathname.split("/").pop()
          ? `Проекты → ${currentProject && currentProject.title}`
          : window.location.pathname == "/news"
          ? "Новости"
          : window.location.pathname ==
            "/news/" + window.location.pathname.split("/").pop()
          ? `Новости → ${currentNews && currentNews.title}`
          : ""
      );
    }
  }, [currentPath]);

  return (
    <div className="wrap_navbar">
      <div className="navbar">
        <p className="navbar_style">
          <a href="/">Главная</a> →{" "}
          <a href={navPath}>{currentPath.split("→")[0].trim()}</a>
          {currentPath.split("→")[1] && (
            <span>→ {currentPath.split("→")[1].trim()}</span>
          )}
        </p>
      </div>
    </div>
  );
};
