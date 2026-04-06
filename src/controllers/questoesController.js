const QuestoesModel = require('../models/questoesModel');

//rota get geral
async function listarTodos(req, res) {
  try {
    const questoes = await QuestoesModel.listarTodos();
    res.status(200).json(questoes);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao listar Questoes', 
      erro: erro.message 
    });
  }
}

//get por id
async function buscarPorIdc(req, res) {
  try {
    const idc = parseInt(req.params.idc);
    
    if (isNaN(idc)) {
      return res.status(400).json({ 
        mensagem: 'idc inválido' 
      });
    }
    
    const questoes = await QuestoesModel.buscarPorIdc(idc);
    
    if (questoes) {
      res.status(200).json(questoes);
    } else {
      res.status(404).json({ 
        mensagem: `Questao ${idc} não encontrado` 
      });
    }
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao buscar questoes',
      erro: erro.message 
    });
  }
}

//post
async function criar(req, res) {
  try {
    const {topicoid,enunciado,resposta,link_b,dtinclusao} = req.body;
    
    // Validações
    if (!topicoid || !enunciado || !resposta || !link_b || !dtinclusao ) {
      return res.status(400).json({ 
        mensagem: 'Todos os campos são obrigatórios' 
      });
    }

    
    
    const novaQuestoes = await QuestoesModel.criar({ 
    topicoid,
    enunciado,
    resposta,
    link_b,
    dtinclusao
    });
    
    res.status(201).json(novaQuestoes);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao criar Questoes',
      erro: erro.message 
    });
  }
}

//put
async function atualizar(req, res) {
  try {
    const idc = parseInt(req.params.idc);
    const {topicoid, enunciado, resposta,link_b, dtinclusao } = req.body;
    
    if (isNaN(idc)) {
      return res.status(400).json({ 
        mensagem: 'idc inválido' 
      });
    }
    
    if (!topicoid || !enunciado || !resposta || !link_b || !dtinclusao ) {
      return res.status(400).json({ 
        mensagem: 'Todos os campos são obrigatórios' 
      });
    }
    
    const QuestoesAtualizado = await QuestoesModel.atualizar(idc, { 
    topicoid,
    enunciado,
    resposta,
    link_b,
    dtinclusao
    });
    
    if (QuestoesAtualizado) {
      res.status(200).json(QuestoesAtualizado);
    } else {
      res.status(404).json({ 
        mensagem: `Questão ${idc} não encontrada` 
      });
    }
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao atualizar Questoes',
      erro: erro.message 
    });
  }
};
    

//delete
async function deletar(req, res) {
  try {
    const idc = parseInt(req.params.idc);
    
    if (isNaN(idc)) {
      return res.status(400).json({ 
        mensagem: 'idc inválido' 
      });
    }
    
    const deletado = await QuestoesModel.deletar(idc);
    
    if (deletado) {
      res.status(200).json({ 
        mensagem: `Questão ${idc} removida com sucesso` 
      });
    } else {
      res.status(404).json({ 
        mensagem: `Questão ${idc} não encontrada` 
      });
    }
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao deletar questão',
      erro: erro.message 
    });
  }
}


// pergunta por topico insert1
async function buscarPorTopico(req, res) {
  try {
    const topicoid = parseInt(req.params.topicoid);
    
    if (isNaN(topicoid)) {
      return res.status(400).json({ 
        mensagem: 'ID inválido' 
      });
    }
    
    const questoes = await QuestoesModel.buscarPorTopico(topicoid);
    
    if (questoes) {
      res.status(200).json(questoes);
    } else {
      res.status(404).json({ 
        mensagem: `Questão ${topicoid} não encontrada` 
      });
    }
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao buscar questão',
      erro: erro.message 
    });
  }
}

//buscar por palavra chave select 2
async function buscarPorPalavra(req, res) {
  try {
    const palavraChave = req.params.palavraChave;
    const questoes = await QuestoesModel.buscarPorPalavra(palavraChave);
    res.status(200).json(questoes);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao buscar resposta por palavra',
      erro: erro.message 
    });
  }
}

async function buscarVisao(req, res) {
  try {
    const visao1 = await QuestoesModel.buscarVisao();
    res.status(200).json(visao1);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao listar visao', 
      erro: erro.message 
    });
  }
}


module.exports = {
  listarTodos,
  buscarPorIdc,
  criar,
  atualizar,
  deletar,
  buscarPorTopico,
  buscarPorPalavra,
  buscarVisao
};