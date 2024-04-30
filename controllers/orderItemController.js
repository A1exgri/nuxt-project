import {OrderItem} from "sequelize";

const setNewItem = (items) => {
    items.forEach((p) => {
        try {
            OrderItem.create({
                productId: p.productId,
                orderId: p.orderId,
            })
        } catch (error) {
            console.log(error)
        }
    })
}

module.exports = {
    setNewItem
}