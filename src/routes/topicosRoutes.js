const express = require('express');
const router = express.Router();

const TopicosController = require('../controllers/topicosController');

router.get('/', TopicosController.listarTodos);

router.get('/:idt', TopicosController.buscarPorIdt);


router.post('/', TopicosController.criar);


router.put('/:idt', TopicosController.atualizar);


router.delete('/:idt', TopicosController.deletar);

//exportando
module.exports = router;
