'use strict'

var Producto = require('../models/producto'); //Nuestro modelo cliente va a estar inicializado en esta variable cliente
var bcrypt = require('bcrypt-nodejs'); //Llamamos al paquete instalado al inicio para encriptar contraseñas
var jwt = require('../Helpers/jwt'); //Para el token de cada usuario

const actualizacion_stock_por_prestamo = async function (req,res) {
    var data =req.body;
    //
    let element_producto = await Producto.findById({_id:'632cc6608f33631f28cde2c7'})
    let new_stock = element_producto.stock - 1;

    await Producto.findByIdAndUpdate({_id:'632cc6608f33631f28cde2c7'},{
        stock:new_stock
    });
}

module.exports = {
    actualizacion_stock_por_prestamo
}