import {Model as Order} from "sequelize";
import setNewItem from "~/controllers/orderItemController";

const createOrder = async(req, res) => {
    const newOrder = {
        userId: req.body.userId,
        stripeId: req.body.stripeId,
        name: req.body.name,
        address: req.body.address,
        zipcode: req.body.zipCode,
        city: req.body.city,
        country: req.body.country
    }
    try {
        await Order.create(newOrder);
        await setNewItem(req.body.products)
        return res.json(newOrder);
    } catch (e) {
        console.log("error creating Product", e);
        res.status(500).json({error: e});
    }
}



module.exports = {
    createOrder
}