'use strict'

var Solicitante = require('../models/solicitante'); //Nuestro modelo cliente va a estar inicializado en esta variable cliente
var bcrypt = require('bcrypt-nodejs'); //Llamamos al paquete instalado al inicio para encriptar contraseñas
var jwt = require('../Helpers/jwt'); //Para el token de cada usuario

const registro_solicitante = async function (req,res) {
    //
    var data =req.body; //Toda la data enviada estara en el cuerpo del request
    console.log(data)
    
        if(data){
            var reg = await Solicitante.create(data);
            res.status(200).send({data: reg});
            }else{
                    res.status(200).send({message: 'ErrorServer', data:undefined});
                }
            }

const lista_solicitante = async function (req,res){
                console.log(req.user);
                if(req.user){
                    if(req.user.role == 'admin'){
                        //Realizar el filtro de clientes
                        let tipo = req.params['tipo'];
                        let filtro = req.params['filtro'];
            
                        console.log(tipo);
            
                        if(tipo == null || tipo == 'null'){
                        let reg = await Solicitante.find();
                        console.log(reg)
                        res.status(200).send({data:reg});
                        }
                        else{
                            if(tipo == 'apellidos'){
                                let reg = await Solicitante.find({apellidos:new RegExp(filtro,'i')});
                                res.status(200).send({data:reg});
                            }else if(tipo == 'correo'){
                                let reg = await Solicitante.find({email:new RegExp(filtro,'i')});
                                res.status(200).send({data:reg});
                            }
                        }
                    }else{
                        res.status(500).send({message: 'NoAccess'});
                    }
                }else{
                    res.status(500).send({message: 'NoAccess'});
                }
}

const eliminar_solicitante = async function (req, res){
    if(req.user){
        if(req.user.role == 'admin'){

            var id = req.params['id'];

            let reg = await Solicitante.findByIdAndRemove({_id:id});
            res.status(200).send({data:reg})
            
        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const obtener_cliente_solicitante_id = async function (req, res){

    if(req.user){
        if(req.user.role == 'admin'){
            var id = req.params['id'];
            console.log(id)
            //si el id tiene el formato correcto te envia el registro , sino de envia undefined
        
            let reg = await Solicitante.findById({_id:'635ad48cd013da48e8d6a50b'});
            res.status(200).send({data:reg});

        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

module.exports = {
    registro_solicitante,
    lista_solicitante,
    eliminar_solicitante,
    obtener_cliente_solicitante_id
}