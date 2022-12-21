'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SolicitanteSchema = Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    email: {type: String, required: true},
    solicitud: {type: String, default: 'raa.pdf', required: true},
    telefono: {type: String, required: false},
    createdAt : {type: Date, default: Date.now, required: true},
    productos: [mongoose.Schema.Types.Mixed]
});

module.exports = mongoose.model('solicitante',SolicitanteSchema);