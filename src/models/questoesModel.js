const pool = require('../config/database');

//get geral
async function listarTodos() {
  const result = await pool.query(
    'SELECT * FROM questoes ORDER BY idc'
  );
  
  return result.rows;
}

//get por id
async function buscarPorIdc(idc) {
  const result = await pool.query(
    'SELECT * FROM questoes WHERE idc = $1',
    [idc] 
  );
  
  return result.rows[0];
}

//post
async function criar(dados) {
  const { topicoid,enunciado,resposta,link_b,dtinclusao  } = dados;
  
  const sql = `
    INSERT INTO questoes ( topicoid,enunciado,resposta,link_b,dtinclusao  )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;
  
  const result = await pool.query(
    sql,
    [topicoid,enunciado,resposta,link_b,dtinclusao ]
  );
  
  return result.rows[0];
}

//put
async function atualizar(idc, dados) {
  const { topicoid, enunciado, resposta, link_b, dtinclusao } = dados;
  
  const sql = `
    UPDATE questoes
    SET topicoid = $1, enunciado = $2, resposta = $3, link_b = $4, dtinclusao = $5
    WHERE idc = $6
    RETURNING *
  `;
  
  const result = await pool.query(
    sql,
    [topicoid, enunciado, resposta, link_b, dtinclusao, idc]
  );
 
  return result.rows[0] || null;
}

//delete
async function deletar(idc) {
  const result = await pool.query(
    'DELETE FROM questoes WHERE idc = $1',
    [idc]
  );
  
  return result.rowCount > 0;
}


//buscar por topicos select 1
async function buscarPorTopico(topicoid) {
  const result = await pool.query(
    'SELECT enunciado FROM questoes WHERE topicoid = $1',
    [topicoid]
  );
  return result.rows;
}

//exibir resposta select 2
async function buscarPorPalavra(palavraChave) {

    const sql = 'SELECT enunciado, resposta FROM questoes WHERE enunciado ILIKE $1';
    
    const result = await pool.query(
    sql, [`%${palavraChave}%`]
  );
  
  return result.rows;
}

//view select 3
async function buscarVisao() {
    try {
        const query = 'SELECT * FROM visao1';
        const result = await pool.query(query);

        return result.rows;
    } catch (error) {
        console.error('Erro ao buscar visão:', error);
        throw error;
    }
}



//select 1 disciplina 
async function buscarPorMateria(topicoid) {
  const result = await pool.query(
    'SELECT enunciado, resposta FROM questoes WHERE topicoid = $5 OR topicoid = $6 OR topicoid = $7 OR topicoid = $8',
    [topicoid]
  );
  return result.rows;
}

//select 2 topico
async function buscarPorTopico(topicoid) {
  const result = await pool.query(
    'SELECT enunciado, resposta FROM questoes WHERE topicoid = $1',
    [topicoid]
  );
  return result.rows;
}


//exportando
module.exports = {
  listarTodos,
  buscarPorIdc,
  criar,
  atualizar,
  deletar,
  buscarPorTopico,
  buscarPorPalavra,
  buscarVisao,
  buscarPorMateria,
  buscarPorTopico,

};
