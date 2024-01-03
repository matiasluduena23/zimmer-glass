const express = require("express"),
  router = express.Router(),
  {
    getCamaras,
    createCamara,
    updateCamara,
    deleteCamara,
  } = require("../controllers/camaraController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getCamaras).post(protect, createCamara);

router.route("/:id").put(protect, updateCamara).delete(protect, deleteCamara);

module.exports = router;
