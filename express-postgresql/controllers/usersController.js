exports.usersListGet = (req, res) => {
  res.send("usernames will be logged here - wip");
};

exports.usersCreateGet = (req, res) => {
  res.render("createUser", { title: "Form" });
};

exports.usersCreatePost = (req, res) => {
  res.send(`username to be saved: ${req.body.username}`);
};
