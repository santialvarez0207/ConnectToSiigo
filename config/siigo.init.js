
import * as SiigoApi from 'siigo_api';
import dotenv from 'dotenv';
dotenv.config();

SiigoApi.initialize({
  basePath:  'https://services.siigo.com/alliances/api',
  urlSignIn: 'https://services.siigo.com/alliances/api/siigoapi-users/v1/sign-in'
});


await SiigoApi.signIn({
  userName : process.env.SIIGO_USER,
  accessKey: process.env.SIIGO_KEY
});

export { SiigoApi };
