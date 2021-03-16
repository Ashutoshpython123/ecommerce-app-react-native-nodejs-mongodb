const Category = require('../models/categoryModel');


const categoryController = {
    getCategories: async (req, res) => {
        const categories = await Category.find()
        return res.json(categories)
    },
    createCategory: async (req, res) => {
        try {
            const { name } = req.body;
            const category = await Category.findOne({ name });

            if (category) {
                return res.status(400).json({ msg: "this category is already exist" })
            }
            const newCategory = new Category({ name })
            await newCategory.save()
            res.json('new category is created')
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteCategory: async (req, res) => {
        try {
            console.log('1232344')
            await Category.findByIdAndDelete(req.params.id)
            res.json({ msg: "category deleted" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateCategory : async (req, res) => {
        try{
            const {name} = req.body;
            await Category.findByIdAndUpdate({_id : req.params.id}, {name})
            res.json({msg: "update category"})
        }catch(err){
            return res.status(500).json({msg : err.message})
        }
    }
}

module.exports = categoryController;