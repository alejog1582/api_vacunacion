const express = require('express');


const router = express.Router();

router.post("/", async (req, res) =>{
  const body = req.body;
  res.json({
    message: "Ruta Creacion drugs",
    data: body
  });
});

router.get('/', async (req, res) => {
  res.json({
    message: "Get drugs"
  });
});

router.get("/:id", async (req, res) =>{
  const { id } = req.params;
    res.json({
      message: "Ruta para llamar un solo registro drugs",
      id
    });
});

router.put("/:id", async (req, res) =>{
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "Ruta para actualizar registro drugs",
    data: body,
    id,
  });
});

router.delete("/:id", async (req, res) =>{
  const { id } = req.params;
  res.json({
    message: "Registro Eliminado con Exito drugs",
    id
  });
});

module.exports = router;
