import React from "react";
import express, { Request, Response } from "express";
import serialize from "serialize-javascript";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import MainNews from "../../components/News/MainNews";
import { EachNews } from "../../components/News/EachNews";
import { News } from "../models/news";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  let news = await News.find();

  const congrats = renderToString(
    <StaticRouter>
      <MainNews />
    </StaticRouter>
  );
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_NEWS__ = ${serialize(
                         news
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
  let news = await News.findById(req.params.id);

  const congrats = renderToString(
    <StaticRouter>
      <EachNews />
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
                       <script>window.__INITIAL_ONE_NEWS__ = ${serialize(
                         news
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
