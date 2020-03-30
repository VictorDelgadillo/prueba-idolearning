import { Router, Request, Response } from 'express';
import { PRIVATEKEY,CADUCIDAD_TOKEN } from '../global/enviroments';
const { verificaToken } = require('../middlewares/autenticacion');


const jwt = require('jsonwebtoken');

const router = Router();

router.post('/login', (req,res,next)=>{
  console.log(req.body);
       // Generamos token
       jwt.sign({
        username: req.body.username
      },
      PRIVATEKEY, { expiresIn: CADUCIDAD_TOKEN }, (error:any, token:any) => {    
        res.status(200).send(token);
        // respuesta json
/*           res.json({
            token
          }); */
        });
});

router.post('/verify',verificaToken,(req,res,next)=>{
  res.status(200).send("verificado");

  // respuesta json
   /*  res.json({
        response: "verificado",
    }); */
  });

export default router;   