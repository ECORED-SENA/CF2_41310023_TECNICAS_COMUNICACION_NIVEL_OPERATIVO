export default {
  global: {
    componenteFormativo: 'Políticas empresariales  y comunicación externa',
    descripcionCurso:
      'El componente formativo aborda la importancia de las políticas empresariales y su comunicación dentro y fuera de la organización. Destaca la necesidad de liderazgo y participación para alcanzar metas institucionales, y describe los tipos de liderazgo, la metodología para crear políticas, y las herramientas de comunicación externa. Además, incluye un glosario y una bibliografía relevante sobre el tema.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        titulo: 'Política empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características esenciales de una política empresarial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Requisitos de una política empresarial',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Las políticas y la comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La comunicación externa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Liderazgo y participación',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/41310023_CF2_DU.pdf',
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
  complementario: [
    {
      tema: 'Política empresarial',
      referencia:
        'Softgrade. (2019). ¿Qué son las políticas y reglas de una empresa?. [Archivo de video] Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PvOl6IdTCUk  ',
    },
    {
      tema: 'Características esenciales de una política empresarial ',
      referencia:
        'Casanovas, A. (2013).Gestión de políticas de empresa. KPMG.  ',
      tipo: 'Artículo',
      link:
        'https://assets.kpmg.com/content/dam/kpmg/es/pdf/2016/12/Cuadernos_Legales_N5.pdf  ',
    },
    {
      tema: 'Requisitos de una política empresarial ',
      referencia:
        'Illera, L, Illera, J. (2015). Política empresarial: Línea de dirección y estratégias 2da edición. Colombia: Editorial CESA.  ',
      tipo: 'Libro',
      link:
        'https://www.google.com.co/books/edition/Pol%C3%ADtica_empresarial/J4F-DwAAQBAJ?hl=es-419&gbpv=1  ',
    },
    {
      tema: 'Las políticas y la comunicación ',
      referencia:
        'TEDx Talks (2019).Comunicación para el trabajo en equipo | Alejandro Sierralta | TEDxUniNacionalIngeniería. [Archivo de video] Youtube.    ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7uygpZkVHH0  ',
    },
    {
      tema: 'La comunicación externa ',
      referencia:
        'Grupo Esneca TV (2021). Cómo conseguir una comunicación externa eficaz - Grupo Esneca TV [Archivo de video] Youtube.    ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IpbbRpPmJCs  ',
    },
    {
      tema: 'Liderazgo y participación ',
      referencia:
        'TEDx Talks (2016). Mettaliderazgo, creando líderes de alto desempeño | Roberto Mourey | TEDxBarriodelEncino [Archivo de video] Youtube.    ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PZuSrV0hsnA  ',
    },
  ],
  glosario: [
    {
      termino: 'Calidad',
      significado: 'superioridad o excelencia de algo o de alguien. ',
    },
    {
      termino: 'Comunicación efectiva',
      significado:
        'llevar el mensaje correcto a la audiencia adecuada en el momento oportuno. ',
    },
    {
      termino: 'Comunicación externa',
      significado:
        'es esencial para promocionar, dar a conocer y resolver incidencias en la empresa. ',
    },
    {
      termino: 'Comunicación interna',
      significado:
        'clave para el buen funcionamiento de la empresa y la correcta gestión de los recursos humanos. ',
    },
    {
      termino: 'Derrotero',
      significado:
        'camino o medio que se sigue para alcanzar un fin determinado. ',
    },
    {
      termino: 'Directriz',
      significado:
        'norma o conjunto de normas e instrucciones que se establecen o tienen en cuenta al proyectar una acción o un plan. ',
    },
    {
      termino: 'Empresa',
      significado:
        'entidad en la que intervienen el capital y el trabajo como factores de producción de actividades industriales o mercantiles o para la prestación de servicios. ',
    },
    {
      termino: 'Entorno',
      significado:
        'conjunto de circunstancias o factores sociales, culturales, morales, económicos, profesionales, etc., que rodean una cosa o a una persona y que influyen en su estado o desarrollo. ',
    },
    {
      termino: 'Estrategia',
      significado:
        'serie de acciones meditadas y encaminadas hacia un fin determinado. ',
    },
    {
      termino: 'Innato',
      significado:
        'que no es aprendido y pertenece a la naturaleza de un ser desde su origen o nacimiento. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias, G. y Heredia, V. (2000). <em>Administración de Recursos humanos para el alto desempeño</em>. Octava edición. Editorial Trillas, México. ',
      link: '',
    },
    {
      referencia:
        'Céspedes, J. (2008). <em>Tips sobre política empresarial</em>. ',
      link:
        'http://gerencia.blogia.com/2008/021501-la-politica-empresarial.php',
    },
    {
      referencia:
        'Comunicación empresarial (2014).<em>Comunicación Interna y Externa. Dos Sistemas Interdependientes</em>. ',
      link:
        'http://comunicacionempresarial214.blogspot.com.co/2014/08/comunicacion-interna-y-externa-dos.html',
    },
    {
      referencia:
        'Fabra, A. (2016). <em>Cuál es la importancia de las políticas de una empresa</em>.',
      link:
        'https://negocios.uncomo.com/articulo/cual-es-la-importancia-de-las-politicas-de-una-empresa-26555.html',
    },
    {
      referencia:
        'Gamelearn. (2016). <em>¿Qué es liderazgo? 10 maneras de definirlo</em>.',
      link: 'https://www.game-learn.com/que-es-liderazgo-maneras-definirlo',
    },
    {
      referencia:
        'García-Allen, J. (s. f.). <em>Tipos de Liderazgo: Las 5 clases de líder más habituales</em>. ',
      link: 'https://psicologiaymente.net/coach/tipos-de-liderazgo',
    },
    {
      referencia:
        'Medina, M. (2012). <em>Política organizacional. Concepto y esquema en la empresa</em>. ',
      link:
        'https://www.gestiopolis.com/politica-organizacional-concepto-y-esquema-en-la-empresa/',
    },
    {
      referencia: 'Monterola, H. (2012). <em>Políticas Empresariales</em>.',
      link:
        'https://www.clubensayos.com/Temas-Variados/Politicas-Empresariales/333946.html',
    },
    {
      referencia:
        'Morales, A. (2009). <em>Comunicación externa y sus funciones</em>.',
      link:
        'http://anamoralesrosas.blogspot.com.co/2009/09/comunicacion-externa-y-sus-funciones.html',
    },
    {
      referencia: 'Nieves, F. (2006). <em>Políticas de la empresa</em>.',
      link: 'https://www.gestiopolis.com/politicas-de-la-empresa/',
    },
    {
      referencia:
        'Política Empresarial (2009).<em>Administración de empresas</em>. ',
      link:
        'http://admindeempresas.blogspot.com.co/2009/11/politica-empresarial.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Salomé Ortíz Moreno',
          cargo: 'Experta temática',
          centro:
            'Centro de Desarrollo Agropecuario - y Agroindustrial CEDEAGRO - Regional Boyacá',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
