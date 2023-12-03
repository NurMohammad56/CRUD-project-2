
const mongoose = require("mongoose")
const dataSchema = mongoose.Schema({
        productName:{type:String},
        productCode:{type:String},
        img:{type:String},
        unitPrice:{type:String},
        qty:{type:String},
        totalPrice:{type:String},
        createdDate:{type:Date, default:Date.now()},
    },
    
    {versionKey:false}
)
const productsModel = mongoose.model("products", dataSchema)
module.exports = productsModel;