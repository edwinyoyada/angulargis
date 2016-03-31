var organizationModel = require('./../models/organization');

var organizationLogic = (function() {
    // var fields = vars;
    //
    // function getRequiredFields() {
    //   if(type == 'post') {
    //     fields = vars.body;
    //   }
    // }

    return {
        postData: function(req, callback) {
            var fields = req.body;

            var org = new organizationModel();
            org.organization_type_id= fields.organization_type_id;
            org.conventional_type_id= fields.conventional_type_id;
            org.non_bank_type_id= fields.non_bank_type_id;
            org.non_bank_sub_type_id= fields.non_bank_sub_type_id;
            org.name = fields.name;
            org.address = fields.address;
            org.province_id= fields.province_id;
            org.city_id= fields.city_id;
            org.phone = fields.phone;
            org.coord = { latitude: fields.latitude, longitude: fields.longitude };
            org.asset_size= fields.asset_size;
            org.sales_size= fields.sales_size;
            org.third_party_funds= fields.third_party_funds;
            org.is_hq= fields.is_hq;
            org.hq_address= fields.hq_address;
            org.hq_id= fields.hq_id;
            org.icon_image= fields.icon_image;
            org.financial_statement = fields.financial_statement;
            org.website = fields.website;

            org.save(function(err) {
                if(err)
                    callback({ status: false, message: err });

                callback({ status: true, message: 'New organization data added!'});
            });
        },

        getData: function(req, callback) {
            if(req.query['name']) {
                organizationModel.find({ name: new RegExp(req.query['name'], 'i') }, function (err, orgs) {
                    if(err)
                        callback({ status: false, message: err });

                    callback({ status: true, message: orgs });
                });
            }else if(req.query['ids']) {
                if(req.query['ids']=='null')
                {
                    callback({status: true, message: []});
                }else {
                    organizationModel.find({'_id': {$in: req.query['ids']}}, function (err, orgs) {
                        if (err)
                            callback({status: false, message: err});

                        callback({status: true, message: orgs});
                    });
                }
            }
            else {
                organizationModel.find(function (err, orgs) {
                    if(err)
                        callback({ status: false, message: err });

                    callback({ status: true, message: orgs });
                }).populate('organization_type_id');
            }
        }
    }
})()

module.exports = organizationLogic;
