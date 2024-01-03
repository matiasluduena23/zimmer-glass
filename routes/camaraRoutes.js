const express = require("express"),
  router = express.Router(),
  {
    getCamaras,
    createCamara,
    updateCamara,
    deleteCamara,
  } = require("../controllers/camaraController");

router.route("/").get(getCamaras).post(createCamara);

router.route("/:id").put(updateCamara).delete(deleteCamara);

module.exports = router;
