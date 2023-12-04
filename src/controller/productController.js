const ProductModel = require("../model/productModel");

// C=CREATE
exports.CreateProduct = async (req, res)=>{
    try{
        let reqBody = req.body;
        let result = await ProductModel.Create(reqBody);
        res.status(200).json({status:"Product Created", data:result})
    }catch(e){
        res.status(200).json({status:"Unsuccess", data:e})
}
}

// R=READ
exports.ReadProduct = async (req, res)=>{
    try{
        let query = {};
        let projection = "productName productCode img unitPrice qty totalPrice";
        let result = await ProductModel.find(query, projection);
        res.status(200).json({status:"Success", data:result})
    }catch(e){
        res.status(200).json({status:"Unsuccess", data:e})
}
}

// U=UPDATE
exports.UpdateProduct=async (req, res)=>{
    try {
        let id = req.params.id;
        let query = {_id:id}
        let reqBody = req.body;
        let result = await ProductModel.updateOne(query, reqBody);
        res.status(200).json({status:"Product Update Success", data:result})
    } catch (e) {
        res.status(200).json({status:"Unsuccess", data:e})
    }
}

// D=DELETE
exports.DeleteProduct=async (req, res)=>{
    try {
        let id = req.params.id;
        let query = {_id:id}
        let result = await ProductModel.updateOne(query);
        res.status(200).json({status:"Product Delete Success", data:result})
    } catch (e) {
        res.status(200).json({status:"Unsuccess", data:e})
    }
}