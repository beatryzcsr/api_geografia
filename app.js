require('dotenv').config();

const express = require('express');
const app = express();

// Porta vem do .env, ou usa 3000 como padrão
const PORT = process.env.PORT || 3000;

app.use(express.json());


//rotas
const questoesRoutes = require('./src/routes/questoesRoutes');
app.use('/questoes', questoesRoutes);

const topicosRoutes = require('./src/routes/topicosRoutes');
app.use('/topicos', topicosRoutes);

app.get('/', (req, res) => {
  res.json({ 
    mensagem: 'API de Geografia com PostgreSQL',
    banco: 'PostgreSQL'
  });
});


//iniciando
app.listen(PORT, () => {
  console.log('🚀 Servidor rodando!');
  console.log(`📍 URL: http://localhost:${PORT}`);
});
