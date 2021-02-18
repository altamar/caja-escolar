import {Enviroment} from './environment.model';

export const ENV: Enviroment = {
  API_URL_TOKEN: 'https://api-dev.cajalosandes.cl/oauth2/pwd/token',
  API_URL : 'https://api-dev.cajalosandes.cl/beneficiosocial/campana_convenios/v1',
  API_URL_CUSTOM : 'http://localhost:4000/api',
  grant_type: 'password',
  x_api_key: 'mqOy9QTlAniEiAgoTKnnsuVEFIH1TdSh',
  authorization: 'bXFPeTlRVGxBbmlFaUFnb1RLbm5zdVZFRklIMVRkU2g6TE51SEF0M003YXlDbGhPUg==',
  //authorization: 'VGF4clFFREdJT1ZIWERVbFh2NENvSFk4cXFLdEFMelM6R0dRajc1cEdBWVJscEt0Zg==',
  username: 'svp@cajalosandes.cl', //cla@cajalosandes.cl //svp@cajalosandes.cl
  password: 'kRgRvdP8hYnrZdE', //JxSvqeFWCCpjTuD //kRgRvdP8hYnrZdE
  production: false,
  sizefile: 2000000,
  API_URL_Portabilidad : 'https://api-dev.cajalosandes.cl/portabilidad-financiera/v1'
};
