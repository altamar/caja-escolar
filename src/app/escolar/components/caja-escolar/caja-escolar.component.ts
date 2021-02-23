import { UrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { DatosUsuarioService } from 'src/app/core/servicios/datos-usuario.service';
import { GetBeneficiosService } from '../../../core/servicios/get-beneficios.service';
import { CustomApiService } from 'src/app/core/servicios/custom-api.service';
@Component({
  selector: 'app-caja-escolar',
  templateUrl: './caja-escolar.component.html',
  styleUrls: ['./caja-escolar.component.css'],
})
export class CajaEscolarComponent implements OnInit {

  id: string;

  getBeneficiariosOld = {
    estado: 'OK',
    respuesta: {
      codigoRespuesta: '2000',
      mensajeRespuesta: 'Consulta Exitosa.',
      idCampana: 2,
      nombreCampana: 'Caja Escolar',
      fechaEmision: '2020-12-01 16:34:04.0',
      perRut: 8553667,
      perDigito: '2',
      perNombre: 'HANISCH SANCHEZ RAIMUNDO',
      empRut: 92513000,
      empDigito: '1',
      empNombre: 'NAVIERAS ULTRANAV LIMITADA',
      tramoAF: 'A',
      cargas: [
        {
          cargaRut: '24000031',
          cargaDigito: '8',
          nombreCarga: 'SANCHEZ SILVA JOAQUIN',
          edadCarga: 8,
          sexoCarga: 'F',
          montoCupon: 11000,
          estadoCupon: 'Generado',
          fecEstado: '2021-01-12 17:17:01.700373',
          tipoCanje: null,
          nomComercio: 'Rhein',
          tipoEntrega: null,
          dirDespacho: null,
          comunaDespacho: null,
          regionDespacho: null,
          estadoDespacho: null,
          fecEstadoDespacho: null,
          idConvenio: 92,
          codigoCupon: 'ccat-6noxkjvcapqs',
          idBeneficio: 146,
        },
        {
          cargaRut: '22793449',
          cargaDigito: '2',
          nombreCarga: 'SANCHEZ SILVA JAVIER',
          edadCarga: 12,
          sexoCarga: 'F',
          montoCupon: 10000,
          estadoCupon: 'Generado',
          fecEstado: '2021-01-12 17:17:01.700691',
          tipoCanje: null,
          nomComercio: 'Lápiz López',
          tipoEntrega: null,
          dirDespacho: null,
          comunaDespacho: null,
          regionDespacho: null,
          estadoDespacho: null,
          fecEstadoDespacho: null,
          idConvenio: 95,
          codigoCupon: 'LL15KBCG19',
          idBeneficio: 138,
        },
        {
          cargaRut: '23308087',
          cargaDigito: 'K',
          nombreCarga: 'SANCHEZ SILVA NICOLAS',
          edadCarga: 10,
          sexoCarga: 'F',
          montoCupon: 15000,
          estadoCupon: 'Disponible',
          fecEstado: null,
          tipoCanje: null,
          nomComercio: null,
          tipoEntrega: null,
          dirDespacho: null,
          comunaDespacho: null,
          regionDespacho: null,
          estadoDespacho: null,
          fecEstadoDespacho: null,
          idConvenio: 0,
          codigoCupon: null,
          idBeneficio: 0,
        },
        {
          cargaRut: '22458081',
          cargaDigito: '9',
          nombreCarga: 'SANCEHZ SILVA TRINIDAD',
          edadCarga: 17,
          sexoCarga: 'F',
          montoCupon: 13000,
          estadoCupon: 'Disponible',
          fecEstado: null,
          tipoCanje: null,
          nomComercio: null,
          tipoEntrega: null,
          dirDespacho: null,
          comunaDespacho: null,
          regionDespacho: null,
          estadoDespacho: null,
          fecEstadoDespacho: null,
          idConvenio: 0,
          codigoCupon: null,
          idBeneficio: 0,
        },
        {
          cargaRut: '25393732',
          cargaDigito: '7',
          nombreCarga: 'SANCHEZ SILVA BERNARDITA',
          edadCarga: 4,
          sexoCarga: 'F',
          montoCupon: 15000,
          estadoCupon: 'Utilizado',
          fecEstado: '2021-01-12 17:17:01.802833',
          tipoCanje: null,
          nomComercio: 'Brave Up',
          tipoEntrega: null,
          dirDespacho: null,
          comunaDespacho: null,
          regionDespacho: null,
          estadoDespacho: null,
          fecEstadoDespacho: null,
          idConvenio: 114,
          codigoCupon: 'BR202012743',
          idBeneficio: 167,
        },
        {
          cargaRut: '22458082',
          cargaDigito: '7',
          nombreCarga: 'SANCHEZ SILVA PABLO',
          edadCarga: 14,
          sexoCarga: 'F',
          montoCupon: 15000,
          estadoCupon: 'Generado',
          fecEstado: '2021-01-12 17:17:01.787759',
          tipoCanje: null,
          nomComercio: 'Lápiz López',
          tipoEntrega: null,
          dirDespacho: null,
          comunaDespacho: null,
          regionDespacho: null,
          estadoDespacho: null,
          fecEstadoDespacho: null,
          idConvenio: 95,
          codigoCupon: 'LL15KZLBFX',
          idBeneficio: 138,
        },
      ],
    },
    errores: null,
  };

  getConvenioOld = {
    status: 1,
    result: [
      {
        idconvenio: '92',
        marca: 'Rhein',
        rut: '',
        bajada: 'Caja Escolar - Descuento',
        descripcion:
          'Art\u00edculos Escolares de las mejores marcas para acompa\u00f1ar tu vuelta a clases.',
        perfil: '1',
        inicio: '2021-01-04',
        termino: '2021-03-15',
        destacado: 'No',
        keyword: '',
        posicion: '99',
        web: 'www.rhein.cl',
        facebook: '',
        instagram: '',
        twitter: '',
        idcampana: '2',
        beneficios: [
          {
            idbeneficio: '73',
            descuento_principal: '11000',
            enquebr: 'De descuento adicional',
            enqueex: 'De descuento adicional',
            cuando: '',
            condiciones:
              'Despacho a todo Chile (costo de despacho RM entre $3.000 a $4.500, otras regiones entre $4.000 y $16.000). \r\nBeneficio disponible s\u00f3lo para compras online a trav\u00e9s del sitio web de Rhein.\r\nRecuerda que puedes descargar tambi\u00e9n un cup\u00f3n de descuento de Rhein para obtener ambos beneficios, son acumulables!\r\nDebes ser afiliado Caja los Andes para poder obtener el beneficio.\r\nCompra m\u00ednima por el valor del descuento para que \u00e9ste aplique.\r\nDescuento no aplica sobre el valor de despacho.',
            modalidad: 'Online',
            comoacceder:
              'Para obtener el beneficio ingresa el c\u00f3digo que te indique el cup\u00f3n cuando compres a trav\u00e9s del sitio web de Rhein.',
            mecanica:
              'Para obtener el beneficio ingresa el c\u00f3digo que te indique el cup\u00f3n cuando compres a trav\u00e9s del sitio web de Rhein.',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '91',
            descuento_principal: '10000',
            enquebr: 'De descuento adicional',
            enqueex: 'De descuento adicional',
            cuando: '',
            condiciones:
              'Despacho a todo Chile (costo de despacho RM entre $3.000 a $4.500, otras regiones entre $4.000 y $16.000). \r\nBeneficio disponible s\u00f3lo para compras online a trav\u00e9s del sitio web de Rhein.\r\nRecuerda que puedes descargar tambi\u00e9n un cup\u00f3n de descuento de Rhein para obtener ambos beneficios, son acumulables!\r\nDebes ser afiliado Caja los Andes para poder obtener el beneficio.\r\nCompra m\u00ednima por el valor del descuento para que \u00e9ste aplique.\r\nDescuento no aplica sobre el valor de despacho.',
            modalidad: 'Online',
            comoacceder:
              'Para obtener el beneficio ingresa el c\u00f3digo que te indique el cup\u00f3n cuando compres a trav\u00e9s de la p\u00e1gina web de Rhein o en cualquiera de sus tiendas adheridas dentro de la Regi\u00f3n Metropolitana. Debes ser afiliado Caja los Andes para poder obtener el c\u00f3digo de descuento.',
            mecanica:
              'Para obtener el beneficio ingresa el c\u00f3digo que te indique el cup\u00f3n cuando compres a trav\u00e9s de la p\u00e1gina web de Rhein o en cualquiera de sus tiendas adheridas dentro de la Regi\u00f3n Metropolitana. Debes ser afiliado Caja los Andes para poder obtener el c\u00f3digo de descuento.',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '145',
            descuento_principal: '13000',
            enquebr: 'De descuento adicional',
            enqueex: 'De descuento adicional',
            cuando: '',
            condiciones:
              'Despacho a todo Chile (costo de despacho RM entre $3.000 a $4.500, otras regiones entre $4.000 y $16.000). \r\nBeneficio disponible s\u00f3lo para compras online a trav\u00e9s del sitio web de Rhein.\r\nRecuerda que puedes descargar tambi\u00e9n un cup\u00f3n de descuento de Rhein para obtener ambos beneficios, son acumulables!\r\nDebes ser afiliado Caja los Andes para poder obtener el beneficio.\r\nCompra m\u00ednima por el valor del descuento para que \u00e9ste aplique.\r\nDescuento no aplica sobre el valor de despacho.',
            modalidad: 'Online',
            comoacceder:
              'Para obtener el beneficio ingresa el c\u00f3digo que te indique el cup\u00f3n cuando compres a trav\u00e9s del sitio web de Rhein.',
            mecanica:
              'Para obtener el beneficio ingresa el c\u00f3digo que te indique el cup\u00f3n cuando compres a trav\u00e9s del sitio web de Rhein.',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '146',
            descuento_principal: '15000',
            enquebr: 'De descuento adicional',
            enqueex: 'De descuento adicional',
            cuando: '',
            condiciones:
              'Despacho a todo Chile (costo de despacho RM entre $3.000 a $4.500, otras regiones entre $4.000 y $16.000). \r\nBeneficio disponible s\u00f3lo para compras online a trav\u00e9s del sitio web de Rhein.\r\nRecuerda que puedes descargar tambi\u00e9n un cup\u00f3n de descuento de Rhein para obtener ambos beneficios, son acumulables!\r\nDebes ser afiliado Caja los Andes para poder obtener el beneficio.\r\nCompra m\u00ednima por el valor del descuento para que \u00e9ste aplique.\r\nDescuento no aplica sobre el valor de despacho.',
            modalidad: 'Online',
            comoacceder:
              'Para obtener el beneficio ingresa el c\u00f3digo que te indique el cup\u00f3n cuando compres a trav\u00e9s del sitio web de Rhein.',
            mecanica:
              'Para obtener el beneficio ingresa el c\u00f3digo que te indique el cup\u00f3n cuando compres a trav\u00e9s del sitio web de Rhein.',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '71',
            descuento_principal: '40% dcto',
            enquebr: 'En art\u00edculos escolares',
            enqueex:
              'En productos seleccionados (Marcas: Rhein, Stabilo, Javi y Uhu), elementos de protecci\u00f3n y desinfecci\u00f3n, accesorios tecnol\u00f3gicos, productos descartables, celebraci\u00f3n y adornos, cajas, sobres y env\u00edos.',
            cuando: '',
            condiciones:
              'Despacho a todo Chile (costo de despacho RM entre $3.000 y $4.500, otras regiones entre $4.000 y $16.000).Beneficio disponible s\u00f3lo para compras online a trav\u00e9s del sitio web de Rhein.Debes ser afiliado Caja los Andes para poder obtener el beneficio.',
            modalidad: 'Online',
            comoacceder:
              'Para obtener el beneficio ingresa el c\u00f3digo que te indique el cup\u00f3n cuando compres a trav\u00e9s del sitio web de Rhein.',
            mecanica:
              'Para obtener el beneficio ingresa el c\u00f3digo que te indique el cup\u00f3n cuando compres a trav\u00e9s del sitio web de Rhein.',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '2',
            cuponbespecial:
              'Para obtener el beneficio ingresa el c\u00f3digo que te indique el cup\u00f3n cuando compres a trav\u00e9s del sitio web de Rhein.',
            tipo_producto: 'Descuento',
            tipobeneficio: '1',
            idbespecial: '2',
          },
        ],
        pilar: [{ idPilar: null, nombre: 'Caja Escolar' }],
        categoria: [{ idPilarCategoria: null, nombre: 'Caja Escolar' }],
        imagenes: {
          principal: [
            'https://website-dot-fi-gcp-prom-dev.uk.r.appspot.com/images/FIDELIS_ID_402.jpg',
          ],
          logo: [
            'https://website-dot-fi-gcp-prom-dev.uk.r.appspot.com/images/FIDELIS_ID_664.jpg',
          ],
        },
      },
      {
        idconvenio: '106',
        marca: 'Preunic',
        rut: '',
        bajada: 'Caja Escolar - Descuento',
        descripcion:
          'Art\u00edculos Escolares de las mejores marcas para acompa\u00f1ar tu vuelta a clases.',
        perfil: '1',
        inicio: '2021-01-04',
        termino: '2021-03-15',
        destacado: 'No',
        keyword: '',
        posicion: '99',
        web: 'www.preunic.cl',
        facebook: '',
        instagram: '',
        twitter: '',
        idcampana: '2',
        beneficios: [
          {
            idbeneficio: '89',
            descuento_principal: '11000',
            enquebr: 'De descuento adicional',
            enqueex:
              'Y accede a un:\r\n      25% de descuento en librer\u00eda, \u00fatiles escolares, herm\u00e9ticos, termos y botellas.\r\n      20% de descuento en elementos de protecci\u00f3n y desinfecci\u00f3n.\r\n      30% de descuento en mascarillas, toallas h\u00famedas y bucal.\r\n      35% de descuento en desodorantes.',
            cuando: '',
            condiciones:
              'Y accede a un:\r\n      25% de descuento en librer\u00eda, \u00fatiles escolares, herm\u00e9ticos, termos y botellas.\r\n      20% de descuento en elementos de protecci\u00f3n y desinfecci\u00f3n.\r\n      30% de descuento en mascarillas, toallas h\u00famedas y bucal.\r\n      35% de descuento en desodorantes.\r\n\r\n* Compra m\u00ednima por el valor del cup\u00f3n de descuento adicional.\r\n* No acumulable con otras promociones o descuentos.\r\n* Beneficio disponible para compras en cualquiera de sus tiendas f\u00edsicas a lo largo de todo Chile. Pr\u00f3ximamente disponible tambi\u00e9n para compras online.\r\n* Debes ser afiliado Caja los Andes para poder obtener el beneficio y presentar tu carnet de identidad al momento de la compra.',
            modalidad: 'Online',
            comoacceder:
              'Para obtener el beneficio presenta el c\u00f3digo que te indique el cup\u00f3n junto a tu carnet de identidad cuando compres en cualquiera de las tiendas Preunic a lo largo de todo Chile.',
            mecanica:
              'Para obtener el beneficio presenta el c\u00f3digo que te indique el cup\u00f3n junto a tu carnet de identidad cuando compres en cualquiera de las tiendas Preunic a lo largo de todo Chile.',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '90',
            descuento_principal: '10000',
            enquebr: 'De descuento adicional',
            enqueex:
              'Y accede a un:\r\n      25% de descuento en librer\u00eda, \u00fatiles escolares, herm\u00e9ticos, termos y botellas.\r\n      20% de descuento en elementos de protecci\u00f3n y desinfecci\u00f3n.\r\n      30% de descuento en mascarillas, toallas h\u00famedas y bucal.\r\n      35% de descuento en desodorantes.',
            cuando: '',
            condiciones:
              'Y accede a un:\r\n      25% de descuento en librer\u00eda, \u00fatiles escolares, herm\u00e9ticos, termos y botellas.\r\n      20% de descuento en elementos de protecci\u00f3n y desinfecci\u00f3n.\r\n      30% de descuento en mascarillas, toallas h\u00famedas y bucal.\r\n      35% de descuento en desodorantes.\r\n\r\n* Compra m\u00ednima por el valor del cup\u00f3n de descuento adicional.\r\n* No acumulable con otras promociones o descuentos.\r\n* Beneficio disponible para compras en cualquiera de sus tiendas f\u00edsicas a lo largo de todo Chile. Pr\u00f3ximamente disponible tambi\u00e9n para compras online.\r\n* Debes ser afiliado Caja los Andes para poder obtener el beneficio y presentar tu carnet de identidad al momento de la compra.',
            modalidad: 'Online',
            comoacceder:
              'Para obtener el beneficio presenta el c\u00f3digo que te indique el cup\u00f3n junto a tu carnet de identidad cuando compres en cualquiera de las tiendas Preunic a lo largo de todo Chile.',
            mecanica:
              'Para obtener el beneficio presenta el c\u00f3digo que te indique el cup\u00f3n junto a tu carnet de identidad cuando compres en cualquiera de las tiendas Preunic a lo largo de todo Chile.',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '147',
            descuento_principal: '13000',
            enquebr: 'De descuento adicional',
            enqueex:
              'Y accede a un:\r\n      25% de descuento en librer\u00eda, \u00fatiles escolares, herm\u00e9ticos, termos y botellas.\r\n      20% de descuento en elementos de protecci\u00f3n y desinfecci\u00f3n.\r\n      30% de descuento en mascarillas, toallas h\u00famedas y bucal.\r\n      35% de descuento en desodorantes.',
            cuando: '',
            condiciones:
              'Y accede a un:\r\n      25% de descuento en librer\u00eda, \u00fatiles escolares, herm\u00e9ticos, termos y botellas.\r\n      20% de descuento en elementos de protecci\u00f3n y desinfecci\u00f3n.\r\n      30% de descuento en mascarillas, toallas h\u00famedas y bucal.\r\n      35% de descuento en desodorantes.\r\n\r\n* Compra m\u00ednima por el valor del cup\u00f3n de descuento adicional.\r\n* No acumulable con otras promociones o descuentos.\r\n* Beneficio disponible para compras en cualquiera de sus tiendas f\u00edsicas a lo largo de todo Chile. Pr\u00f3ximamente disponible tambi\u00e9n para compras online.\r\n* Debes ser afiliado Caja los Andes para poder obtener el beneficio y presentar tu carnet de identidad al momento de la compra.',
            modalidad: 'Online',
            comoacceder:
              'Para obtener el beneficio presenta el c\u00f3digo que te indique el cup\u00f3n junto a tu carnet de identidad cuando compres en cualquiera de las tiendas Preunic a lo largo de todo Chile.',
            mecanica:
              'Para obtener el beneficio presenta el c\u00f3digo que te indique el cup\u00f3n junto a tu carnet de identidad cuando compres en cualquiera de las tiendas Preunic a lo largo de todo Chile.',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '148',
            descuento_principal: '15000',
            enquebr: 'De descuento adicional',
            enqueex:
              'Y accede a un:\r\n      25% de descuento en librer\u00eda, \u00fatiles escolares, herm\u00e9ticos, termos y botellas.\r\n      20% de descuento en elementos de protecci\u00f3n y desinfecci\u00f3n.\r\n      30% de descuento en mascarillas, toallas h\u00famedas y bucal.\r\n      35% de descuento en desodorantes.',
            cuando: '',
            condiciones:
              'Y accede a un:\r\n      25% de descuento en librer\u00eda, \u00fatiles escolares, herm\u00e9ticos, termos y botellas.\r\n      20% de descuento en elementos de protecci\u00f3n y desinfecci\u00f3n.\r\n      30% de descuento en mascarillas, toallas h\u00famedas y bucal.\r\n      35% de descuento en desodorantes.\r\n\r\n* Compra m\u00ednima por el valor del cup\u00f3n de descuento adicional.\r\n* No acumulable con otras promociones o descuentos.\r\n* Beneficio disponible para compras en cualquiera de sus tiendas f\u00edsicas a lo largo de todo Chile. Pr\u00f3ximamente disponible tambi\u00e9n para compras online.\r\n* Debes ser afiliado Caja los Andes para poder obtener el beneficio y presentar tu carnet de identidad al momento de la compra.',
            modalidad: 'Online',
            comoacceder:
              'Para obtener el beneficio presenta el c\u00f3digo que te indique el cup\u00f3n junto a tu carnet de identidad cuando compres en cualquiera de las tiendas Preunic a lo largo de todo Chile.',
            mecanica:
              'Para obtener el beneficio presenta el c\u00f3digo que te indique el cup\u00f3n junto a tu carnet de identidad cuando compres en cualquiera de las tiendas Preunic a lo largo de todo Chile.',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
        ],
        pilar: [{ idPilar: null, nombre: 'Caja Escolar' }],
        categoria: [{ idPilarCategoria: null, nombre: 'Caja Escolar' }],
        imagenes: {
          logo: [
            'https://website-dot-fi-gcp-prom-dev.uk.r.appspot.com/images/FIDELIS_ID_438.jpg',
          ],
        },
      },
      {
        idconvenio: '114',
        marca: 'Brave Up',
        rut: '',
        bajada: 'Caja Escolar',
        descripcion: 'Lorem ipsum dolor sit amet...',
        perfil: '1',
        inicio: '2020-12-15',
        termino: '2021-03-15',
        destacado: 'No',
        keyword: '',
        posicion: '99',
        web: 'www.braveup.cl',
        facebook: '',
        instagram: '',
        twitter: '',
        idcampana: '2',
        beneficios: [
          {
            idbeneficio: '93',
            descuento_principal: 'Gratis',
            enquebr: 'Cursos',
            enqueex: 'Cursos',
            cuando: '',
            condiciones: 'Por definir',
            modalidad: 'Online',
            comoacceder:
              'Para obtener el beneficio ingresa el c\u00f3digo que te indique el cup\u00f3n cuando te registres a trav\u00e9s de la p\u00e1gina web de BraveUp o. Debes ser afiliado Caja los Andes para poder obtener el c\u00f3digo de descuento.',
            mecanica:
              'Para obtener el beneficio ingresa el c\u00f3digo que te indique el cup\u00f3n cuando te registres a trav\u00e9s de la p\u00e1gina web de BraveUp o. Debes ser afiliado Caja los Andes para poder obtener el c\u00f3digo de descuento.',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '2',
            cuponbespecial: '',
            tipo_producto: 'Descuento',
            tipobeneficio: '1',
            idbespecial: '2',
          },
        ],
        pilar: [{ idPilar: null, nombre: 'Caja Escolar' }],
        categoria: [{ idPilarCategoria: null, nombre: 'Caja Escolar' }],
        imagenes: {
          logo: [
            'https://website-dot-fi-gcp-prom-dev.uk.r.appspot.com/images/FIDELIS_ID_486.jpg',
          ],
          principal: [
            'https://website-dot-fi-gcp-prom-dev.uk.r.appspot.com/images/FIDELIS_ID_487.jpg',
          ],
        },
      },
      {
        idconvenio: '173',
        marca: 'Cencosud',
        rut: '',
        bajada: 'Caja Escolar',
        descripcion: 'xxx',
        perfil: '1',
        inicio: '2020-12-15',
        termino: '2021-03-15',
        destacado: 'No',
        keyword: '',
        posicion: '99',
        web: '',
        facebook: '',
        instagram: '',
        twitter: '',
        idcampana: '2',
        beneficios: [
          {
            idbeneficio: '160',
            descuento_principal: '10000',
            enquebr: 'Gift Card',
            enqueex: 'Gift Card',
            cuando: '',
            condiciones: 'xx',
            modalidad: 'Online',
            comoacceder: 'xx',
            mecanica: 'xx',
            emitecodigo: 'Si',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '161',
            descuento_principal: '11000',
            enquebr: 'Gift Card',
            enqueex: 'Gift Card',
            cuando: '',
            condiciones: '',
            modalidad: 'Online',
            comoacceder: '',
            mecanica: '',
            emitecodigo: 'Si',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '162',
            descuento_principal: '13000',
            enquebr: 'Gift Card',
            enqueex: 'Gift Card',
            cuando: '',
            condiciones: '',
            modalidad: 'Online',
            comoacceder: '',
            mecanica: '',
            emitecodigo: 'Si',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '163',
            descuento_principal: '15000',
            enquebr: 'Gift Card',
            enqueex: 'Gift Card',
            cuando: 'ddddd',
            condiciones: 'Condiciones cencosud',
            modalidad: 'Online',
            comoacceder: 'Como acceder cencosud',
            mecanica: 'ddddd',
            emitecodigo: 'Si',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
        ],
        pilar: [{ idPilar: null, nombre: 'Caja Escolar' }],
        categoria: [{ idPilarCategoria: null, nombre: 'Caja Escolar' }],
        imagenes: {
          logo: [
            'https://website-dot-fi-gcp-prom-dev.uk.r.appspot.com/images/FIDELIS_ID_736.jpg',
          ],
        },
      },
      {
        idconvenio: '179',
        marca: 'Santillana\r\n',
        rut: null,
        bajada: 'Caja Escolar\r\n',
        descripcion:
          'Art\u00edculos Escolares para acompa\u00f1ar tu vuelta a clases.',
        perfil: '1',
        inicio: '2021-01-11',
        termino: '2021-03-15',
        destacado: 'No',
        keyword: null,
        posicion: '99',
        web: null,
        facebook: null,
        instagram: null,
        twitter: null,
        idcampana: '2',
        beneficios: [
          {
            idbeneficio: '174',
            descuento_principal: '10000',
            enquebr: 'test',
            enqueex: 'test',
            cuando: null,
            condiciones: 'test',
            modalidad: 'Online',
            comoacceder: 'test',
            mecanica: 'test',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '175',
            descuento_principal: '11000',
            enquebr: 'test',
            enqueex: 'test',
            cuando: null,
            condiciones: 'test',
            modalidad: 'Online',
            comoacceder: 'test',
            mecanica: 'test',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '176',
            descuento_principal: '13000',
            enquebr: 'test',
            enqueex: 'test',
            cuando: null,
            condiciones: 'test',
            modalidad: 'Online',
            comoacceder: 'test',
            mecanica: 'test',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '177',
            descuento_principal: '15000',
            enquebr: 'test',
            enqueex: 'test',
            cuando: null,
            condiciones: 'test',
            modalidad: 'Online',
            comoacceder: 'test',
            mecanica: 'test',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Copago',
            tipobeneficio: '1',
            idbespecial: '1',
          },
          {
            idbeneficio: '173',
            descuento_principal: '0%',
            enquebr: 'test',
            enqueex: 'test',
            cuando: '',
            condiciones: 'test',
            modalidad: 'Online',
            comoacceder: 'test',
            mecanica: 'test',
            emitecodigo: 'No',
            tipocodigo: 'Sin Codigo',
            beneficioespecial: '1',
            cuponbespecial: '',
            tipo_producto: 'Descuento',
            tipobeneficio: '1',
            idbespecial: '2',
          },
        ],
      },
    ],
  };

  getBeneficiarios: any;
  getConvenio: any;

  showCupon: boolean;
  showCargas: boolean = true;

  dataCupon: any;


  constructor(
    private datosUsuario: DatosUsuarioService,
    private getBeneficiosService: GetBeneficiosService,
    private customApi: CustomApiService
  ) {}

  ngOnInit(): void {

    // //Datos usuario
    // this.datosUsuario.datosUsuario$.subscribe((data) => {
    //   this.getBeneficiarios = data;
    // })

    // //Datos Convenio
    // this.getBeneficiosService.beneficios$.subscribe((data) => {
    //   this.getConvenio = data;
    // })

    // this.getBeneficiosService.getEspecials()

    this.customApi.datosUsuarioCustom$.subscribe((data) => {
      this.getBeneficiarios = data;
    })
    this.customApi.datosConvenioCustom$.subscribe((data) => {
      this.getConvenio = data;
    })

    this.customApi.getEspecials()

  }

  onShow(data: any){
    this.dataCupon = data;
  }

}

