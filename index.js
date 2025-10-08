require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/clima', async (req, res) => {
  const cidade = req.query.cidade || 'São Paulo';
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return res.status(400).json({ mensagem: 'Faltando OPENWEATHER_API_KEY. Verifique seu .env' });
  }

  try {
    const resposta = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)}&appid=${apiKey}&units=metric&lang=pt_br`
    );
    res.json(resposta.data);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ mensagem: 'Erro ao consultar clima' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
