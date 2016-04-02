var conventionalTypeModel = require('./../models/conventional_type');

var conventionalTypeLogic = (function() {
    return {
        getData: function(req, callback) {
            conventionalTypeModel.find(function (err, orgs) {
                if(err)
                    callback({ status: false, message: err });

                callback({ status: true, message: orgs });
            });
        }
    }
})()

module.exports = conventionalTypeLogic;
