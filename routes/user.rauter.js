const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')
const { esUnRolValido, correoExixteValidacio, exiteUsuarioPorId } = require('../helpers/db-validators')


const { 
      GetUsers, 
      CreateUser, 
      UpdateUser, 
      PatchUser, 
      DeleteUser 
    } = require('../controllers/user.controllers')

const routes = Router();

routes.get('/', GetUsers )


routes.post('/', [

  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('contraseña', 'La contraseña debe contener mas de 6 caracteres').isLength({min: 6}),
  check('correo').custom( correoExixteValidacio ),
  // check('correo', 'El correo no tiene un formato valido').isEmail(),
  // check('rol', 'No es un rol valido').isIn(['ADMIN_ROL', 'USER_ROL']),
  check('rol').custom( esUnRolValido ),
  validarCampos

], CreateUser );

routes.put('/:id',[
  check('id', 'el ID no es un id valido').isMongoId(),
  check('id').custom( exiteUsuarioPorId ),
  validarCampos
] ,UpdateUser );

routes.patch('/', PatchUser );

routes.delete('/:id',[
  check('id', 'el ID no es un id valido').isMongoId(),
  check('id').custom( exiteUsuarioPorId ),
  validarCampos
], DeleteUser );



module.exports = routes