const jwt = require('jsonwebtoken');
import { PRIVATEKEY } from '../global/enviroments';
import { Request, Response, NextFunction } from 'express';

// ==============================
// Verificar Token
// ==============================


function  verificaToken (req: Request, res: Response, next: NextFunction){

    let token = req.headers['authorization'];

    if (typeof token !== 'undefined') {
        token = token.replace('Bearer ', '');


        // Si el formato del token esta bien "Beare sadasdsd" verifica si éste es válido
        // Funcion propia del jwt para verificar si el token es valido respecto a seed que define en el config
        jwt.verify(token, PRIVATEKEY, (err:any, decoded:any) => {
            if (err) {
                return res.status(401).send("Token no válido")
            }
            // si esta todo ok decoded trae la informacion del payload y generamos una nueva propiedad del req llamada usuario
            req = decoded;
            next();
        });
    } else {
        return res.status(403).send("No se ha proporcionado un Token")
    }
}

module.exports = {
verificaToken: verificaToken
}