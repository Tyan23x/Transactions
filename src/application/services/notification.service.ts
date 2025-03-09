const axios = require('axios');
const API_NOTIFICACIONES = process.env.API_NOTIFICACIONES;

async function enviarNotificacion(usuarioId, mensaje) {
  try {
    await axios.post(`${API_NOTIFICACIONES}/notificaciones`, { usuarioId, mensaje });
  } catch (error) {
    console.error('Error al enviar notificación:', error.message);
  }
}

module.exports = { enviarNotificacion };
