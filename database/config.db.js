const mongoose = require('mongoose');


const dbConnetion = async () =>  {

  mongoose.set ('strictQuery', true)
  
  try {
    
    await mongoose.connect(process.env.CONENECTIO_MONGO_ATLAS,{

      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false 
    });

    console.log('base de datos online')
    

  } catch (error) {

    console.log(error)

    throw new Error('Erro al iniciar la base de datos')
  }
}





module.exports = {
  dbConnetion
}