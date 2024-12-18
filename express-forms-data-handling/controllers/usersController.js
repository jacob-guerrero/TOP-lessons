const usersStorage = require("../storages/usersStorage");

/* Validation */
const { body, validationResult } = require("express-validator");
const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";
const emailErr = "must be a valid e-mail address.";
const ageErr = "must only contain numbers between 18 and 120.";
const bioErr = "must only contain letters or numbers.";
const lengthBioErr = "must be between 1 and 200 characters.";

exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
};

exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};

/* exports.usersCreatePost = (req, res) => {
  const { firstName, lastName } = req.body;
  usersStorage.addUser({ firstName, lastName });
  res.redirect("/");
}; */

/* Validation */
const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
  body("email").trim().isEmail().withMessage(`Email ${emailErr}`),
  body("age")
    .optional({ checkFalsy: true })
    .trim()
    .isInt({ gt: 17, lt: 121 })
    .withMessage(`Age ${ageErr}`),
  body("bio")
    .optional({ checkFalsy: true })
    .trim()
    .isAlphanumeric()
    .withMessage(`Bio ${bioErr}`)
    .isLength({ min: 1, max: 200 })
    .withMessage(`Bio ${lengthBioErr}`),
];

exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create user",
        errors: errors.array(),
      });
    }

    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.addUser({ firstName, lastName, email, age, bio });
    res.redirect("/");
  },
];

exports.usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update user",
    user: user,
  });
};

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }

    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.updateUser(req.params.id, {
      firstName,
      lastName,
      email,
      age,
      bio,
    });
    res.redirect("/");
  },
];

exports.userDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
};

exports.userSearch = (req, res) => {
  res.render("searchUser", {
    title: "Search user",
  });
};
