import {Model as Product} from "sequelize";

const getAllProducts = async(req, res) => {
    let products = await Product.findAll();
    return res.json(products);
}

module.exports = {
    getAllProducts
}