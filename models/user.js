module.exports = function(mongoose){
  var Schema = mongoose.Schema;
  var UserSchema = new Schema({
    id: {
      type: String,
      required: true
    },
    correo: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });
  return mongoose.model("User", UserSchema);
}