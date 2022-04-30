const Token = require('./models/token');

module.exports = {
  async get(req, res) {
    const { tokenId } = req.params;

    const data = await Token.findOne({ tokenId });

    res.json({ data });
  },

  async list(req, res) {
    const data = await Token.find();

    res.json({ data });
  },

  async update(req, res) {
    const { tokenId } = req.params;
    const { name, description } = req.body;

    const data = await Token.findOneAndUpdate(
      { tokenId },
      { name, description },
      { new: true },
    );

    res.json({ data });
  },
};
