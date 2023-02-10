const { Router } = require('express')
const { 
      GetUsers, 
      CreateUser, 
      UpdateUser, 
      PatchUser, 
      DeleteUser 
    } = require('../controllers/user.controllers')
const routes = Router();

routes.get('/', GetUsers )


routes.post('/', CreateUser );

routes.put('/', UpdateUser );

routes.patch('/', PatchUser );

routes.delete('/', DeleteUser );



module.exports = routes