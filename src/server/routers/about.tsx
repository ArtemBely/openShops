import React from "react";
import express, { Request, Response, NextFunction } from "express";
import serialize from "serialize-javascript";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import MainAbout from "../../components/About/MainAbout";
import { EachVacancy } from "../../components/About/EachVacancy";
import { Team } from "../models/team";
import { Vacancy } from "../models/vacancy";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  let team = await Team.find();
  let vacancies = await Vacancy.find();

  const congrats = renderToString(
    <StaticRouter>
      <MainAbout />
    </StaticRouter>
  );
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>О нас</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                   <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">
                   <link type="Image/x-icon" href="/ico.ico" rel="icon">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_TEAM__ = ${serialize(
                         team
                       )}</script>
                       <script>window.__INITIAL_VACANCIES__ = ${serialize(
                         vacancies
                       )}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`
  );
});

router.get("/:id", async (req: Request, res: Response) => {
  let vacancy = await Vacancy.findById(req.params.id);

  const congrats = renderToString(
    <StaticRouter>
      <EachVacancy />
    </StaticRouter>
  );
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='../bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_VACANCY__ = ${serialize(
                         vacancy
                       )}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`
  );
});

export default router;
