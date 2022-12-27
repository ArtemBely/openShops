import React from 'react';
import express, { NextFunction, Request, Response } from 'express';
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
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() +
    path.extname(file.originalname));
  }
});

const fileFilter = (req:Request, file:any, cb:any) => {
  if( file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetipe === 'image/svg') {
    cb(null, true);
  }
  else  { cb(null, false); }
};

var upload = multer({
  fileFilter: fileFilter,
  limits:{ fileSize: 5000000 },
  storage: storage
});

router.get(['/', '/projects', '/news', '/vacancies', '/team'], isLogin, async(req: Request, res: Response) => {
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

router.get(['/projects/:id', '/news/:id', '/team/:id', '/vacancies/:id'], isLogin, async(req: Request, res: Response) => {
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

router.post('/team', isLogin, upload.single('noExchangeFile'), async(req: Request, res: Response) => {
  var { name, title } = req.body;
  let fileName = req.file != null ? req.file.filename : null;
  console.log(req.file?.filename, "  is file");
  try{
    var newParticipant:any = new Team({
        name: name,
        title: title,
        noExchangeFile: fileName
    });
    newParticipant = await newParticipant.save();
    res.redirect('/pannel/team');
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
});
router.post('/team/:id', isLogin, upload.single('noExchangeFile'), async(req: Request, res: Response) => {
  var { name, title } = req.body;
  let fileName = req.file != null ? req.file.filename : null;
  console.log(req.file?.filename, "  is file");
  try{
    let actualTeam:object | any = await Team.findById(req.params.id);
    actualTeam.name = name;
    actualTeam.title = title;
    actualTeam.noExchangeFile = typeof fileName != "undefined" && fileName != null ?
    fileName : actualTeam.noExchangeFile;
    actualTeam = await actualTeam.save();
    res.redirect('/pannel/team');
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
});

router.post('/news', isLogin, upload.single('noExchangeFile'), async(req: Request, res: Response) => {
  var { title, tag, description } = req.body;
  let fileName = req.file != null ? req.file.filename : null;
  console.log(req.file?.filename, "  is file");
  try{
    var newNews:any = new News({
        title: title,
        description: description,
        tag: tag,
        noExchangeFile: fileName
    });
    newNews = await newNews.save();
    console.log(newNews, " obj");
    res.redirect('/pannel/news');
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
});
router.post('/news/:id', isLogin, upload.single('noExchangeFile'), async(req: Request, res: Response) => {
  var { title, tag, description } = req.body;
  let fileName = req.file != null ? req.file.filename : null;
  console.log(req.file?.filename, "  is file");
  try{
    let actualNews:object | any = await News.findById(req.params.id);
    actualNews.title = title;
    actualNews.description = description;
    actualNews.tag = tag;
    actualNews.noExchangeFile = typeof fileName != "undefined" && fileName != null ?
    fileName : actualNews.noExchangeFile;
    actualNews = await actualNews.save();
    res.redirect('/pannel/news');
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
});

router.post('/vacancies', isLogin, upload.single('noExchangeFile'), async(req: Request, res: Response) => {
  var { title, tag, description } = req.body;
  let fileName = req.file != null ? req.file.filename : null;
  console.log(req.file?.filename, "  is file");
  try{
    var newVacancy:any = new Vacancy({
        title: title,
        description: description,
        tag: tag,
        noExchangeFile: fileName
    });
    newVacancy = await newVacancy.save();
    console.log(newVacancy, " obj");
    res.redirect('/pannel/vacancies');
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
});
router.post('/vacancies/:id', isLogin, upload.single('noExchangeFile'), async(req: Request, res: Response) => {
  var { title, tag, description } = req.body;
  let fileName = req.file != null ? req.file.filename : null;
  console.log(req.file?.filename, "  is file");
  try{
    let actualVacancy:object | any = await Vacancy.findById(req.params.id);
    actualVacancy.title = title;
    actualVacancy.description = description;
    actualVacancy.tag = tag;
    actualVacancy.noExchangeFile = typeof fileName != "undefined" && fileName != null ?
    fileName : actualVacancy.noExchangeFile;
    actualVacancy = await actualVacancy.save();
    res.redirect('/pannel/vacancies');
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
});

router.post('/projects', isLogin, upload.fields([{name: 'noExchangeFile'}, {name: 'arrayFiles'}]), async(req: Request, res: Response) => {
  let arrayOfImages:Array<string> = [];
  let singleFile:string = '';
  var { title, category, secondString, tag, mainName,
     mainDescription, technicalTitle, technicalDescription,
     descriptionTitle, descriptionTxt } = req.body;

  let fileName:object | any = req.files !=null ? req.files : null;
  if(typeof fileName.noExchangeFile != "undefined") { singleFile = fileName.noExchangeFile[0].filename; }

  if(typeof fileName.arrayFiles != "undefined") {
    fileName.arrayFiles.forEach((item:any) => {
      arrayOfImages.push(item.filename);
      console.log(arrayOfImages, "arrrr");
    });
  }
  console.log(singleFile, fileName.noExchangeFile, ' string')
  try{
    console.log(req.body);
    var newProject:any = new Project({
        title: title,
        category: category,
        secondString: secondString,
        tag: tag,
        mainArray: [typeof mainName == 'string' ? [mainName] : mainName, typeof mainDescription == 'string' ? [mainDescription] : mainDescription],
        technicalArray: [typeof technicalTitle == 'string' ? [technicalTitle] : technicalTitle, typeof technicalDescription == 'string' ? [technicalDescription] : technicalDescription],
        descriptionArray: [typeof descriptionTitle == 'string' ? [descriptionTitle] : descriptionTitle, typeof descriptionTxt== 'string' ? [descriptionTxt] : descriptionTxt],
        noExchangeFile: singleFile,
        arrayOfFiles: arrayOfImages
    });
    newProject = await newProject.save();
    console.log(newProject, " obj");
    res.redirect(`/pannel/projects`);
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
});
router.post('/projects/:id', isLogin, upload.fields([{name: 'noExchangeFile'}, {name: 'arrayFiles'}]), async(req: Request, res: Response) => {
  let arrayOfImages:Array<string> = [];
  let singleFile:string = '';
  var { title, category, secondString, tag, mainName, mainDescription,
  technicalTitle, technicalDescription, descriptionTitle, descriptionTxt  } = req.body;

  let fileName:object | any = req.files !=null ? req.files : null;
  if(typeof fileName.noExchangeFile != "undefined") { singleFile = fileName.noExchangeFile[0].filename; }

  console.log(req.files, ' req files');
  if(typeof fileName.arrayFiles != "undefined") {
    fileName.arrayFiles.forEach((item:any) => {
      arrayOfImages.push(item.filename);
      console.log(arrayOfImages, "arrrr");
    });
  }

  try{
    let actualProject:object | any = await Project.findById(req.params.id);
    actualProject.title = title;
    actualProject.category = category;
    actualProject.secondString = secondString;
    actualProject.tag = tag;
    if(typeof mainName != 'string') actualProject.mainArray = [mainName, mainDescription];
      else actualProject.mainArray = [[mainName], [mainDescription]];
    if(typeof technicalTitle != 'string') actualProject.technicalArray = [technicalTitle, technicalDescription];
      else actualProject.technicalArray = [[technicalTitle], [technicalDescription]];
    if(typeof descriptionTitle != 'string') actualProject.descriptionArray = [descriptionTitle, descriptionTxt];
      else actualProject.descriptionArray = [[descriptionTitle], [descriptionTxt]];
    actualProject.noExchangeFile = typeof singleFile != "undefined" && singleFile != null && singleFile.length > 1 ?
    singleFile : actualProject.noExchangeFile;
    actualProject.arrayOfFiles = typeof actualProject.arrayOfFiles != "undefined" && actualProject.arrayOfFiles != null ?
    [...actualProject.arrayOfFiles, ...arrayOfImages] : arrayOfImages;
    actualProject = await actualProject.save();
    console.log(req.body, " body")
    res.redirect(`/publication/projects/${req.params.id}`);
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
});

//delete functions
router.get('/team/delete/:id', isLogin, async(req: Request, res: Response) => {
  await Team.deleteOne({ _id: req.params.id });
  res.redirect('/pannel/team');
});
router.get('/vacancies/delete/:id', isLogin, async(req: Request, res: Response) => {
  await Vacancy.deleteOne({ _id: req.params.id });
  res.redirect('/pannel/vacancies');
});
router.get('/projects/delete/:id', isLogin, async(req: Request, res: Response) => {
  await Project.deleteOne({ _id: req.params.id });
  res.redirect('/pannel/projects');
});
//delete separate image from project
router.get('/projects/delete/:id/:pathParam1', isLogin, async(req: Request, res: Response) => {
  let project = await Project.findOne({ _id: req.params.id });
  let index:number | any = project?.arrayOfFiles.findIndex((item:any) => item == req.params.pathParam1);
  try {
    if(typeof project != "undefined" && project != null) {
        project.arrayOfFiles.splice(index, 1);
        project = await project.save();
    }
  }
  catch(err) {
        if (err) throw err;
        console.log(err);
  }
  res.redirect('/pannel/projects');
});
router.get('/news/delete/:id', isLogin, async(req: Request, res: Response) => {
  await News.deleteOne({ _id: req.params.id });
  res.redirect('/pannel/news');
});

function isLogin(req:Request, res:Response, next:NextFunction) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

export default router;
