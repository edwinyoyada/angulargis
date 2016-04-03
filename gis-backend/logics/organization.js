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
                }).populate('organization_type_id');
            }else if(req.query['general_ids']) {
                var general_ids = req.query['general_ids'];
                var province = req.query['province'];
                var city = req.query['city'];
                var type = req.query['type'];
                var sub_type = req.query['sub_type'];
                var conventional = req.query['conventional'];
                var is_hq_only = req.query['is_hq_only'];

                if(general_ids=='null')
                {
                    callback({status: true, message: []});
                }else {
                    var searchQuery= {};
                    if (!Array.isArray(general_ids)) {
                        searchQuery['general_organization_id']=general_ids;
                    }
                    else {
                        searchQuery['general_organization_id']={$in: general_ids};
                    }
                    if(province!='All')
                        searchQuery['province._id']=province;
                    if(city!='All')
                        searchQuery['city._id']=city;
                    if(type!='All')
                        searchQuery['type_id']=type;
                    if(sub_type!='All')
                        searchQuery['sub_type_id']=sub_type;
                    if(conventional!='All')
                        searchQuery['conventional_type_id']=conventional;
                    if(is_hq_only=="true")
                        searchQuery['is_hq']="yes";

                    organizationModel.find(searchQuery, function (err, orgs) {
                        if (err)
                            callback({status: false, message: err});

                        callback({status: true, message: orgs});
                    }).populate('organization_type_id');
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
