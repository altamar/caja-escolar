import { UrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { GetParametersService } from '../../../core/servicios/get-parameters.service';
import { ApHttpClient } from '../../../core/servicios/Ap-http-client';

@Component({
  selector: 'app-caja-escolar',
  templateUrl: './caja-escolar.component.html',
  styleUrls: ['./caja-escolar.component.css']
})
export class CajaEscolarComponent implements OnInit{


  getBeneficiarios = {
    "estado": "OK",
    "respuesta": {
        "codigoRespuesta": "2000",
        "mensajeRespuesta": "Consulta Exitosa.",
        "idCampana": 2,
        "nombreCampana": "Caja Escolar",
        "fechaEmision": "2020-12-30 00:00:00.0",
        "perRut": 7472235,
        "perDigito": "0",
        "perNombre": "ANDRES DELPIANO BARROS",
        "empRut": 96954630,
        "empDigito": "2",
        "empNombre": "SALFA GESTION S.A.",
        "tramoAF": "A",
        "cargas": [
            {
                "cargaRut": "22561032",
                "cargaDigito": "0",
                "nombreCarga": "DELPIANO URRUTIA JOSE MANUEL",
                "edadCarga": 13,
                "sexoCarga": "M",
                "montoCupon": 15000,
                "estadoCupon": "Disponible",
                "fecEstado": null,
                "tipoCanje": null,
                "nomComercio": null,
                "tipoEntrega": null,
                "dirDespacho": null,
                "comunaDespacho": null,
                "regionDespacho": null,
                "estadoDespacho": null,
                "fecEstadoDespacho": null,
                "idConvenio": 0,
                "codigoCupon": null,
                "idBeneficio": 0
            },
            {
                "cargaRut": "24796500",
                "cargaDigito": "9",
                "nombreCarga": "DELPIANO URRUTIA JUAN PABLO",
                "edadCarga": 6,
                "sexoCarga": "M",
                "montoCupon": 15000,
                "estadoCupon": "Disponible",
                "fecEstado": null,
                "tipoCanje": null,
                "nomComercio": null,
                "tipoEntrega": null,
                "dirDespacho": null,
                "comunaDespacho": null,
                "regionDespacho": null,
                "estadoDespacho": null,
                "fecEstadoDespacho": null,
                "idConvenio": 0,
                "codigoCupon": null,
                "idBeneficio": 0
            },
            {
                "cargaRut": "23284777",
                "cargaDigito": "8",
                "nombreCarga": "DELPIANO URRUTIA BENJAMIN",
                "edadCarga": 11,
                "sexoCarga": "M",
                "montoCupon": 15000,
                "estadoCupon": "Disponible",
                "fecEstado": null,
                "tipoCanje": null,
                "nomComercio": null,
                "tipoEntrega": null,
                "dirDespacho": null,
                "comunaDespacho": null,
                "regionDespacho": null,
                "estadoDespacho": null,
                "fecEstadoDespacho": null,
                "idConvenio": 0,
                "codigoCupon": null,
                "idBeneficio": 0
            },
            {
                "cargaRut": "21271104",
                "cargaDigito": "7",
                "nombreCarga": "DELPIANO URRUTIA NICOLAS",
                "edadCarga": 17,
                "sexoCarga": "M",
                "montoCupon": 15000,
                "estadoCupon": "Disponible",
                "fecEstado": null,
                "tipoCanje": null,
                "nomComercio": null,
                "tipoEntrega": null,
                "dirDespacho": null,
                "comunaDespacho": null,
                "regionDespacho": null,
                "estadoDespacho": null,
                "fecEstadoDespacho": null,
                "idConvenio": 0,
                "codigoCupon": null,
                "idBeneficio": 0
            },
            {
                "cargaRut": "21621839",
                "cargaDigito": "6",
                "nombreCarga": "DELPIANO URRUTIA PATRICIO",
                "edadCarga": 16,
                "sexoCarga": "M",
                "montoCupon": 15000,
                "estadoCupon": "Disponible",
                "fecEstado": null,
                "tipoCanje": null,
                "nomComercio": null,
                "tipoEntrega": null,
                "dirDespacho": null,
                "comunaDespacho": null,
                "regionDespacho": null,
                "estadoDespacho": null,
                "fecEstadoDespacho": null,
                "idConvenio": 0,
                "codigoCupon": null,
                "idBeneficio": 0
            }
        ]
    },
    "errores": null
  };

  getConvenio = {
    "status": 1,
    "result": [
        {
            "idconvenio": "92",
            "marca": "Rhein",
            "rut": "",
            "bajada": "Caja Escolar - Descuento",
            "descripcion": "Artículos Escolares de las mejores marcas para acompañar tu vuelta a clases.",
            "perfil": "1",
            "inicio": "2021-01-04",
            "termino": "2021-03-15",
            "destacado": "No",
            "keyword": "",
            "posicion": "99",
            "web": "www.rhein.cl",
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "idcampana": "2",
            "beneficios": [
                {
                    "idbeneficio": "73",
                    "descuento_principal": "11000",
                    "enquebr": "De descuento adicional",
                    "enqueex": "De descuento adicional",
                    "cuando": "",
                    "condiciones": "Despacho a todo Chile (costo de despacho RM entre $3.000 a $4.500, otras regiones entre $4.000 y $16.000). \r\nBeneficio disponible sólo para compras online a través del sitio web de Rhein.\r\nRecuerda que puedes descargar también un cupón de descuento de Rhein para obtener ambos beneficios, son acumulables!\r\nDebes ser afiliado Caja los Andes para poder obtener el beneficio.\r\nCompra mínima por el valor del descuento para que éste aplique.\r\nDescuento no aplica sobre el valor de despacho.",
                    "modalidad": "Online",
                    "comoacceder": "Para obtener el beneficio ingresa el código que te indique el cupón cuando compres a través del sitio web de Rhein.",
                    "mecanica": "Para obtener el beneficio ingresa el código que te indique el cupón cuando compres a través del sitio web de Rhein.",
                    "emitecodigo": "No",
                    "tipocodigo": "Sin Codigo",
                    "beneficioespecial": "1",
                    "cuponbespecial": "",
                    "tipo_producto": "Copago",
                    "tipobeneficio": "1",
                    "idbespecial": "1"
                },
                {
                    "idbeneficio": "91",
                    "descuento_principal": "10000",
                    "enquebr": "De descuento adicional",
                    "enqueex": "De descuento adicional",
                    "cuando": "",
                    "condiciones": "Despacho a todo Chile (costo de despacho RM entre $3.000 a $4.500, otras regiones entre $4.000 y $16.000). \r\nBeneficio disponible sólo para compras online a través del sitio web de Rhein.\r\nRecuerda que puedes descargar también un cupón de descuento de Rhein para obtener ambos beneficios, son acumulables!\r\nDebes ser afiliado Caja los Andes para poder obtener el beneficio.\r\nCompra mínima por el valor del descuento para que éste aplique.\r\nDescuento no aplica sobre el valor de despacho.",
                    "modalidad": "Online",
                    "comoacceder": "Para obtener el beneficio ingresa el código que te indique el cupón cuando compres a través de la página web de Rhein o en cualquiera de sus tiendas adheridas dentro de la Región Metropolitana. Debes ser afiliado Caja los Andes para poder obtener el código de descuento.",
                    "mecanica": "Para obtener el beneficio ingresa el código que te indique el cupón cuando compres a través de la página web de Rhein o en cualquiera de sus tiendas adheridas dentro de la Región Metropolitana. Debes ser afiliado Caja los Andes para poder obtener el código de descuento.",
                    "emitecodigo": "No",
                    "tipocodigo": "Sin Codigo",
                    "beneficioespecial": "1",
                    "cuponbespecial": "",
                    "tipo_producto": "Copago",
                    "tipobeneficio": "1",
                    "idbespecial": "1"
                },
                {
                    "idbeneficio": "145",
                    "descuento_principal": "13000",
                    "enquebr": "De descuento adicional",
                    "enqueex": "De descuento adicional",
                    "cuando": "",
                    "condiciones": "Despacho a todo Chile (costo de despacho RM entre $3.000 a $4.500, otras regiones entre $4.000 y $16.000). \r\nBeneficio disponible sólo para compras online a través del sitio web de Rhein.\r\nRecuerda que puedes descargar también un cupón de descuento de Rhein para obtener ambos beneficios, son acumulables!\r\nDebes ser afiliado Caja los Andes para poder obtener el beneficio.\r\nCompra mínima por el valor del descuento para que éste aplique.\r\nDescuento no aplica sobre el valor de despacho.",
                    "modalidad": "Online",
                    "comoacceder": "Para obtener el beneficio ingresa el código que te indique el cupón cuando compres a través del sitio web de Rhein.",
                    "mecanica": "Para obtener el beneficio ingresa el código que te indique el cupón cuando compres a través del sitio web de Rhein.",
                    "emitecodigo": "No",
                    "tipocodigo": "Sin Codigo",
                    "beneficioespecial": "1",
                    "cuponbespecial": "",
                    "tipo_producto": "Copago",
                    "tipobeneficio": "1",
                    "idbespecial": "1"
                },
                {
                    "idbeneficio": "146",
                    "descuento_principal": "15000",
                    "enquebr": "De descuento adicional",
                    "enqueex": "De descuento adicional",
                    "cuando": "",
                    "condiciones": "Despacho a todo Chile (costo de despacho RM entre $3.000 a $4.500, otras regiones entre $4.000 y $16.000). \r\nBeneficio disponible sólo para compras online a través del sitio web de Rhein.\r\nRecuerda que puedes descargar también un cupón de descuento de Rhein para obtener ambos beneficios, son acumulables!\r\nDebes ser afiliado Caja los Andes para poder obtener el beneficio.\r\nCompra mínima por el valor del descuento para que éste aplique.\r\nDescuento no aplica sobre el valor de despacho.",
                    "modalidad": "Online",
                    "comoacceder": "Para obtener el beneficio ingresa el código que te indique el cupón cuando compres a través del sitio web de Rhein.",
                    "mecanica": "Para obtener el beneficio ingresa el código que te indique el cupón cuando compres a través del sitio web de Rhein.",
                    "emitecodigo": "No",
                    "tipocodigo": "Sin Codigo",
                    "beneficioespecial": "1",
                    "cuponbespecial": "",
                    "tipo_producto": "Copago",
                    "tipobeneficio": "1",
                    "idbespecial": "1"
                },
                {
                    "idbeneficio": "71",
                    "descuento_principal": "40% dcto",
                    "enquebr": "En artículos escolares",
                    "enqueex": "En productos seleccionados (Marcas: Rhein, Stabilo, Javi y Uhu), elementos de protección y desinfección, accesorios tecnológicos, productos descartables, celebración y adornos, cajas, sobres y envíos.",
                    "cuando": "",
                    "condiciones": "Despacho a todo Chile (costo de despacho RM entre $3.000 y $4.500, otras regiones entre $4.000 y $16.000).Beneficio disponible sólo para compras online a través del sitio web de Rhein.Debes ser afiliado Caja los Andes para poder obtener el beneficio.",
                    "modalidad": "Online",
                    "comoacceder": "Para obtener el beneficio ingresa el código que te indique el cupón cuando compres a través del sitio web de Rhein.",
                    "mecanica": "Para obtener el beneficio ingresa el código que te indique el cupón cuando compres a través del sitio web de Rhein.",
                    "emitecodigo": "No",
                    "tipocodigo": "Sin Codigo",
                    "beneficioespecial": "2",
                    "cuponbespecial": "Para obtener el beneficio ingresa el código que te indique el cupón cuando compres a través del sitio web de Rhein.",
                    "tipo_producto": "Descuento",
                    "tipobeneficio": "1",
                    "idbespecial": "2"
                }
            ],
            "categoria": [
                {
                    "id": "9",
                    "nombre": "Caja Escolar"
                }
            ],
            "imagenes": {
                "principal": [
                    "https://website-dot-fi-gcp-prom-dev.uk.r.appspot.com/images/FIDELIS_ID_402.jpg"
                ],
                "logo": [
                    "https://website-dot-fi-gcp-prom-dev.uk.r.appspot.com/images/FIDELIS_ID_664.jpg"
                ]
            }
        }
    ]
  };

  constructor(

    ) {}

  ngOnInit(): void {


  }

}
