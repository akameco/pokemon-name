'use strict';
const json = require('./pokemon-names.json');

module.exports = function (name) {
	const jpName = json[name];
	if (!jpName) {
		throw new Error('Not exist.');
	}

	return json[name];
};
