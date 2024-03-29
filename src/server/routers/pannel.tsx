import React from "react";
import express, { NextFunction, Request, Response } from "express";
import serialize from "serialize-javascript";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import MainAdmin from "../../components/Admin/MainAdmin";
import { Team } from "../models/team.js";
import { News } from "../models/news.js";
import { Vacancy } from "../models/vacancy.js";
import { Project } from "../models/project.js";
const router = express.Router();

router.get(
  ["/", "/projects", "/news", "/vacancies", "/team"],
  isLogin,
  async (req: Request, res: Response) => {
    let projects = await Project.find();
    let news = await News.find();
    let vacancies = await Vacancy.find();
    let team = await Team.find();
    const congrats = renderToString(
      <StaticRouter>
        <MainAdmin />
      </StaticRouter>
    );
    res.send(
      `<!DOCTYPE html>
        <html>
            <head>
              <title>Панель</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                   <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">
                   <link type="Image/x-icon" href="/ico.ico" rel="icon">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='../bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_PROJECTS__ = ${serialize(
                         projects
                       )}</script>
                       <script>window.__INITIAL_NEWS__ = ${serialize(
                         news
                       )}</script>
                       <script>window.__INITIAL_VACANCIES__ = ${serialize(
                         vacancies
                       )}</script>
                       <script>window.__INITIAL_TEAM__ = ${serialize(
                         team
                       )}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`
    );
  }
);

function isLogin(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

export default router;
