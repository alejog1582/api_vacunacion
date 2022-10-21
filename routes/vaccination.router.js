const express = require('express');
const VaccinationService = require('./../services/vaccination.services');


const router = express.Router();
const service = new VaccinationService();

router.post("/", async (req, res) =>{
  const body = req.body;
  const newVaccination = await service.create(body);
  if (!newVaccination) {
    res.status(404).json({
      message: "El id de la drogra ingresada no existe. Por favor validar"
    });
  }else{
    res.status(201).json({
      message: "Vacunacion Creado con Exito",
      data: newVaccination
    });
  }
});

router.get('/', async (req, res) => {
  const vaccination = await service.find();
  res.json(vaccination);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const vaccination = await service.findOne(id);
  res.json(vaccination);
}
);

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const vaccination = await service.update(id, body);
  res.json(vaccination);
}
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  if (rta) {
    res.status(201).json({
      message: "Vacunacion Eliminado con Exito",
      id
    });
  }else{
    res.status(404).json({
      message: "Vacunacion a eliminar no encontrado"
    });
  }
}
);

module.exports = router;
