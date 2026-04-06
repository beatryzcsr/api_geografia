const express = require('express');
const router = express.Router();

const QuestoesController = require('../controllers/questoesController');


router.get('/', QuestoesController.listarTodos);

router.get('/visao', QuestoesController.buscarVisao);

router.get('/topico/:topicoid', QuestoesController.buscarPorTopico);

router.get('/busca/:palavraChave', QuestoesController.buscarPorPalavra);

router.get('/:idc', QuestoesController.buscarPorIdc);

router.post('/', QuestoesController.criar);

router.put('/:idc', QuestoesController.atualizar);

router.delete('/:idc', QuestoesController.deletar);

//exportando
module.exports = router;
