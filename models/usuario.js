'use strict'

const {Schema, model} = require('mongoose');

const usuarioSchema = Schema({

  nombre: {
    type: String,
    required: [true, 'El nombre es requerido']
  },

  correo: { 
    type: String,
    required: [true, 'El nombre es requerido'],
    unique: true
  },

  contraseña: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  },

  img:{
    type: String
  },

  rol:{
    type: String,
    required: [true],
    emun: ['ADMIN_ROLE', 'USER_ROLE']
  },

  estado: {
    type: Boolean,
    default: true
  },

  google:{
    type: Boolean,
    default: false
  }
  
});


module.exports = model( 'Usuario', usuarioSchema );