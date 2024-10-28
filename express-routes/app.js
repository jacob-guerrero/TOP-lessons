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

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}`);
});
