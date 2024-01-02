const express = require("express"),
  router = express.Router(),
  {
    getVidrios,
    createVidrio,
    updateVidrio,
    deleteVidrio,
  } = require("../controllers/vidrioController");

router.route("/").get(getVidrios).post(createVidrio);
router.route("/:id").put(updateVidrio).delete(deleteVidrio);

module.exports = router;
