import React from 'react';
import express, { Request, Response } from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import MainPublication from '../../components/Admin/MainPublication';
import { Team } from '../models/team.js';
import { News } from '../models/news.js';
import { Vacancy } from '../models/vacancy.js';
const router = express.Router();

router.get(['/', '/projects', '/news', '/vacancies', '/team'], (req: Request, res: Response) => {
  let cond: boolean = true;
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
                       <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
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
    res.redirect('/publication/vacancies');
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
});

export default router;
