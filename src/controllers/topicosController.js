const TopicosModel = require('../models/topicosModel');

//rota get geral
async function listarTodos(req, res) {
  try {
    const topicos = await TopicosModel.listarTodos();
    res.status(200).json(topicos);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao listar topicos', 
      erro: erro.message 
    });
  }
}

//get por idt
async function buscarPorIdt(req, res) {
  try {
    const idt = parseInt(req.params.idt);
    
    if (isNaN(idt)) {
      return res.status(400).json({ 
        mensagem: 'idt inválido' 
      });
    }
    
    const topicos = await TopicosModel.buscarPorIdt(idt);
    
    if (topicos) {
      res.status(200).json(topicos);
    } else {
      res.status(404).json({ 
        mensagem: `topico ${idt} não encontrado` 
      });
    }
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao buscar topico',
      erro: erro.message 
    });
  }
}

//post
async function criar(req, res) {
  try {
    const {disciplina, professor, descricao_t} = req.body;
    
    // Valrmações
    if (!disciplina || !professor || !descricao_t ) {
      return res.status(400).json({ 
        mensagem: 'Todos os campos são obrigatórios' 
      });
    }

    
    const novoTopico = await TopicosModel.criar({ 
     disciplina, 
     professor,
     descricao_t
    });
    
    res.status(201).json(novoTopico);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao criar topico',
      erro: erro.message 
    });
  }
}

//put
async function atualizar(req, res) {
  try {
    const idt = parseInt(req.params.idt);
    const {disciplina, professor, descricao_t} = req.body;
    
    if (isNaN(idt)) {
      return res.status(400).json({ 
        mensagem: 'idt inválido' 
      });
    }
    
    if (!disciplina || !professor || !descricao_t ) {
      return res.status(400).json({ 
        mensagem: 'Todos os campos são obrigatórios' 
      });
    }
    
    const topicoAtualizado = await TopicosModel.atualizar(idt,{ 
     disciplina, 
     professor,
     descricao_t
    });
    
    if (topicoAtualizado) {
      res.status(200).json(topicoAtualizado);
    } else {
      res.status(404).json({ 
        mensagem: `Topico ${idt} não encontrado` 
      });
    }
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao atualizar topico',
      erro: erro.message 
    });
  }
};
    

//delete
async function deletar(req, res) {
  try {
    const idt = parseInt(req.params.idt);
    
    if (isNaN(idt)) {
      return res.status(400).json({ 
        mensagem: 'idt inválido' 
      });
    }
    
    const deletado = await TopicosModel.deletar(idt);
    
    if (deletado) {
      res.status(200).json({ 
        mensagem: `Topico ${idt} removido com sucesso` 
      });
    } else {
      res.status(404).json({ 
        mensagem: `Topico ${idt} não encontrado` 
      });
    }
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao deletar topico',
      erro: erro.message 
    });
  }
}


//exportando
module.exports = {
  listarTodos,
  buscarPorIdt,
  criar,
  atualizar,
  deletar
};


