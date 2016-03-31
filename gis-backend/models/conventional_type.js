var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conventionalTypeSchema = new Schema ({
	name: String
});

module.exports = mongoose.model('Conventional_Type', conventionalTypeSchema);
