var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import MainPublication from '../../components/Admin/MainPublication';
import { Team } from '../models/team.js';
import { News } from '../models/news.js';
import { Vacancy } from '../models/vacancy.js';
const router = express.Router();
router.get(['/', '/projects', '/news', '/vacancies', '/team'], (req, res) => {
    let cond = true;
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(MainPublication, null)));
    res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='../bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
});
router.post('/team', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var { name, title } = req.body;
        var newParticipant = new Team({
            name: name,
            title: title
        });
        newParticipant = newParticipant.save();
        res.redirect('/publication/team');
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
router.post('/news', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var { title, tag, description } = req.body;
        var newNews = new News({
            title: title,
            description: description,
            tag: tag
        });
        newNews = yield newNews.save();
        res.redirect('/publication/news');
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
router.post('/vacancies', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var { title, tag, description } = req.body;
        var newVacancy = new Vacancy({
            title: title,
            description: description,
            tag: tag
        });
        newVacancy = yield newVacancy.save();
        res.redirect('/publication/vacancies');
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
export default router;
