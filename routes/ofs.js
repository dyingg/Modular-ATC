const express = require("express");
const router = express.Router();

router.get("/:pid/:size", (req, res) => {
  let size = req.params.size;
  let pid = req.params.pid;
  size = size.split(".").join("");
  size = size.padEnd(2, "0");
  size = size.padStart(3, "0");

  res.redirect(
    "https://www.offspring.co.uk/view/product/offspring_catalog/5,22/" +
      pid +
      size
  );
});

module.exports = router;
