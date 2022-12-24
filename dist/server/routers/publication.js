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
import { Project } from '../models/project.js';
const router = express.Router();
router.get(['/', '/projects', '/news', '/vacancies', '/team'], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let projects = yield Project.find();
    let news = yield News.find();
    let vacancies = yield Vacancy.find();
    let team = yield Team.find();
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(MainPublication, null)));
    res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='../bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_PROJECTS__ = ${serialize(projects)}</script>
                       <script>window.__INITIAL_NEWS__ = ${serialize(news)}</script>
                       <script>window.__INITIAL_VACANCIES__ = ${serialize(vacancies)}</script>
                       <script>window.__INITIAL_TEAM__ = ${serialize(team)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
}));
router.get(['/projects/:id', '/news/:id', '/team/:id', '/vacancies/:id'], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let defineLocation = req.originalUrl.split('/')[2];
    let editObject;
    let projects = yield Project.find();
    let news = yield News.find();
    let vacancies = yield Vacancy.find();
    let team = yield Team.find();
    defineLocation == 'projects' ? editObject = yield Project.findById(req.params.id) :
        defineLocation == 'vacancies' ? editObject = yield Vacancy.findById(req.params.id) :
            defineLocation == 'news' ? editObject = yield News.findById(req.params.id) :
                editObject = yield Team.findById(req.params.id);
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(MainPublication, null)));
    res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="../../main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='../../bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_INFO__ = ${serialize(editObject)}</script>
                       <script>window.__INITIAL_PROJECTS__ = ${serialize(projects)}</script>
                       <script>window.__INITIAL_NEWS__ = ${serialize(news)}</script>
                       <script>window.__INITIAL_VACANCIES__ = ${serialize(vacancies)}</script>
                       <script>window.__INITIAL_TEAM__ = ${serialize(team)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
}));
router.post('/team', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var { name, title } = req.body;
        var newParticipant = new Team({
            name: name,
            title: title
        });
        newParticipant = yield newParticipant.save();
        res.redirect('/pannel/team');
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
router.post('/team/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var { name, title } = req.body;
        let actualTeam = yield Team.findById(req.params.id);
        actualTeam.name = name;
        actualTeam.title = title;
        actualTeam = yield actualTeam.save();
        res.redirect('/pannel/team');
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
        console.log(newNews, " obj");
        res.redirect('/pannel/news');
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
router.post('/news/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var { title, tag, description } = req.body;
        let actualNews = yield News.findById(req.params.id);
        actualNews.title = title;
        actualNews.description = description;
        actualNews.tag = tag;
        actualNews = yield actualNews.save();
        res.redirect('/pannel/news');
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
        console.log(newVacancy, " obj");
        res.redirect('/pannel/vacancies');
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
router.post('/vacancies/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var { title, tag, description } = req.body;
        let actualVacancy = yield Vacancy.findById(req.params.id);
        actualVacancy.title = title;
        actualVacancy.description = description;
        actualVacancy.tag = tag;
        actualVacancy = yield actualVacancy.save();
        res.redirect('/pannel/vacancies');
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
router.post('/projects', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        var { title, category, secondString, tag, mainName, mainDescription, technicalTitle, technicalDescription, descriptionTitle, descriptionTxt } = req.body;
        var newProject = new Project({
            title: title,
            category: category,
            secondString: secondString,
            tag: tag,
            mainArray: [mainName, mainDescription],
            technicalArray: [technicalTitle, technicalDescription],
            descriptionArray: [descriptionTitle, descriptionTxt]
        });
        newProject = yield newProject.save();
        console.log(newProject, " obj");
        res.redirect('/publication/projects');
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
router.post('/projects/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let actualProject = yield Project.findById(req.params.id);
        let i;
        for (i = 0; i < Object.keys(req.body).length; i++) {
            actualProject[Object.keys(req.body)[i]] = Object.values(req.body)[i];
        }
        actualProject = yield actualProject.save();
        res.redirect('/pannel/projects');
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
//delete functions
router.get('/team/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Team.deleteOne({ _id: req.params.id });
    res.redirect('/pannel/team');
}));
router.get('/vacancies/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Vacancy.deleteOne({ _id: req.params.id });
    res.redirect('/pannel/vacancies');
}));
router.get('/projects/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Project.deleteOne({ _id: req.params.id });
    res.redirect('/pannel/projects');
}));
router.get('/news/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield News.deleteOne({ _id: req.params.id });
    res.redirect('/pannel/news');
}));
export default router;
