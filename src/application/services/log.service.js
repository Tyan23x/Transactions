const axios = require('axios');
const API_LOGS = process.env.API_LOGS;

async function registrarLog(mensaje) {
  try {
    await axios.post(`${API_LOGS}/logs`, { mensaje });
  } catch (error) {
    console.error('Error al registrar log:', error.message);
  }
}

module.exports = { registrarLog };
