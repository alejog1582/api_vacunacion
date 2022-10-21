const express = require('express');
const DrugService = require('./../services/drug.services');


const router = express.Router();
const service = new DrugService();

router.post("/", async (req, res) =>{
  const body = req.body;
  const newDrug = await service.create(body);
  res.status(201).json({
    message: "Medicamento Creado con Exito",
    data: newDrug
  });
});

router.get('/', async (req, res) => {
  const drugs = await service.find();
  res.json(drugs);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const drug = await service.findOne(id);
  res.json(drug);
}
);

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const drug = await service.update(id, body);
  res.json(drug);
}
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  if (rta) {
    res.status(201).json({
      message: "Medicamento Eliminado con Exito",
      id
    });
  }else{
    res.status(404).json({
      message: "Medicamento a eliminar no encontrado"
    });
  }
}
);

module.exports = router;
