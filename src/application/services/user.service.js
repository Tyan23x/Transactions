const axios = require('axios');
const API_USUARIOS = process.env.API_USUARIOS;

async function validarUsuario(token) {
  try {
    const response = await axios.get(`${API_USUARIOS}/user`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error al validar usuario:', error.message);
    throw new Error('Usuario no válido');
  }
}

module.exports = { validarUsuario };
