import React from "react";
import express, { Request, Response } from "express";
import serialize from "serialize-javascript";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import MainProjects from "../../components/Projects/MainProjects";
import { EachProject } from "../../components/Projects/EachProject";
import { Project } from "../models/project";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  let projects = await Project.find();

  const congrats = renderToString(
    <StaticRouter>
      <MainProjects />
    </StaticRouter>
  );
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Проекты</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                   <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">
                   <link type="Image/x-icon" href="/ico.ico" rel="icon">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_PROJECTS__ = ${serialize(
                         projects
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
  let project = await Project.findById(req.params.id);

  const congrats = renderToString(
    <StaticRouter>
      <EachProject />
    </StaticRouter>
  );
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Проекты</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                   <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">
                   <link type="Image/x-icon" href="/ico.ico" rel="icon">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='../bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_PROJECT__ = ${serialize(
                         project
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
