const express = require("express");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const app = express();

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
