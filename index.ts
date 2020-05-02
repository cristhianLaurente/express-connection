import { Server } from './src/config/server';

let objServer = new Server();
objServer.start__server();

// comandos
// 1.-  npm i    esto descargara todas las devenpedencias que eh usado
// 2.-  tsc -w    esto hara correr al typescript y creara una carpeta dist
// 3.- npm start    esto correra el index.js generado 

// tienes que tener nodemon 
// fijate en la carpeta config, sequelize -> tienes que poner el nombre de la base de datos tu nombre de usuario y tu password  de mysql

// si tienes postman podras colocar esta ruta  http://localhost:3000/users   es la ruta que trae usuarios
// crea tus usuarios manualmente en el mysql para que hagas tus pruebas
// coloque algunos campos en el modelo de usuario