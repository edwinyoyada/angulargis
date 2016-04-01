mongoose = require('mongoose');

var generalOrganizationModel = require('./../models/general_organization');

var generalOrganizationLogic = (function() {
    return {
        getData: function(req, callback) {
            if(req.query['organizationTypeID'])
            {
                generalOrganizationModel.find({'organization_type_id':req.query['organizationTypeID']}, function (err, orgs) {
                    if(err)
                        callback({ status: false, message: err });

                    callback({ status: true, message: orgs });
                }).sort([['name', 'ascending']]);
            }
            //else if(req.query['name'])
            //{
            //    generalOrganizationModel.find({'name': req.query['name']}, function (err, orgs) {
            //        if(err)
            //            callback({ status: false, message: err });
            //
            //        callback({ status: true, message: orgs });
            //    });
            //}
            else{
                generalOrganizationModel.find(function (err, orgs) {
                    if(err)
                        callback({ status: false, message: err });

                    callback({ status: true, message: orgs });
                });
            }
        }
    }
})()

module.exports = generalOrganizationLogic;
