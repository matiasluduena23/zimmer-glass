const asyncHandler = require("express-async-handler");

//@description  GET VIDRIOS
//@route        /api/vidrios
//@access       private
const getVidrios = asyncHandler(async (req, res) => res.send("get vidrios"));

//@description  POST VIDRIO
//@route        /api/vidrios
//@access       private
const createVidrio = asyncHandler(async (req, res) => {
  if (!req.body.nombre) {
    throw new Error("Por favor ingrese un nombre!");
  }
  res.json(req.body);
});

//@description  PUT VIDRIOS
//@route        /api/vidrios:id
//@access       private
const updateVidrio = asyncHandler(async (req, res) =>
  res.send("update vidrios" + req.params.id)
);

//@description  DELETE VIDRIOS
//@route        /api/vidrios:id
//@access       private
const deleteVidrio = asyncHandler(async (req, res) =>
  res.send("delete vidrios" + req.params.id)
);

module.exports = {
  getVidrios,
  createVidrio,
  updateVidrio,
  deleteVidrio,
};
