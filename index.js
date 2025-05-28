import express from 'express';
import * as SiigoApi from 'siigo_api';
import dotenv from 'dotenv'; dotenv.config();
import productsRouter from './routes/products.routes.js';

const user = process.env.SIIGO_USER;
const key  = process.env.SIIGO_KEY;
const port = process.env.PORT || 3000;

SiigoApi.initialize({
  basePath: 'https://services.siigo.com/alliances/api',        
  urlSignIn: 'https://services.siigo.com/alliances/api/siigoapi-users/v1/sign-in'
});


// Autenticarse al arrancar
await SiigoApi.signIn({
  userName: user,
  accessKey: key
});


const app = express();
app.use(express.json());
app.use('/products', productsRouter);



const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () =>
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
);