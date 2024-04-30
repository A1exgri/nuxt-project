'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
      Order.belongsTo(models.OrderItem, {
        foreignKey: 'product_id'
      })
    }
  }
  Order.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    stripeId: DataTypes.INTEGER,
    orderItem: DataTypes.ARRAY
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};