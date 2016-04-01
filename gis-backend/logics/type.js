var typeModel = require('./../models/type');

var typeLogic = (function() {
    return {
        getData: function(req, callback) {
            typeModel.find(function (err, orgs) {
                if(err)
                    callback({ status: false, message: err });

                callback({ status: true, message: orgs });
            });
        }
    }
})()

module.exports = typeLogic;
