const games = [];

exports.gamesGet = async (req, res) => {
  res.json(games);
};

exports.gamesPost = async (req, res) => {
  const game = req.body;

  games.push(game);

  res.status(201).json(game);
};
