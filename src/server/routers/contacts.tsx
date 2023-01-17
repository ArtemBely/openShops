import React from "react";
import express, { Request, Response, NextFunction } from "express";
import serialize from "serialize-javascript";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import MainContacts from "../../components/Contacts/MainContacts";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  let cond: boolean = true;
  const congrats = renderToString(
    <StaticRouter>
      <MainContacts />
    </StaticRouter>
  );
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Контакты</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                    <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">
                    <link type="Image/x-icon" href="/ico.ico" rel="icon">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(
                         cond
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
