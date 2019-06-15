const express = require("express");
const router = express.Router();

router.get("/:pid/:size", (req, res) => {
  let size = req.params.size;
  let pid = req.params.pid;
  if (!size || !pid) return res.end("Invalid call - exited!");

  let sizeBuilder = size.split(".");
  size = sizeBuilder[0].padStart(2, "0");
  if (sizeBuilder[1]) {
    size += sizeBuilder[1];
  }
  size = size.padEnd(3, "0");
  res.redirect(
    "https://www.offspring.co.uk/view/product/offspring_catalog/5,22/" +
      pid +
      size
  );
});

module.exports = router;
