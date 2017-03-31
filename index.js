'use strict';
var uuid = require('uuid');

var util = module.exports = function() {
};

util.prototype.genUuid = function() {
	return uuid.v4().replace(/-/g, '');
}

var idGenerator = module.exports = new util();