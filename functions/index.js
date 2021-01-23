/**
 * Firebase Function用ルートファイル
 * **/
const functions = require("firebase-functions");
const express = require("express");
const basicAuth = require("basic-auth-connect");
const path = require("path");

const app = express();

app.use(
  basicAuth(function(user, password) {
    // TODO: CUSTOM: appをいい感じの名前に
    return (
      user === functions.config().app.basicuser &&
      password === functions.config().app.basicpassword
    );
  })
);

app.use(express.static(path.join(__dirname, "build")));

app.all("/*", (req, res, _) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// TODO: CUSTOM: appをいい感じの名前に
exports.app = functions.https.onRequest(app);

