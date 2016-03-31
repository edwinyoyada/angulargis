var non_bank_typeModel = require('./../models/non_bank_type');

var non_bank_typeLogic = (function() {
    // }

    return {
        getData: function(req, callback) {
            non_bank_typeModel.find(function (err, orgs) {
                if(err)
                    callback({ status: false, message: err });

                callback({ status: true, message: orgs });
            });
        }
    }
})()

module.exports = non_bank_typeLogic;
