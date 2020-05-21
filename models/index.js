if(!global.hasOwnProperty('db')){
  // Inicia el framework para el manejo de la db
  var moongo = require("mongoose");
// Coneccion a la base de datos
  moongo.connect('mongodb://mongo:27017/helloworlddb',
  {dbName: 'web', useNewUrlParser: true, useUnifiedTopology: true});
  
  // Variable db global para acceder desde cualquier lado
  global.db = {
      // Import el framework como objeto
      mongoose:moongo,
      User: require('./user')(moongo)
  };
}
// se exporta la base de datos
module.exports = global.db;