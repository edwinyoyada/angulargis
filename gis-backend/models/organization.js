var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var organizationSchema = new Schema ({
	organization_type_id: String,
	conventional_type_id: String,
	non_bank_type_id: String,
	non_bank_sub_type_id: String,
	name: String,
	address: String,
	province_id: String,
	city_id: String,
	phone: String,
	coord: { latitude: String, longitude: String },
	asset_size: Number,
	sales_size: Number,
	third_party_funds: Number,
	is_hq: String,
	hq_address: String,
	hq_id: String,
	icon_image: String,
	website: String,
	financial_statement: String,
});

module.exports = mongoose.model('Organization', organizationSchema);
