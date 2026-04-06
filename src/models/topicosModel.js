const pool = require("../config/database");

//get geral
async function listarTodos() {
  const result = await pool.query("SELECT * FROM topicos ORDER BY idt");

  return result.rows;
}

//get por id
async function buscarPorIdt(idt) {
  const result = await pool.query("SELECT * FROM topicos WHERE idt = $1", [
    idt,
  ]);

  return result.rows[0];
}

//post
async function criar(dados) {
  const { disciplina, professor, descricao_t } = dados;

  const sql = `
    INSERT INTO topicos ( disciplina, professor, descricao_t )
    VALUES ($1, $2, $3)
    RETURNING *
  `;

  const result = await pool.query(sql, [disciplina, professor, descricao_t]);

  return result.rows[0];
}

//put
async function atualizar(idt, dados) {
  const { disciplina, professor, descricao_t } = dados;

  const sql = `
    UPDATE topicos
    SET disciplina = $1, professor = $2, descricao_t = $3
    WHERE idt = $4
    RETURNING *
  `;

  const result = await pool.query(sql, [  disciplina, professor, descricao_t, idt, ]);

  return result.rows[0] || null;
}

//delete
async function deletar(idt) {
  const result = await pool.query("DELETE FROM topicos WHERE idt = $1", [idt]);

  return result.rowCount > 0;
}

module.exports = {
  listarTodos,
  buscarPorIdt,
  criar,
  atualizar,
  deletar,
};
