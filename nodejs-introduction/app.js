const fs = require("node:fs");

const content = "Some content!";

fs.writeFile("./test.txt", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    // File written succesfully
  }
});
