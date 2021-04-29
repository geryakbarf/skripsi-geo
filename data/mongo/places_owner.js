const mongo = require('./index');
const {Schema} = mongo;
const modelName = 'Owner';

const adminSchema = new Schema({
    name: String,
    email: String,
    password: String,
    placesId: [String],
    options: Schema.Types.Mixed
}, {timestamps: {}});

const Model = mongo.model(modelName, adminSchema);

module.exports = Model;
