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
import multer from 'multer';
import path from 'path';
const router = express.Router();
//Set Storage
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() +
            path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetipe === 'image/svg') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
var upload = multer({
    fileFilter: fileFilter,
    limits: { fileSize: 5000000 },
    storage: storage
});
router.get(['/', '/projects', '/news', '/vacancies', '/team'], isLogin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
router.get(['/projects/:id', '/news/:id', '/team/:id', '/vacancies/:id'], isLogin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
router.post('/team', isLogin, upload.single('noExchangeFile'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    var { name, title } = req.body;
    let fileName = req.file != null ? req.file.filename : null;
    console.log((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename, "  is file");
    try {
        var newParticipant = new Team({
            name: name,
            title: title,
            noExchangeFile: fileName
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
router.post('/team/:id', isLogin, upload.single('noExchangeFile'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    var { name, title } = req.body;
    let fileName = req.file != null ? req.file.filename : null;
    console.log((_b = req.file) === null || _b === void 0 ? void 0 : _b.filename, "  is file");
    try {
        let actualTeam = yield Team.findById(req.params.id);
        actualTeam.name = name;
        actualTeam.title = title;
        actualTeam.noExchangeFile = typeof fileName != "undefined" && fileName != null ?
            fileName : actualTeam.noExchangeFile;
        actualTeam = yield actualTeam.save();
        res.redirect('/pannel/team');
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
router.post('/news', isLogin, upload.single('noExchangeFile'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    var { title, tag, description } = req.body;
    let fileName = req.file != null ? req.file.filename : null;
    console.log((_c = req.file) === null || _c === void 0 ? void 0 : _c.filename, "  is file");
    try {
        var newNews = new News({
            title: title,
            description: description,
            tag: tag,
            noExchangeFile: fileName
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
router.post('/news/:id', isLogin, upload.single('noExchangeFile'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    var { title, tag, description } = req.body;
    let fileName = req.file != null ? req.file.filename : null;
    console.log((_d = req.file) === null || _d === void 0 ? void 0 : _d.filename, "  is file");
    try {
        let actualNews = yield News.findById(req.params.id);
        actualNews.title = title;
        actualNews.description = description;
        actualNews.tag = tag;
        actualNews.noExchangeFile = typeof fileName != "undefined" && fileName != null ?
            fileName : actualNews.noExchangeFile;
        actualNews = yield actualNews.save();
        res.redirect('/pannel/news');
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
router.post('/vacancies', isLogin, upload.single('noExchangeFile'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    var { title, tag, description } = req.body;
    let fileName = req.file != null ? req.file.filename : null;
    console.log((_e = req.file) === null || _e === void 0 ? void 0 : _e.filename, "  is file");
    try {
        var newVacancy = new Vacancy({
            title: title,
            description: description,
            tag: tag,
            noExchangeFile: fileName
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
router.post('/vacancies/:id', isLogin, upload.single('noExchangeFile'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _f;
    var { title, tag, description } = req.body;
    let fileName = req.file != null ? req.file.filename : null;
    console.log((_f = req.file) === null || _f === void 0 ? void 0 : _f.filename, "  is file");
    try {
        let actualVacancy = yield Vacancy.findById(req.params.id);
        actualVacancy.title = title;
        actualVacancy.description = description;
        actualVacancy.tag = tag;
        actualVacancy.noExchangeFile = typeof fileName != "undefined" && fileName != null ?
            fileName : actualVacancy.noExchangeFile;
        actualVacancy = yield actualVacancy.save();
        res.redirect('/pannel/vacancies');
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
router.post('/projects', isLogin, upload.fields([{ name: 'noExchangeFile' }, { name: 'arrayFiles' }]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let arrayOfImages = [];
    let singleFile = '';
    var { title, category, secondString, tag, mainName, mainDescription, technicalTitle, technicalDescription, descriptionTitle, descriptionTxt } = req.body;
    let fileName = req.files != null ? req.files : null;
    if (typeof fileName.noExchangeFile != "undefined") {
        singleFile = fileName.noExchangeFile[0].filename;
    }
    if (typeof fileName.arrayFiles != "undefined") {
        fileName.arrayFiles.forEach((item) => {
            arrayOfImages.push(item.filename);
            console.log(arrayOfImages, "arrrr");
        });
    }
    console.log(singleFile, fileName.noExchangeFile, ' string');
    try {
        console.log(req.body);
        var newProject = new Project({
            title: title,
            category: category,
            secondString: secondString,
            tag: tag,
            mainArray: [typeof mainName == 'string' ? [mainName] : mainName, typeof mainDescription == 'string' ? [mainDescription] : mainDescription],
            technicalArray: [typeof technicalTitle == 'string' ? [technicalTitle] : technicalTitle, typeof technicalDescription == 'string' ? [technicalDescription] : technicalDescription],
            descriptionArray: [typeof descriptionTitle == 'string' ? [descriptionTitle] : descriptionTitle, typeof descriptionTxt == 'string' ? [descriptionTxt] : descriptionTxt],
            noExchangeFile: singleFile,
            arrayOfFiles: arrayOfImages
        });
        newProject = yield newProject.save();
        console.log(newProject, " obj");
        res.redirect(`/pannel/projects`);
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
router.post('/projects/:id', isLogin, upload.fields([{ name: 'noExchangeFile' }, { name: 'arrayFiles' }]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let arrayOfImages = [];
    let singleFile = '';
    var { title, category, secondString, tag, mainName, mainDescription, technicalTitle, technicalDescription, descriptionTitle, descriptionTxt } = req.body;
    let fileName = req.files != null ? req.files : null;
    if (typeof fileName.noExchangeFile != "undefined") {
        singleFile = fileName.noExchangeFile[0].filename;
    }
    console.log(req.files, ' req files');
    if (typeof fileName.arrayFiles != "undefined") {
        fileName.arrayFiles.forEach((item) => {
            arrayOfImages.push(item.filename);
            console.log(arrayOfImages, "arrrr");
        });
    }
    try {
        let actualProject = yield Project.findById(req.params.id);
        actualProject.title = title;
        actualProject.category = category;
        actualProject.secondString = secondString;
        actualProject.tag = tag;
        if (typeof mainName != 'string')
            actualProject.mainArray = [mainName, mainDescription];
        else
            actualProject.mainArray = [[mainName], [mainDescription]];
        if (typeof technicalTitle != 'string')
            actualProject.technicalArray = [technicalTitle, technicalDescription];
        else
            actualProject.technicalArray = [[technicalTitle], [technicalDescription]];
        if (typeof descriptionTitle != 'string')
            actualProject.descriptionArray = [descriptionTitle, descriptionTxt];
        else
            actualProject.descriptionArray = [[descriptionTitle], [descriptionTxt]];
        actualProject.noExchangeFile = typeof singleFile != "undefined" && singleFile != null && singleFile.length > 1 ?
            singleFile : actualProject.noExchangeFile;
        actualProject.arrayOfFiles = typeof actualProject.arrayOfFiles != "undefined" && actualProject.arrayOfFiles != null ?
            [...actualProject.arrayOfFiles, ...arrayOfImages] : arrayOfImages;
        actualProject = yield actualProject.save();
        console.log(req.body, " body");
        res.redirect(`/publication/projects/${req.params.id}`);
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
}));
//delete functions
router.get('/team/delete/:id', isLogin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Team.deleteOne({ _id: req.params.id });
    res.redirect('/pannel/team');
}));
router.get('/vacancies/delete/:id', isLogin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Vacancy.deleteOne({ _id: req.params.id });
    res.redirect('/pannel/vacancies');
}));
router.get('/projects/delete/:id', isLogin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Project.deleteOne({ _id: req.params.id });
    res.redirect('/pannel/projects');
}));
//delete separate image from project
router.get('/projects/delete/:id/:pathParam1', isLogin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let project = yield Project.findOne({ _id: req.params.id });
    let index = project === null || project === void 0 ? void 0 : project.arrayOfFiles.findIndex((item) => item == req.params.pathParam1);
    try {
        if (typeof project != "undefined" && project != null) {
            project.arrayOfFiles.splice(index, 1);
            project = yield project.save();
        }
    }
    catch (err) {
        if (err)
            throw err;
        console.log(err);
    }
    res.redirect('/pannel/projects');
}));
router.get('/news/delete/:id', isLogin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield News.deleteOne({ _id: req.params.id });
    res.redirect('/pannel/news');
}));
function isLogin(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}
export default router;
