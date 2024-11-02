class CustomNotFoundError extends Error {
  construnctor(message) {
    super(message);
    this.statusCode = 404;

    this.name = "NotFoundError";
  }
}

module.exports = CustomNotFoundError;
