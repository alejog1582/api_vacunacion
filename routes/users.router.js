const express = require('express');
const UserService = require('./../services/user.services');

const router = express.Router();
const service = new UserService();

router.get('/', async (req, res) => {
    const users = await service.find();
    res.json(users);
});

router.get('/:id', async (req, res) => {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.json(user);
  }
);

router.put('/:id', async (req, res) => {
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json(user);
  }
);

router.delete('/:id', async (req, res) => {
      const { id } = req.params;
      const rta = await service.delete(id);
      if (rta) {
        res.status(201).json({
          message: "Regisro Eliminado con Exito",
          id
        });
      }else{
        res.status(404).json({
          message: "Usuario a eliminar no encontrado"
        });
      }
  }
);

module.exports = router;
