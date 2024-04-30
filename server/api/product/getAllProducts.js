import {Model as Product} from "sequelize";

export default defineEventHandler(async(req, res) => {
    let products = await Product.findAll();
    return res.status(200).json(products);
})