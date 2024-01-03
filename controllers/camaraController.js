const handlerAsync = require("express-async-handler"),
  Camara = require("../models/camara");

//@description  GET CAMARAS
//@route        /api/camaras
//@access       private
const getCamaras = handlerAsync(async (req, res) => {
  const camaras = await Camara.find();

  res.json(camaras);
});

//@description  POST CAMARA
//@route        /api/camaras
//@access       private
const createCamara = handlerAsync(async (req, res) => {
  if (!req.body.nombre || !req.body.precio)
    throw new Error("Por favor complete los campos!");

  const newCamara = await Camara.create({
    nombre: req.body.nombre,
    precio: req.body.precio,
    stock: req.body.stock,
  });

  res.json(newCamara);
});

//@description  PUT CAMARA
//@route        /api/camaras:id
//@access       private
const updateCamara = handlerAsync(async (req, res) => {
  const camara = await Camara.findById(req.params.id);

  if (!camara) {
    res.status(400);
    throw new Error("Camara no encontrada en la base de datos!");
  }

  req.body.stock &&
    (req.body.stock = Number(camara.stock) + Number(req.body.stock));

  const updatedCamara = await Camara.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedCamara);
});

//@description  DELETE CAMARA
//@route        /api/camaras:id
//@access       private
const deleteCamara = handlerAsync(async (req, res) => {
  const camara = await Camara.findById(req.params.id);

  if (!camara) {
    res.status(400);
    throw new Error("Camara no encontrada en la base de datos!");
  }

  const deletedCamara = await Camara.findByIdAndDelete(req.params.id);

  res.json(deletedCamara);
});

module.exports = {
  getCamaras,
  createCamara,
  updateCamara,
  deleteCamara,
};
