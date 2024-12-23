const db = require("../db/queries");

const getUsernames = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

const createUsernameGet = async (req, res) => {
  await res.render("createUser", { title: "Form" });
};

const createUsernamePost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  /* res.send(`username to be saved: ${req.body.username}`); */
  res.redirect("/");
};

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
};
