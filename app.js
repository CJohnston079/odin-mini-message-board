const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index", {});
});

app.get("/new", (req, res) => {
	res.render("new", {});
});

// app.use("/", indexRouter);
// app.use("/new", newRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
