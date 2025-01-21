const greetings = (req, res) => {
  return res.json({
    success: true,
    message: "Hello, Manav Shah",
    error: {},
    data: {},
  });
};

module.exports = { greetings };
