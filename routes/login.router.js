const express = require('express');


const router = express.Router();

router.post("/", async (req, res) =>{
  const body = req.body;
  res.json({
    message: "Ruta Login usuario",
    data: body
  });
});

module.exports = router;
