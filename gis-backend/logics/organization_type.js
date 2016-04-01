var organizationTypeModel = require('./../models/organization_type');

var organizationTypeLogic = (function() {
    return {
        getData: function(req, callback) {
            organizationTypeModel.find(function (err, orgs) {
                if(err)
                    callback({ status: false, message: err });

                callback({ status: true, message: orgs });
            }).populate('organization');
        }
    }
})()

module.exports = organizationTypeLogic;
