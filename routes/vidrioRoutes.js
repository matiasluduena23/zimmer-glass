const express = require("express"),
  router = express.Router(),
  {
    getVidrios,
    createVidrio,
    updateVidrio,
    deleteVidrio,
  } = require("../controllers/vidrioController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getVidrios).post(protect, createVidrio);
router.route("/:id").put(protect, updateVidrio).delete(protect, deleteVidrio);

module.exports = router;
