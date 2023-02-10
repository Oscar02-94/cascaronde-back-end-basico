const express = require('express');

const app = express();

const cors = require('cors')

class Server {

  constructor() {

    this.app = express();
    
    this.port = process.env.PORT

    // rutas de los usuarios
    this.usuariosPath = '/api/usuarios'

    // middelware
        
    this.middlewares();

    // rutas de mi aplicacion
    this.routes();
  }

  middlewares() {

    this.app.use( express.static('public') ); // directorio publico ruta

    this.app.use(cors() ); // configurando el cors

    this.app.use( express.json() ); // lectura y parseo del body
  }

  routes() {
    // configurando la ruta de los routes
    this.app.use( this.usuariosPath, require('../routes/user.rauter'));
  }

  listener() {

    this.app.listen(this.port, () => {

      console.log(`App listening on port ${this.port}`)

    });
  }

}

module.exports = Server