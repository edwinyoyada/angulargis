var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nonBankTypeSchema = new Schema ({
	name: String,
	sub_type: [{
		name: String
	}]
});

module.exports = mongoose.model('Non_Bank_Type', nonBankTypeSchema);
