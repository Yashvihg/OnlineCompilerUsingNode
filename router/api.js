const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello From Compiler");
});

module.exports = router;
