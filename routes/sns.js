const express = require("express");
const router = express.Router();

router.get("/:pid", (req, res) => {
  let pid = req.params.pid;

  let finalUrl = `https://www.sneakersnstuff.com/en/cart/add?id=${pid}`;
  res.redirect(finalUrl);
});

module.exports = router;
