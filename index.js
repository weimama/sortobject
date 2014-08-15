var _ = require('underscore');

function sortObject(obj) {
    if(!obj) {
        return null;
    }
    var keys = _.sortBy(_.keys(obj), function(a) { return a; });
    var newmap = {};
    _.each(keys, function(k) {
        newmap[k] = obj[k];
    });
    return newmap;
}

module.exports.sort = sortObject;

