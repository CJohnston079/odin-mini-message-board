require("dotenv").config();

const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/new", newRouter);

app.use((req, res, next) => {
	res.render("pageNotFound", {});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listening on port ${port}`));
