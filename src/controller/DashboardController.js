module.exports = {
  index(req, res) {
    const { randomTwenty } = require("../../public/JokesApi/handler");
    Joke = randomTwenty();

    return res.render("index", { Joke });
  },

  reload(req, res) {
    return res.redirect("/");
  },
};
