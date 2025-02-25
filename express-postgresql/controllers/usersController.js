const db = require("../db/queries");

const getUsernames = async (req, res) => {
  const usernames = await db.getAllUsernames();
  const { userSearch } = req.query;

  /* console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", ")); */

  if (userSearch) {
    console.log(userSearch);
    const usernamesFound = await db.searchUsername(userSearch);
    const usernamesJoined = usernamesFound
      .map((user) => user.username)
      .join(", ");

    res.send("Usernames Found: " + usernamesJoined);
  } else {
    res.render("index", { title: "Users List", usernames });
  }
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

const deleteUsernames = async (req, res) => {
  await db.deleteAllUsernames();
  res.redirect("/");
};

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernames,
};
