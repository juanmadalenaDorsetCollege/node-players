const app = require('./app')

PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
  console.log('El servidor esta conectado al puerto:'+ PORT );
})