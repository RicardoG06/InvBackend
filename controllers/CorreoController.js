const {request, response} = require('express');
const nodeMailer = require('nodemailer');

const envio_Correo_negativo = (req = request, resp = response) =>{
    let body = req.body;

    console.log(body.email)

    let bobobdy = body.email

    bobody = "'" + bobobdy + "'"

    console.log(bobody)

    let config = nodeMailer.createTransport({
        host:'smtp.gmail.com',
        port: 587,
        auth:{
            user:'rgonzap42@gmail.com',
            pass:'pfsjymhosgcsexzx'
        }
    });

    config.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

    const opciones = {
        from: 'Equipo de Inventario - Fisi',
        subject: 'Estado de la solicitud de Inventario',
        to: body.email,
        text: 'Tu solicitud fue rechazada'
    };

    config.sendMail(opciones, function(error,result){

        if (error) return resp.json({ok:false,msg:error})
            return resp.json({
                ok:true,
                msg:result
            })
        })

}

const envio_Correo_afirmativo = (req = request, resp = response) =>{
    let body = req.body;

    console.log(body.email)

    let bobobdy = body.email

    bobody = "'" + bobobdy + "'"

    console.log(bobody)

    let config = nodeMailer.createTransport({
        host:'smtp.gmail.com',
        port: 587,
        auth:{
            user:'rgonzap42@gmail.com',
            pass:'pfsjymhosgcsexzx'
        }
    });

    config.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

    const opciones = {
        from: 'Equipo de Inventario - Fisi',
        subject: 'Estado de la solicitud de Inventario',
        to: body.email,
        text: 'Tu solicitud fue aceptada, acercate a la Facultad de Ingenieria de sistemas con tu dni, carnet universitario y tu solicitud impresa.'
    };

    config.sendMail(opciones, function(error,result){

        if (error) return resp.json({ok:false,msg:error})
            return resp.json({
                ok:true,
                msg:result
            })
        })

}

module.exports = {
    envio_Correo_negativo,
    envio_Correo_afirmativo
}