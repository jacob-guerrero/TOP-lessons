const fs = require("node:fs");

const content = "More content!";

fs.appendFile("./test.txt", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    // Done!
  }
});
