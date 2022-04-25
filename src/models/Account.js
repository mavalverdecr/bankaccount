const {Schema, model} = require('mongoose');

const accountSchema = new Schema({
    amount: {type: Schema.Types.Decimal128},
    balance: {type: Schema.Types.Decimal128}
},{
    timestamps: true,
    versionKey: false
})

module.exports = model("Account", accountSchema);