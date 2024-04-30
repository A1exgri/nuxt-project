'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      OrderItem.belongsTo(models.Order, {
        ForeignKey: 'orderId'
      })
      OrderItem.belongsTo(models.Product, {
        ForeignKey: 'productId'
      })
    }
  }
  OrderItem.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};