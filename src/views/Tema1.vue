<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Redes de suministro y cadena de suministro 

    img(data-aos="fade-up")(src="@/assets/curso/tema1/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 Las redes de suministro articulan actores, recursos y procesos que permiten el flujo de bienes, información y recursos dentro de la operación empresarial. Comprender su estructura facilita interpretar cómo se integra la cadena de suministro y cómo impacta la eficiencia logística, la disponibilidad del producto y el nivel de servicio. 

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto, nodos, y flujos logísticos 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La red de suministro es el conjunto de actores, recursos, procesos e infraestructuras que intervienen en el abastecimiento, transformación, almacenamiento, transporte y distribución de bienes o servicios, desde el proveedor hasta el cliente final. Su propósito es garantizar que los productos, materiales e información circulen de manera coordinada, oportuna y eficiente dentro de la operación empresarial.  
        .bg-contenido-a10.p-4.rounded-4.my-3
          p.mb-0 En este contexto, la cadena de suministro es el conjunto articulado de actores, procesos, recursos e información que intervienen desde el abastecimiento de materias primas e insumos hasta la entrega del producto o servicio al cliente final. Integra actividades y actores como:  

    .bg-slider.p-3.p-md-4.rounded-4.mb-4
      .tarjeta.tarjeta--blanca.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.py-4
            .col-lg-7.mb-4.mb-lg-0
              h4 Proveedores
              p Empresas o personas que suministran materias primas, insumos, productos o servicios necesarios para la operación. 
              p.mb-0 #[strong Ejemplo:] un fabricante de envases entrega botellas plásticas a una empresa productora de bebidas. 
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/3.png', alt='')
          .row.justify-content-center.align-items-center.py-4
            .col-lg-7.mb-4.mb-lg-0
              h4 Fabricantes 
              p Organizaciones encargadas de transformar materias primas e insumos en productos terminados mediante procesos productivos.  
              p.mb-0 #[strong Ejemplo:] una empresa de alimentos procesa leche, azúcar y otros ingredientes para elaborar y empacar yogures. 
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/4.png', alt='')
          .row.justify-content-center.align-items-center.py-4
            .col-lg-7.mb-4.mb-lg-0
              h4 Centros de almacenamiento 
              p Instalaciones destinadas a recibir, almacenar, controlar, preparar y despachar mercancías, garantizando su disponibilidad y conservación. 
              p.mb-0 #[strong Ejemplo:] un centro de distribución almacena productos terminados antes de preparar pedidos para supermercados y tiendas. 
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/5.png', alt='')
          .row.justify-content-center.align-items-center.py-4
            .col-lg-7.mb-4.mb-lg-0
              h4 Distribuidores
              p Actores que adquieren, movilizan y comercializan productos para acercarlos a diferentes mercados o clientes.  
              p.mb-0 #[strong Ejemplo:] un distribuidor regional recibe productos de aseo y los entrega a supermercados, minimercados y tiendas de barrio. 
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/6.png', alt='')
          .row.justify-content-center.align-items-center.py-4
            .col-lg-7.mb-4.mb-lg-0
              h4 Operadores logísticos 
              p Empresas especializadas que ejecutan actividades logísticas para otras organizaciones, como almacenamiento, transporte, preparación de pedidos o distribución.  
              p.mb-0 #[strong Ejemplo:] un operador recibe mercancía del fabricante, prepara pedidos y realiza entregas a diferentes clientes. 
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/7.png', alt='')
          .row.justify-content-center.align-items-center.py-4
            .col-lg-7.mb-4.mb-lg-0
              h4 Puntos de venta 
              p Espacios físicos o comerciales donde los productos quedan disponibles para su adquisición por el cliente.  
              p.mb-0 #[strong Ejemplo:] un supermercado recibe mercancía del distribuidor, la ubica en góndolas y la ofrece al consumidor final. 
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/8.png', alt='')
          .row.justify-content-center.align-items-center.py-4
            .col-lg-7.mb-4.mb-lg-0
              h4 Consumidores 
              p Personas u organizaciones que adquieren y utilizan los productos o servicios para satisfacer una necesidad específica.  
              p.mb-0 #[strong Ejemplo:] una persona compra una bebida en un supermercado para su consumo, completando el flujo comercial de la cadena.  
            .col-sm-8.col-lg-4
              figure
                img(src='@/assets/curso/tema1/9.png', alt='')

    .bg-contenido-a10.p-4.px-lg-3.rounded-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.d-none.d-xl-block
          figure
            img(src='@/assets/curso/tema1/caja.png', alt='')
        .col-xl-11
          p.mb-0 Dentro de la red de suministro se identifican los nodos, los cuales son puntos físicos o funcionales de la red de suministro donde se ejecutan actividades que permiten transformar, recibir, almacenar, consolidar, movilizar o distribuir mercancías. Su conexión facilita el flujo de productos entre los diferentes eslabones, desde la producción hasta su llegada al cliente final. Estos nodos son: 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        SlyderF(columnas="col-sm-6")
          .tarjeta.px-4.pt-5.bg-botones-a5
            .row.justify-content-center.mb-3
              .col-5.col-lg-4
                img.imgw-80(src='@/assets/curso/tema1/18.svg' alt='')
            h5.text-center Plantas de producción
            p.mb-4.mb-5 Transforman materias primas e insumos en productos terminados mediante procesos industriales controlados.
          .tarjeta.px-4.pt-5.bg-botones-a5
            .row.justify-content-center.mb-3
              .col-5.col-lg-4
                img.imgw-80(src='@/assets/curso/tema1/19.svg' alt='')
            h5.text-center Centros de distribución
            p.mb-4.mb-5 Reciben productos en grandes cantidades, consolidan pedidos y los preparan para su distribución eficiente.
          .tarjeta.px-4.pt-5.bg-botones-a5
            .row.justify-content-center.mb-3
              .col-5.col-lg-4
                img.imgw-80(src='@/assets/curso/tema1/20.svg' alt='')
            h5.text-center Bodegas
            p.mb-4.mb-5 Almacenan mercancías temporalmente para garantizar disponibilidad y atender variaciones de la demanda.
          .tarjeta.px-4.pt-5.bg-botones-a5
            .row.justify-content-center.mb-3
              .col-5.col-lg-4
                img.imgw-80(src='@/assets/curso/tema1/21.svg' alt='')
            h5.text-center Puertos
            p.mb-4.mb-5 Facilitan la entrada y salida de mercancías internacionales y conectan con rutas marítimas globales.
          .tarjeta.px-4.pt-5.bg-botones-a5
            .row.justify-content-center.mb-3
              .col-5.col-lg-4
                img.imgw-80(src='@/assets/curso/tema1/22.svg' alt='')
            h5.text-center Terminales
            p.mb-4.mb-5 Reciben y despachan carga, gestionan tránsito terrestre y optimizan tiempos de transporte.
          .tarjeta.px-4.pt-5.bg-botones-a5
            .row.justify-content-center.mb-3
              .col-5.col-lg-4
                img.imgw-80(src='@/assets/curso/tema1/23.svg' alt='')
            h5.text-center Plataformas logísticas
            p.mb-4.mb-5 Integran servicios logísticos como almacenamiento, transporte y valor agregado en un mismo punto.
          .tarjeta.px-4.pt-5.bg-botones-a5
            .row.justify-content-center.mb-3
              .col-5.col-lg-4
                img.imgw-80(src='@/assets/curso/tema1/24.svg' alt='')
            h5.text-center Establecimientos comerciales
            p.mb-4.mb-5 Ponen los productos a disposición del cliente final en tiendas físicas y otros canales.

    .bg-primario-p5.p-4.rounded-4.mb-4.mb-lg-5
      .row.justify-content-center.align-items-center
        .col-xl-11
          p.mb-0 Los flujos logísticos hacen referencia al movimiento coordinado de productos, materiales, información y recursos entre los diferentes actores y nodos y de la cadena de suministro. Permiten conectar las operaciones desde el abastecimiento hasta la entrega al cliente y, cuando corresponde, gestionar los retornos hacia etapas anteriores de la cadena. En la cadena de suministro circulan cuatro flujos fundamentales, que son:
        .col-lg-1.d-none.d-xl-block
          figure
            img(src='@/assets/curso/tema1/caja-2.png', alt='')

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        TabsA.color-acento-contenido.mb-4.mb-lg-5
          .tarjeta.bg-secundario-s5.p-4.py-lg-5(titulo="Flujo físico")
            p Representa el movimiento de materias primas, insumos y productos entre los diferentes puntos de la cadena. 
            p.mb-0 #[strong Ejemplo:] transportar bebidas desde la planta hasta un centro de distribución y posteriormente a supermercados. 
          .tarjeta.bg-secundario-s5.p-4.py-lg-5(titulo="Flujo de información")
            p Comprende los datos que permiten planear, ejecutar y controlar las operaciones logísticas.
            p.mb-0 #[strong Ejemplo:] compartir pedidos, niveles de inventario y fechas de entrega entre clientes, distribuidores, centros de distribución y proveedores.
          .tarjeta.bg-secundario-s5.p-4.py-lg-5(titulo="Flujo financiero")
            p Incluye pagos, cobros, créditos y demás movimientos económicos derivados de las operaciones comerciales y logísticas.  
            p.mb-0 #[strong Ejemplo:] un supermercado paga al proveedor según las cantidades recibidas y las condiciones comerciales acordadas. 
          .tarjeta.bg-secundario-s5.p-4.py-lg-5(titulo="Flujo inverso")
            p Corresponde al retorno de productos, materiales, envases o residuos hacia puntos anteriores de la cadena para su gestión.  
            p.mb-0 #[strong Ejemplo:] retirar productos vencidos del punto de venta y trasladarlos para devolución o disposición final. 
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/11.png", alt="")

    p.mb-4.mb-lg-5 En consecuencia, comprender la estructura de la red de suministro, sus nodos, y flujos logísticos constituye una base esencial para interpretar el funcionamiento de la cadena de suministro y analizar su impacto en la planeación, la operación y la competitividad empresarial.

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/12.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .p-4.bg-contenido-a10.rounded-4
          h5 Ejemplo empresarial: 
          p.mb-0 En Grupo Nutresa, la red de suministro integra proveedores de materias primas e insumos, plantas de producción, centros de distribución, canales comerciales y puntos de venta. En esta operación, los proveedores, plantas, bodegas y distribuidores funcionan como nodos; mientras que las relaciones de abastecimiento, transformación, almacenamiento, transporte y entrega constituyen los eslabones de la cadena. A su vez, entre estos actores circulan flujos físicos de mercancías, flujos de información asociados a pedidos e inventarios, y flujos financieros relacionados con pagos y facturación.
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 <em>Supply Chain Management</em> (SCM) y articulación de procesos logísticos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/13.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El #[em Supply Chain Management] (SCM) o gestión de la cadena de suministro es el enfoque estratégico orientado a planificar, coordinar, ejecutar y controlar de manera integral los procesos que intervienen en el flujo de bienes, servicios, información y recursos financieros a lo largo de la red de suministro. Su propósito es sincronizar las actividades logísticas y operativas para responder a la demanda, optimizar recursos, reducir costos y generar valor para el cliente final. 
        .bg-primario-p5.p-4.rounded-4.my-3
          p.mb-0 La gestión de la cadena de suministro supera la visión tradicional de la logística como una función aislada, ya que integra de manera sistémica los siguientes procesos:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        LineaTiempoD.color-acento-botones.mb-4.mb-lg-5
          div(numero="1" titulo="Planificación")
            p.mb-0 Define objetivos, pronósticos de demanda, estrategias y recursos para alinear toda la cadena de suministro.
          div(numero="2" titulo="Abastecimiento")
            p.mb-0 Selecciona y gestiona proveedores, negocia condiciones y asegura el suministro oportuno de materiales e insumos.
          div(numero="3" titulo="Producción")
            p.mb-0 Transforma materias primas e insumos en productos terminados, asegurando calidad, eficiencia y cumplimiento de la demanda.
          div(numero="4" titulo="Almacenamiento")
            p.mb-0 Recibe, almacena y protege productos bajo condiciones adecuadas, garantizando disponibilidad y rotación eficiente.
          div(numero="5" titulo="Gestión de inventarios")
            p.mb-0 Controla niveles de inventario, movimientos y existencias para equilibrar servicio al cliente y optimización de costos.
          div(numero="6" titulo="Distribución y transporte")
            p.mb-0 Organiza rutas, modos y tiempos de transporte para entregar productos en el lugar y momento requerido con eficiencia.
          div(numero="7" titulo="Entrega al cliente")
            p.mb-0 Entrega productos al cliente final según acuerdos de servicio, asegurando satisfacción y cumplimiento.
          div(numero="8" titulo="Servicio posventa")
            p.mb-0 Atiende solicitudes, reclamos y soporte posventa para fortalecer la relación y la lealtad del cliente.

      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/14.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/15.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-botones-a5.p-4.rounded-4
          p La articulación de los procesos logísticos implica reconocer que la operación empresarial no depende únicamente del movimiento de mercancías, sino de la coordinación entre decisiones estratégicas, tácticas y operativas. Por ejemplo, una compra mal programada afecta el nivel de inventario; un inventario mal gestionado impacta el almacenamiento; una distribución ineficiente incrementa los tiempos de entrega y deteriora el servicio al cliente. Por ello, el SCM promueve una visión integrada de la operación, basada en la planeación, la trazabilidad, la colaboración entre actores y el análisis permanente del desempeño logístico.
          p.mb-0 En este marco, la articulación logística comprende los siguientes procesos: 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        .bg-slider.p-3.p-md-4.rounded-4.mb-4
          .tarjeta.tarjeta--blanca.p-4.py-lg-5
            SlyderA(tipo="b")
              div
                h4 Selección de proveedores 
                p.mb-0 Proceso de identificar, evaluar y elegir proveedores según criterios de calidad, precio, capacidad de suministro, tiempos de entrega, ubicación, cumplimiento y nivel de servicio, buscando garantizar fuentes confiables para atender las necesidades de la operación. 
              div
                h4 Programación de compras 
                p.mb-0 Organización de las cantidades, referencias y fechas en que deben adquirirse materiales o productos, considerando demanda, inventarios disponibles, tiempos de reposición, capacidad de almacenamiento y condiciones negociadas con proveedores para mantener la continuidad operativa.
              div
                h4 Recepción y almacenamiento de materiales 
                p.mb-0 Comprende recibir, verificar, registrar, clasificar y ubicar materiales en condiciones adecuadas de conservación y seguridad. Permite confirmar el cumplimiento de las compras y asegurar su disponibilidad para producción, despacho u otras operaciones. 
              div
                h4 Gestión de inventarios 
                p.mb-0 Controla las entradas, salidas, existencias y rotación de materiales y productos para mantener cantidades acordes con las necesidades operativas. Busca garantizar disponibilidad, reducir faltantes, prevenir excesos y optimizar los recursos destinados al inventario. 
              div
                h4 Preparación de pedidos 
                p.mb-0 Agrupa las actividades necesarias para localizar, seleccionar, verificar, acondicionar y consolidar los productos solicitados por el cliente. Su correcta ejecución contribuye a despachar las referencias y cantidades requeridas dentro de los tiempos establecidos. 
              div
                h4 Distribución física 
                p.mb-0 Coordina el despacho, transporte, rutas, vehículos y recursos requeridos para movilizar los productos desde su punto de origen hasta clientes o puntos de entrega, procurando cumplir condiciones de tiempo, cantidad, calidad y costo. 
              div
                h4 Seguimiento al cumplimiento de entregas 
                p.mb-0 Verifica el desarrollo y resultado de las entregas mediante información sobre tiempos, cantidades, condiciones del producto y novedades presentadas. Facilita identificar incumplimientos, gestionar desviaciones y generar acciones de mejora orientadas al nivel de servicio. 

      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/16.png", alt="")
    
    p La gestión de la cadena de suministro también incorpora principios de coordinación interorganizacional, uso de tecnologías de información, trazabilidad, visibilidad de inventarios y análisis de indicadores logísticos. Esto permite mejorar la toma de decisiones, anticipar variaciones en la demanda, fortalecer la capacidad de respuesta y mantener la continuidad operativa de la empresa. 
    p.mb-4.mb-lg-5 En síntesis, el Supply Chain Management (SCM)  constituye el marco de referencia para comprender la integración de los procesos logísticos dentro de la organización, facilitando la gestión eficiente de la red de suministro y el cumplimiento de los objetivos empresariales.

    .bg-secundario-s5.p-4.rounded-4.mb-4.mb-lg-5
      p #[strong Ejemplo empresarial:] en Alkosto, la gestión de la cadena de suministro exige coordinar compras con múltiples proveedores, recibir mercancías en centros de distribución o tiendas, controlar inventarios, programar transporte y atender tanto el canal físico como el comercio electrónico.  
      p.mb-0 Esta articulación entre abastecimiento, almacenamiento, reposición, despacho y entrega al cliente refleja la aplicación del SCM, ya que cada proceso debe sincronizarse para garantizar disponibilidad del producto, cumplimiento en las entregas y continuidad de la operación comercial. 


    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-primario-p5.p-4.p-lg-3
          .row.justify-content-around.align-items-center
            .col-2.col-lg-1.d-none.d-sm-block
              img.imgw-72(src="@/assets/curso/tema1/25.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Logística y cadenas de suministro: ¿cómo influyen en la vida cotidiana?
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con redes de suministro y cadenas de suministro: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=Y2PmCXeKe2U" target="_blank")
                    span Ir al recurso

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-primario-p5.p-4.p-lg-3
          .row.justify-content-around.align-items-center
            .col-2.col-lg-1.d-none.d-sm-block
              img.imgw-72(src="@/assets/curso/tema1/26.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Introducción a la logistica
                  p.mb-0 Se invita al aprendiz a profundizar en redes de suministro y cadenas de suministro, a través del siguiente artículo:
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="http://virtual.umng.edu.co/distancia/ecosistema/ovas/administracion_empresas/logistica/unidad_1/DM.pdf" target="_blank")
                    span Ir al recurso


    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5.d-none.d-sm-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/17.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        .bg-audio.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-4.col-xl-3.d-none.d-sm-block
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/common/mic.png", alt="" data-aos="zoom-in-down")
            .col-sm-7
              p A continuación, se invita a ir al siguiente podcast:  
              TarjetaAudio.color-secundario.mb-4(
                texto="Transporte y distribución en la cadena de suministro"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
              )











</template>
