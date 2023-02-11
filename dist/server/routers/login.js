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
import passport from "passport";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Login from "../../components/Admin/Login";
//@ts-ignore
import { User, comparePassword } from "../models/user.js";
const LocalStrategy = require("passport-local").Strategy;
const router = express.Router();
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
/*
//@ts-ignore
router.post('/', (req: Request, res: Response, done) => {
  const { email, password } = req.body;
  req.checkBody("email", "Неверный формат email").isEmail().notEmpty();
  req.checkBody("password", "Минимальная длина пароля - 9 символов").isLength({ min: 9 }).notEmpty();

  var errors = req.validationErrors();
  if(errors) {
  console.log(errors);
  var err = errors.map((er:any) => er.msg);
      const enter = renderToString(
        <StaticRouter>
          <Login />
        </StaticRouter>
      );
      const html =
      `<!DOCTYPE html>
        <html>
            <head>
              <title>Registration</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                   <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
                   <meta name="viewport" content="width=device-width, initial-scale=1">
                  <script src='bundles/bundle.js' defer></script>
                <script>window.__INITIAL_INFO__= ${serialize(err)}</script>
            </head>
            <body>
                 <div id="app">
                     ${enter}
                 </div>
            </body>
        </html>`
        return res.send(html);
    }
//@ts-ignore
    User.findOne({email: email}, function(err:any, user:any) {
        if(err) {return done(err)};
        if(user) {
          const errors = ['Email already exist'];
          const cond = req.isAuthenticated();
          const enter = renderToString(
            <StaticRouter>
              <Login />
            </StaticRouter>
          );
          const html =
          `<!DOCTYPE html>
            <html>
                <head>
                  <title>Email already exist</title>
                       <link rel="stylesheet" type="text/css" href="main.css">
                       <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
                       <meta name="viewport" content="width=device-width, initial-scale=1">
                      <script src='bundles/bundle.js' defer></script>
                   <script>window.__INITIAL_INFO__= ${serialize(errors)}</script>
                </head>
                <body>
                     <div id="app">
                         ${enter}
                     </div>
                </body>
            </html>`
          res.send(html);
          //@ts-ignore
          return done(null, false);
        }

        var newUser = new User({
            email: email,
            password: password,
        });

           createUser(newUser, function(err:any, user:any) {
             if (err) throw err;
             console.log(user);
          });
    });
});
*/
passport.use("local.signin", new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
}, function (req, email, password, done) {
    User.findOne({ email: email }, function (err, user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (err) {
                console.log(err);
                return done(err);
            }
            if (!user) {
                req.flash("errors", "User doesn't exist");
                console.log("errors", "User doesn't exist");
                return done(null, false);
            }
            comparePassword(password, user.password, function (err, isMatch) {
                if (err)
                    throw err;
                if (isMatch) {
                    return done(null, user);
                }
                else {
                    req.flash("errors", "Wrong password");
                    console.log("Неверный пароль");
                    return done(null, false);
                }
            });
        });
    });
}));
router.post("/signin", passport.authenticate("local.signin", {
    successRedirect: "/pannel/projects",
    failureRedirect: "/login",
    passReqToCallback: true,
}));
router.get("/", notLogin, (req, res) => {
    let cond = true;
    const errors = req.flash("errors");
    const congrats = renderToString(React.createElement(StaticRouter, null,
        React.createElement(Login, null)));
    res.send(`<!DOCTYPE html>
        <html>
            <head>
              <title>Вход</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                   <link type="image/x-icon" href="/ico.ico" rel="shortcut icon">
                   <link type="Image/x-icon" href="/ico.ico" rel="icon">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
                       <script>window.__INITIAL_ERRORS__ = ${serialize(errors)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`);
});
router.get("/logout", (req, res, next) => {
    req.logout();
    res.redirect("/login");
});
function notLogin(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect("/pannel/projects");
}
export default router;
