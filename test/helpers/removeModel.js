var mongoose = require('mongoose');

module.exports = function removeModel(modelName) {
	delete mongoose.models[modelName.toLowerCase().trim()];
	delete mongoose.modelSchemas[modelName.toLowerCase().trim()];
};
