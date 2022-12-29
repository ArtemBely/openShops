var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from "react";
import express from "express";
import serialize from "serialize-javascript";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import MainProjects from "../../components/Projects/MainProjects";
import { EachProject } from "../../components/Projects/EachProject";
import { Project } from "../models/project";
const router = express.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let projects = yield Project.find();
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(MainProjects, null)));
    res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_PROJECTS__ = ${serialize(projects)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let project = yield Project.findById(req.params.id);
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(EachProject, null)));
    res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='../bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_PROJECT__ = ${serialize(project)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
}));
export default router;
