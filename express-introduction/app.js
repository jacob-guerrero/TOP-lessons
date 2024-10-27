const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };
  const fileName = "index.html";

  res.sendFile(fileName, options, (err) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("Sent: ", fileName);
    }
  });
});

app.get("/about(.html)?", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };
  const fileName = "about.html";

  res.sendFile(fileName, options, (err) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("Sent: ", fileName);
    }
  });
});

app.get("/contact-me(.html)?", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };
  const fileName = "contact-me.html";

  res.sendFile(fileName, options, (err) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("Sent: ", fileName);
    }
  });
});

app.get("/*", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };
  const fileName = "404.html";

  res.sendFile(fileName, options, (err) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("Sent: ", fileName);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}`);
});
