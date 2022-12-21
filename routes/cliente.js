'use strict'

var express = require('express');
var clientecontroller = require('../controllers/ClienteController');
var solicitanteController = require('../controllers/SolicitanteController');
var correoController = require('../controllers/CorreoController');
var ventaController = require('../controllers/VentaController');

var api = express.Router();
var auth = require('../Middlewares/authenticate');

api.post('/registro_cliente', clientecontroller.registro_cliente);
api.post('/login_cliente', clientecontroller.login_cliente);
api.get('/listar_clientes_filtro_admin/:tipo/:filtro?',auth.auth, clientecontroller.listar_clientes_filtro_admin);
api.post('/registro_cliente_admin', auth.auth, clientecontroller.registro_cliente_admin);
api.get('/obtener_cliente_admin/:id', auth.auth , clientecontroller.obtener_cliente_admin); 
api.put('/actualizar_cliente_admin/:id', auth.auth , clientecontroller.actualizar_cliente_admin); 
api.delete('/eliminar_cliente_admin/:id', auth.auth , clientecontroller.eliminar_cliente_admin);
api.get('/obtener_cliente_guest/:id',auth.auth,clientecontroller.obtener_cliente_guest);
api.put('/actualizar_perfil_cliente_guest/:id' , auth.auth , clientecontroller.actualizar_perfil_cliente_guest)

//Solicitante

api.post('/enviar_cliente_solicitante/',solicitanteController.registro_solicitante);
api.get('/obtener_cliente_solicitante_masid/:id',auth.auth,solicitanteController.obtener_cliente_solicitante_id);
api.get('/obtener_cliente_solicitante/:tipo/:filtro?',auth.auth, solicitanteController.lista_solicitante);
api.delete('/eliminar_cliente_solicitante/:id', auth.auth , solicitanteController.eliminar_solicitante);

//EnvioCorreo

api.post('/envio_correo_negativo/', correoController.envio_Correo_negativo);
api.post('/envio_correo_positivo/', correoController.envio_Correo_afirmativo);

//Actualizacion de Stock
api.post('/actualizacion_stock_por_prestamo/', ventaController.actualizacion_stock_por_prestamo);

//Direccion
api.post('/registro_direccion_cliente',auth.auth , clientecontroller.registro_direccion_cliente);
api.get('/obtener_direccion_todos_cliente/:id', auth.auth , clientecontroller.obtener_direccion_todos_cliente);
api.put('/cambiar_direccion_principal_cliente/:id/:cliente', auth.auth , clientecontroller.cambiar_direccion_principal_cliente);
api.get('/obtener_direccion_principal_cliente/:id',auth.auth , clientecontroller.obtener_direccion_principal_cliente);

module.exports = api;