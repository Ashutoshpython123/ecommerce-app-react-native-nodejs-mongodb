const Products = require('../models/productModel');



class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString
    }
    filtering(){
        const queryObj = {...this.queryString}
        console.log(queryObj)
        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(e1 => delete(queryObj[e1]))
        console.log(queryObj)
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|lte|gt|lt|regex)\b/g, match => '$' + match)
        this.query.find(JSON.parse(queryStr))
        console.log(queryObj, queryStr)
        return this;
    }
    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }
        return this;
    }
    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 1
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const productController = {
    getProducts: async (req, res) => {
        try {
            const feature = new APIfeatures(Products.find(), req.query).filtering().sorting()
            const products = await feature.query
            res.json({
                status : 'success',
                result : products.length,
                products : products
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    createProduct: async (req, res) => {
        try {
            const {product_id, title, price, decription, content, images, category} = req.body
            if(!images){
                return res.status(400).json({msg : "image is not uploded"})
            }
            const product = await Products.findOne({product_id})
            if(product){
                return res.status(400).json({msg: "this product is already exist"})
            }

            const newProduct = new Products({
                product_id, title : title.toLowerCase(), price, decription, content, images, category
            })
            await newProduct.save()
            res.json({msg : "new product is created"})

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteProduct: async (req, res) => {
        try {
            await Products.findByIdAndDelete(req.params.id)
            res.json({msg : "product is deleted"})
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateProduct: async (req, res) => {
        try {
            const {product_id, title, price, decription, content, images, category} = req.body
            if(!images){
                return res.status(400).json({msg : "no image uploaded"})
            }
            await Products.findOneAndUpdate({_id : req.params.id}, {
                title : title.toLowerCase(), price, decription, content, images, category
            })
            res.json({msg: "product is updated "})
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = productController;