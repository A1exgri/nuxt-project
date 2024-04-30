import {Model as Address} from "sequelize";

const addAddress = async(req, res) => {
    let address = {
        userId: req.body.userId,
        name: req.body.name,
        address: req.body.address,
        zipcode: req.body.zipCode,
        city: req.body.city,
        country: req.body.country
    }
    const resp = await Address.create();
    return res.json(resp);
}

const updateAddress = async(req, res) => {
    let address = await Address.findOne({ where: { id: req.params.id } });
    const newAddress = {

    }
}

module.exports = {
    addAddress,
    updateAddress
}