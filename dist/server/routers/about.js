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
import MainAbout from "../../components/About/MainAbout";
import { EachVacancy } from "../../components/About/EachVacancy";
import { Team } from "../models/team";
import { Vacancy } from "../models/vacancy";
const router = express.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let team = yield Team.find();
    let vacancies = yield Vacancy.find();
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(MainAbout, null)));
    res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>О нас</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                   <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">
                   <link type="Image/x-icon" href="/ico.ico" rel="icon">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_TEAM__ = ${serialize(team)}</script>
                       <script>window.__INITIAL_VACANCIES__ = ${serialize(vacancies)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let vacancy = yield Vacancy.findById(req.params.id);
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(EachVacancy, null)));
    res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='../bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_VACANCY__ = ${serialize(vacancy)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
}));
export default router;
