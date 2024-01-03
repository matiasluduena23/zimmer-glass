const asyncHandler = require("express-async-handler");
const Vidrio = require("../models/vidrio");

//@description  GET VIDRIOS
//@route        /api/vidrios
//@access       private
const getVidrios = asyncHandler(async (req, res) => {
  const vidrios = await Vidrio.find({});

  res.json(vidrios);
});

//@description  POST VIDRIO
//@route        /api/vidrios
//@access       private
const createVidrio = asyncHandler(async (req, res) => {
  if (!req.body.nombre || !req.body.precio) {
    throw new Error("Por favor complete los campos!");
  }

  const vidrio = await Vidrio.create({
    nombre: req.body.nombre,
    precio: req.body.precio,
  });

  res.json(vidrio);
});

//@description  PUT VIDRIOS
//@route        /api/vidrios:id
//@access       private
const updateVidrio = asyncHandler(async (req, res) => {
  const vidrio = await Vidrio.findById(req.params.id);

  if (!vidrio) {
    res.status(400);
    throw new Error("Vidrio no encontrado en la base de datos.");
  }

  const udpatedVidrio = await Vidrio.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(udpatedVidrio);
});

//@description  DELETE VIDRIOS
//@route        /api/vidrios:id
//@access       private
const deleteVidrio = asyncHandler(async (req, res) => {
  const vidrio = await Vidrio.findById(req.params.id);

  if (!vidrio) {
    res.status(400);
    throw new Error("Vidrio no encontrado en la base de datos.");
  }

  await Vidrio.findByIdAndDelete(req.params.id);

  res.json(vidrio);
});

module.exports = {
  getVidrios,
  createVidrio,
  updateVidrio,
  deleteVidrio,
};
