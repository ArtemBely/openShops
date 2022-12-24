import React from 'react';
import express, { Request, Response } from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import MainPublication from '../../components/Admin/MainPublication';
import { Team } from '../models/team.js';
import { News } from '../models/news.js';
import { Vacancy } from '../models/vacancy.js';
import { Project } from '../models/project.js';
const router = express.Router();

router.get(['/', '/projects', '/news', '/vacancies', '/team'], async(req: Request, res: Response) => {
  let projects = await Project.find();
  let news = await News.find();
  let vacancies = await Vacancy.find();
  let team = await Team.find();
  const congrats = renderToString(
    <StaticRouter>
       <MainPublication />
    </StaticRouter>
  )
  res.send(
    `<!DOCTYPE html>
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
        </html>`
    );
});

router.get(['/projects/:id', '/news/:id', '/team/:id', '/vacancies/:id'], async(req: Request, res: Response) => {
  let defineLocation:string = req.originalUrl.split('/')[2];
  let editObject:object | any;
  let projects = await Project.find();
  let news = await News.find();
  let vacancies = await Vacancy.find();
  let team = await Team.find();
  defineLocation == 'projects' ? editObject = await Project.findById(req.params.id) :
  defineLocation == 'vacancies' ? editObject = await Vacancy.findById(req.params.id) :
  defineLocation == 'news' ? editObject = await News.findById(req.params.id) :
  editObject = await Team.findById(req.params.id);
  const congrats = renderToString(
    <StaticRouter>
       <MainPublication />
    </StaticRouter>
  )
  res.send(
    `<!DOCTYPE html>
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
        </html>`
    );
});

router.post('/team', async(req: Request, res: Response) => {
  try{
    var { name, title } = req.body;
    var newParticipant:any = new Team({
        name: name,
        title: title
    });
    newParticipant = newParticipant.save();
    console.log(newParticipant, " obj");
    res.redirect('/publication/team');
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
});

router.post('/news', async(req: Request, res: Response) => {
  try{
    var { title, tag, description } = req.body;
    var newNews:any = new News({
        title: title,
        description: description,
        tag: tag
    });
    newNews = await newNews.save();
    console.log(newNews, " obj");
    res.redirect('/publication/news');
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
});

router.post('/vacancies', async(req: Request, res: Response) => {
  try{
    var { title, tag, description } = req.body;
    var newVacancy:any = new Vacancy({
        title: title,
        description: description,
        tag: tag
    });
    newVacancy = await newVacancy.save();
    console.log(newVacancy, " obj");
    res.redirect('/publication/vacancies');
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
});

router.post('/projects', async(req: Request, res: Response) => {
  try{
    console.log(req.body);
    var { title, category, secondString, tag, mainName,
       mainDescription, technicalTitle, technicalDescription,
       descriptionTitle, descriptionTxt } = req.body;
    var newProject:any = new Project({
        title: title,
        category: category,
        secondString: secondString,
        tag: tag,
        mainArray: [mainName, mainDescription],
        technicalArray: [technicalTitle, technicalDescription],
        descriptionArray: [descriptionTitle, descriptionTxt]
    });
    newProject = await newProject.save();
    console.log(newProject, " obj");
    res.redirect('/publication/projects');
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
});

export default router;
