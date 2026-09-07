export default {
  global: {
    Name: 'Fundamentos de la cadena de suministro y procesos logísticos',
    Description:
      'El componente formativo aborda los fundamentos de la cadena de suministro y su articulación con los procesos logísticos de abastecimiento, transporte, almacenamiento, distribución e inventarios. Integra el análisis de productos, servicios, demanda, proveedores, compras y costos logísticos, con el fin de comprender la operación de la red de suministro y su incidencia en la eficiencia empresarial, la planeación de recursos y la toma de decisiones en contextos organizacionales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Redes de suministro y cadena de suministro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto, nodos, y flujos logísticos ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              '<em>Supply Chain Management</em> (SCM) y articulación de procesos logísticos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Productos, servicios y demanda en la cadena de suministro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Productos, servicios, portafolio, empaque y embalaje',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis y proyección de la demanda',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Proveedores, compras y abastecimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Proveedores, contratos y sistemas de entrega',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Compras, abastecimiento y <em>lead time</em> de pedido y entrega',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Transporte y distribución en la operación logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Medios, modos, red y contrato de transporte',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Distribución, DRP, <em>marketing</em> logístico y legislación aplicada',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Almacenamiento e inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Almacenamiento y costos asociados',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Sistemas de inventarios, recibo y despacho de mercancías',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Costos logísticos y eficiencia operativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Costos y gastos logísticos: conceptos y clasificación',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Costeo basado en actividades (ABC) y análisis de eficiencia logística',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Abastecimiento',
      significado:
        'Proceso mediante el cual la organización asegura la disponibilidad de bienes, insumos o servicios requeridos para el desarrollo de sus operaciones, a través de la planeación de compras, selección de proveedores y control de entregas.',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'Proceso logístico orientado a resguardar, conservar, organizar y controlar materiales o productos dentro de instalaciones destinadas a su recepción, ubicación, custodia y despacho.',
    },
    {
      termino: 'Cadena',
      significado:
        'Conjunto de procesos, actores, recursos y actividades que intervienen en el flujo de bienes, servicios, información y recursos financieros desde el proveedor hasta el cliente final.',
    },
    {
      termino: 'Costos logísticos',
      significado:
        'Recursos económicos asociados a la ejecución de actividades de abastecimiento, almacenamiento, transporte, inventarios, distribución y servicio al cliente dentro de la cadena de suministro.',
    },
    {
      termino: 'Demanda',
      significado:
        'Cantidad de productos o servicios que los clientes requieren en un periodo determinado, la cual orienta las decisiones de abastecimiento, inventarios, transporte y distribución.',
    },
    {
      termino: 'Distribución',
      significado:
        'Proceso logístico encargado de hacer llegar los productos desde los centros de producción o almacenamiento hasta los puntos de venta o clientes finales, en condiciones adecuadas de tiempo, lugar y cantidad.',
    },
    {
      termino: 'DRP',
      significado:
        'Herramienta de planeación que permite programar la reposición y el desplazamiento de productos dentro de la red de distribución, con base en la demanda, los inventarios y los tiempos de entrega.',
    },
    {
      termino: 'Embalaje',
      significado:
        'Conjunto de materiales y técnicas utilizados para proteger los productos durante su manipulación, almacenamiento, transporte y distribución.',
    },
    {
      termino: 'Empaque',
      significado:
        'Presentación o envoltura que contiene, protege e identifica el producto para su comercialización, conservación y manipulación.',
    },
    {
      termino: 'Inventario',
      significado:
        'Conjunto de materiales, insumos, productos en proceso o productos terminados que la empresa mantiene disponibles para atender la operación o la demanda del mercado.',
    },
    {
      termino: '<em>Lead time</em>',
      significado:
        'Tiempo transcurrido entre la identificación de una necesidad, la emisión de un pedido y la entrega efectiva del bien o servicio solicitado.',
    },
    {
      termino: 'Logística',
      significado:
        'Proceso de planeación, ejecución y control del flujo y almacenamiento de bienes, servicios e información, desde el punto de origen hasta el punto de consumo, con el propósito de satisfacer los requerimientos del cliente.',
    },
    {
      termino: 'Proveedor',
      significado:
        'Persona natural o jurídica encargada de suministrar bienes, insumos o servicios requeridos por la organización para el desarrollo de su operación.',
    },
    {
      termino: 'SCM',
      significado:
        'Enfoque estratégico de gestión orientado a planificar, coordinar, ejecutar y controlar de manera integral los procesos de la cadena de suministro.',
    },
    {
      termino: 'Transporte',
      significado:
        'Proceso logístico encargado de movilizar materias primas, insumos o productos terminados entre los distintos nodos de la cadena de suministro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Anaya Tejero, J. J. (2015). <em>Logística integral: la gestión operativa de la empresa</em> (5.ª ed.). ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Bowersox, D. J., Closs, D. J., & Cooper, M. B. (2007). <em>Administración y logística en la cadena de suministros</em> (2.ª ed.). McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Chopra, S., & Meindl, P. (2008). <em>Administración de la cadena de suministro: estrategia, planeación y operación</em> (3.ª ed.). Pearson Educación.',
      link: 'https://gc.scalahed.com/recursos/files/r161r/w24567w/Sunil_Chopral.pdf',
    },
    {
      referencia:
        'Christopher, M. (2018). <em>Logística y gestión de la cadena de suministro</em> (5.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2020). <em>Normas técnicas aplicables al empaque, embalaje y rotulado de mercancías</em>.',
      link: 'https://www.icontec.org',
    },
    {
      referencia:
        'Ministerio de Transporte de Colombia. <em>Documentos técnicos sobre logística y transporte de carga</em>.',
      link: 'https://www.mintransporte.gov.co',
    },
    {
      referencia:
        'Mora García, L. A. (2023). <em>Gestión logística integral: las mejores prácticas en la cadena de abastecimiento</em> (3.ª ed.). Ecoe Ediciones.',
      link: 'https://www.ecoeediciones.com/wp-content/uploads/2023/01/9789585035676-9789585035683-Gestion-logistica-integral.-Las-mejores-practicas-en-la-cadena-de-abastecimiento-3ra-edicion-contenido.pdf',
    },
    {
      referencia:
        'Paternina Arboleda, C., Alfaro Díaz, J., & Mendoza Roca, C. (2015). <em>Manual práctico para gestión logística: envase y embalaje, transporte y cadena de frío</em>. Editorial Universidad del Norte.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2023). <em>Etiquetado y rotulado de productos en Colombia</em>.',
      link: 'https://www.sic.gov.co',
    },
    {
      referencia:
        'Torres Rabello, J. (2014). <em>Logística: conceptos y tendencias</em>. Editorial RIL.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andres Felipe Arias Gonzalez',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
