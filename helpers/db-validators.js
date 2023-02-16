const Role = require('../models/rol-models')
const  Usuario = require('../models/usuario')

const esUnRolValido =  async ( rol='' ) => {

  const exiteRol = await Role.findOne({ rol })
  if ( !exiteRol ) {
    throw  new Error(`El rol ${rol} no esta registrado en la base de datos`);
  }
}


const correoExixteValidacio = async( correo ) => {

  const correoExixteValidacio  = await Usuario.findOne({ correo });
  if(correoExixteValidacio ) {
    throw new Error(`el correo ${ correo } ya esta registrado`)
  }

}

const exiteUsuarioPorId = async( id ) => {

  const exiteUsuario  = await Usuario.findById( id );
  if( !exiteUsuario ) {
    throw new Error(`el ID ${id} no existe`)
  }

}
 

module.exports = {
  esUnRolValido,
  correoExixteValidacio,
  exiteUsuarioPorId
}