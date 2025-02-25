const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const contactRouter = require("./routes/contactRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/contact", contactRouter);
app.use("/", indexRouter);
/* Handling Errors */
app.use((req, res, next) => {
  throw new Error("OH NO!");
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}`);
});
