

const GetUsers = (req, res ) => {
  
  res.json({
    smg: 'get api- desde su controlador'
  })

};

const CreateUser = (req, res) => {

  const body = req.body

  res.json({
    smg: 'post api- desde su controlador',
    
    body
  })

}

const UpdateUser =(req, res) => {

  res.json({
    smg: 'put api- desde su controlador'
  })
}


const PatchUser = (req, res) => {

  res.json({
    smg: 'patch api- desde su controlador'
  })
}

const DeleteUser = (req, res) => {
  res.json({
    smg: ('delete api- desde su controlador')
  })
}

module.exports = {
  GetUsers,
  CreateUser,
  UpdateUser,
  PatchUser,
  DeleteUser

}