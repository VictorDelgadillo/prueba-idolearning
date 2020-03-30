import Server from './classes/server';
import  apiRouter  from './routes/router';

import bodyParser from 'body-parser';
import cors from 'cors';

const server =  Server.instance;


//////////////////////////////////////
/////////////   Middlewares  ////////
/////////////////////////////////////

// parse requests of content-type - application/x-www-form-urlencoded
server.app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
server.app.use(bodyParser.json())


// CORS
server.app.use( cors({ origin:true, credentials:true}));

// ROUTES
server.app.use('/',apiRouter)


server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
});