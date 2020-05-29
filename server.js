require('dotenv').config()

const express = require("express");
const { join } = require("path");
const app = express();

app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", require("express-handlebars")());
app.set("view engine", "handlebars");

app.use(require("./controllers"));

app.listen(process.env.PORT || 3000, () => console.log(`http://localhost:3000`));
