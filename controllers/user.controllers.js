
const  Usuario = require('../models/usuario')

const bcrypt = require('bcryptjs');


const GetUsers = async (req, res ) => {
// paginado
  const { limite = 5, desde = 0 } = req.query;

  // solo traer los que tiene estado en true
  const query = {estado:  true}

  const usuario = await Usuario.find( query )
    .skip(desde)
    .limit(limite)

    const total = await Usuario.countDocuments( query )

  res.json({
   usuario,
   total
  })

};

const CreateUser = async (req, res) => {

  const {nombre, correo, contraseña, rol} = req.body
  const usuario = new Usuario({ nombre, correo, contraseña, rol })

  // encriptando la contraseña
  const salt = bcrypt.genSaltSync();
  usuario.contraseña = bcrypt.hashSync(contraseña, salt)
 

  // guardar en base de datos
  await usuario.save();

  console.log(usuario,'===>')

  res.json({
    
    usuario
  })

}

const UpdateUser = async (req, res) => {

    const { id } = req.params
    const {_id, contraseña, google, correo, ...resto} = req.body

    // Todo validar contra la base de datos
    if (contraseña) {
      // encripto la contraseña
      const salt = bcrypt.genSaltSync();
      resto.contraseña = bcrypt.hashSync(contraseña, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json({
    smg: 'put api- desde su controlador',
    usuario
  })
}


const PatchUser = (req, res) => {

  res.json({
    smg: 'patch api- desde su controlador'
  })
}

const DeleteUser = async (req, res) => {

  const { id } = req.params

  const usuario = await Usuario.findOneAndUpdate( id, {estado:false} );
  res.json( usuario )
}

module.exports = {
  GetUsers,
  CreateUser,
  UpdateUser,
  PatchUser,
  DeleteUser

}