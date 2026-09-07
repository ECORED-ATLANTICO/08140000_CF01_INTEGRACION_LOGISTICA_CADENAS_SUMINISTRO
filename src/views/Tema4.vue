<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Transporte y distribución en la operación logística

    img(data-aos="fade-down-right")(src="@/assets/curso/tema4/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 El transporte y la distribución permiten conectar físicamente los diferentes eslabones de la cadena de suministro y garantizar que los productos lleguen al destino previsto. Su adecuada gestión influye en los tiempos de entrega, los costos logísticos, la cobertura del mercado y el nivel de servicio ofrecido al cliente. 

    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Medios, modos, red y contrato de transporte 

    .bg-botones-a5.rounded-4.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mb-0 El transporte es uno de los procesos esenciales de la cadena de suministro, ya que permite el desplazamiento físico de materias primas, insumos y productos terminados entre los diferentes nodos de la red logística. Su función no se limita al movimiento de mercancías, sino que contribuye al cumplimiento de tiempos de entrega, la continuidad del abastecimiento, la disponibilidad de inventarios y la satisfacción del cliente final. Por ello, su planeación debe responder a criterios de costo, tiempo, cobertura, capacidad, seguridad y tipo de producto transportado.
        .col-4.col-lg-2.d-none.d-lg-block
          img.imgw-110(src="@/assets/curso/tema4/2.png", alt="" data-aos="zoom-in-down")

    p.mb-4.mb-lg-5 En este contexto, es importante diferenciar entre medios y modos de transporte; a continuación, se muestra la definición de cada uno y como se integran.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Integración entre los medios y modos de transporte
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema6/2-mob.png", alt="La figura presenta la integración entre los medios y modos de transporte utilizados para movilizar mercancías dentro de la cadena de suministro. Muestra cómo los diferentes vehículos operan sobre infraestructuras y sistemas específicos para conectar los puntos de origen y destino. Esta relación permite seleccionar alternativas de transporte acordes con las características de cada operación, considerando aspectos relacionados con distancia, capacidad de carga, oportunidad de entrega, infraestructura, costos y condiciones del mercado.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema6/2.png", alt="La figura presenta la integración entre los medios y modos de transporte utilizados para movilizar mercancías dentro de la cadena de suministro. Muestra cómo los diferentes vehículos operan sobre infraestructuras y sistemas específicos para conectar los puntos de origen y destino. Esta relación permite seleccionar alternativas de transporte acordes con las características de cada operación, considerando aspectos relacionados con distancia, capacidad de carga, oportunidad de entrega, infraestructura, costos y condiciones del mercado.")
        figcaption Nota. SENA, (2026).

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La operación logística también se apoya en la red de transporte, entendida como el conjunto de rutas, nodos, conexiones e infraestructuras que hacen posible el desplazamiento de mercancías entre proveedores, centros de producción, bodegas, plataformas logísticas, distribuidores y clientes. Una red de transporte bien diseñada permite optimizar recorridos, consolidar carga, reducir tiempos de tránsito y mejorar la eficiencia de la distribución. Dentro de esta red pueden coexistir diferentes esquemas de movilización, como el transporte primario, que conecta grandes centros de producción o abastecimiento, y el transporte secundario, orientado a la distribución hacia puntos de venta o clientes finales. 
        .bg-contenido-a10.rounded-4.p-4.mb-4.py-3
          p.mb-0 Según el nivel de integración de los trayectos, la operación puede desarrollarse mediante los siguientes tipos de transporte: 

    .row.justify-content-center.cursor-pointer.mb-4.mb-lg-5
      .col-sm-10.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/5.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Transporte modal o unimodal 
            p.mb-0.text-center La mercancía se moviliza utilizando un solo modo de transporte durante el trayecto contratado, como terrestre, marítimo, aéreo, férreo o fluvial. Resulta apropiado cuando la infraestructura permite conectar directamente el origen con el destino. 
            p.mb-0.text-center #[strong Ejemplo]: una empresa despacha alimentos desde Barranquilla hasta Cartagena únicamente por carretera, utilizando un camión refrigerado durante todo el recorrido. 
      .col-sm-10.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/6.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Transporte intermodal  
            p.mb-0.text-center Combina dos o más modos de transporte en un mismo recorrido, procurando mantener la carga en una misma unidad, como un contenedor. Cada tramo puede ser gestionado mediante contratos y operadores diferentes. 
            p.mb-0.text-center #[strong Ejemplo]: un contenedor sale en camión desde una planta hasta el puerto, continúa en barco hacia otro país y posteriormente es trasladado por carretera hasta el cliente. 
      .col-sm-10.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/7.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Transporte multimodal 
            p.mb-0.text-center Integra dos o más modos de transporte bajo un único contrato, donde un operador de transporte multimodal asume la responsabilidad de coordinar la operación desde el punto de origen hasta el destino. 
            p.mb-0.text-center #[strong Ejemplo]: un exportador colombiano contrata a un operador multimodal para llevar café desde una bodega del interior hasta un cliente internacional, combinando transporte terrestre y marítimo. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/8.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Estas modalidades amplían la capacidad de cobertura y permiten adaptar el transporte a las características del producto, del mercado y de la infraestructura disponible
        .bg-secundario-s5.rounded-4.p-4.mb-4.py-3
          p.mb-0 La relación entre las partes involucradas en la movilización de mercancías se formaliza a través del contrato de transporte, documento o acuerdo mediante el cual se establecen las condiciones del servicio, las responsabilidades del transportador y del remitente, los tiempos de entrega, el tipo de carga, lo costos, las obligaciones de custodia y las condiciones frente a pérdida, daño o retraso. Su adecuada definición brinda seguridad jurídica a la operación y facilita el control del servicio prestado. En consecuencia, el transporte constituye un eje articulador de la operación logística, en tanto conecta físicamente los eslabones de la cadena de suministro y garantiza el flujo oportuno de bienes entre los diferentes actores del sistema.

    .row.justify-content-center.align-items-center
      .col-lg-7
        .bg-primario-p5.rounded-4.p-4.mb-4.mb-lg-0
          h5 Ejemplo empresarial:
          p en Homecenter, la distribución de muebles, materiales de construcción, artículos para el hogar y pedidos de comercio electrónico requiere movilizar mercancías desde centros de abastecimiento hacia tiendas y clientes finales, principalmente mediante transporte terrestre. 
          p.mb-0 Para esta operación intervienen vehículos de diferentes capacidades, rutas regionales y operadores logísticos contratados, bajo acuerdos que definen tiempos de entrega, custodia, condiciones del servicio y responsabilidades frente a la mercancía. Esto permite articular la red de transporte con la promesa de entrega de la compañía. 
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/9.png", alt="")
    
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Distribución, DRP, #[em marketing] logístico y legislación aplicada 

    .bg-botones-a5.rounded-4.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mb-0 La distribución es el proceso logístico encargado de hacer llegar los productos desde los centros de almacenamiento o producción hasta los puntos de venta, distribuidores o clientes finales, en las condiciones de cantidad, tiempo, lugar y calidad requeridas. Dentro de la cadena de suministro, su adecuada gestión permite responder a la demanda del mercado, fortalecer el nivel de servicio y asegurar la disponibilidad del producto en el momento oportuno. Por ello, la distribución no solo implica traslado físico, sino también planeación, coordinación de rutas, asignación de recursos y control de entregas.
        .col-4.col-lg-2.d-none.d-lg-block
          img(src="@/assets/curso/tema4/10.png", alt="" data-aos="zoom-in-down")

    p.mb-4.mb-lg-5 Los sistemas de distribución pueden organizarse de distintas maneras según la estructura del negocio, la cobertura geográfica, el volumen de la demanda y el tipo de producto. Así, pueden existir esquemas como lo son los siguientes:  

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1. 
      span Sistemas de distribución
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #DEF8FD")
            th Sistema de distribución
            th(colspan="2") Aspectos principales 
            th(colspan="2") Ejemplo aplicado
        tbody
          tr(style="background-color: #F6F6F6")
            td #[strong Distribución directa] 
            td(colspan="2") El fabricante entrega sus productos directamente al cliente, sin intermediarios comerciales. Permite mayor control sobre pedidos, entregas, servicio e información del mercado, aunque exige capacidad propia o contratada para gestionar la distribución. 
            td(colspan="2") Una empresa de alimentos recibe pedidos desde su tienda virtual y despacha directamente desde su centro de distribución hasta el domicilio del consumidor. 
          tr
            td #[strong Distribución a través de intermediarios] 
            td(colspan="2") Incorpora distribuidores, mayoristas, minoristas u otros actores que acercan el producto al mercado. Facilita ampliar cobertura geográfica y atender numerosos clientes sin que el fabricante gestione individualmente todas las entregas. 
            td(colspan="2") Un fabricante de productos de aseo entrega mercancía a distribuidores regionales, quienes posteriormente abastecen supermercados, minimercados y tiendas de barrio. 
          tr(style="background-color: #F6F6F6")
            td #[strong Distribución centralizada] 
            td(colspan="2") Concentra inventarios y despachos en uno o pocos centros de distribución que atienden diferentes zonas o clientes. Favorece el control de existencias y recursos, aunque puede incrementar las distancias hacia determinados destinos. 
            td(colspan="2") Una cadena comercial concentra mercancías en un centro de distribución nacional y desde allí abastece sus establecimientos ubicados en diferentes ciudades. 
          tr
            td #[strong Distribución descentralizada]
            td(colspan="2") Utiliza varios centros o instalaciones ubicados cerca de los mercados atendidos. Reduce distancias y tiempos de entrega, pero requiere coordinar inventarios, instalaciones, personal y recursos distribuidos entre diferentes ubicaciones. 
            td(colspan="2") Una empresa de consumo masivo opera centros de distribución regionales para abastecer con mayor rapidez a clientes de la Costa Caribe, centro y occidente del país. 
          tr(style="background-color: #F6F6F6")
            td #[strong Centros de consolidación] 
            td(colspan="2") Reúnen mercancías provenientes de diferentes proveedores u orígenes para organizarlas y conformar cargas mayores antes de su despacho. Favorecen el aprovechamiento de vehículos, reducción de viajes y coordinación del transporte. 
            td(colspan="2") Varios proveedores envían pequeños lotes a un centro de consolidación, donde se agrupan para completar un vehículo que abastecerá establecimientos de una misma zona. 
          tr
            td #[strong Plataformas logísticas] 
            td(colspan="2") Integran en una misma infraestructura diferentes actividades como recepción, almacenamiento, consolidación, preparación de pedidos, transporte y servicios complementarios. Facilitan la coordinación entre empresas y operadores que participan en la distribución. 
            td(colspan="2") Una empresa utiliza una plataforma logística para almacenar mercancía, preparar pedidos y coordinar desde allí las rutas de distribución hacia diferentes clientes. 
          tr(style="background-color: #F6F6F6")
            td #[strong Aliados estratégicos] 
            td(colspan="2") La empresa establece acuerdos de colaboración con operadores logísticos, transportadores, distribuidores u otros socios especializados para complementar capacidades, ampliar cobertura o mejorar el nivel de servicio sin desarrollar internamente toda la infraestructura requerida. 
            td(colspan="2") Una empresa de comercio electrónico contrata un operador especializado en última milla para realizar entregas domiciliarias en ciudades donde no dispone de una red propia. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/11.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La elección del sistema adecuado depende de la estrategia comercial de la organización y de la capacidad operativa disponible. 
        p.mb-0 En este marco, la planeación de requerimientos de distribución (DRP, #[em Distribution Requirements Planning]) constituye una herramienta que permite programar la reposición y el desplazamiento de productos dentro de la red logística, tomando como base la demanda esperada, los niveles de inventario, los tiempos de entrega y la capacidad de abastecimiento. Su propósito es coordinar la disponibilidad de mercancías en los distintos puntos de la red, evitando faltantes, sobre inventarios o retrasos en el cumplimiento de pedidos. El DRP facilita la articulación entre inventarios, transporte y distribución, mejorando la eficiencia operativa de la empresa. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p.mb-4.mb-lg-0 La distribución también se relaciona con el #[em marketing] logístico, entendido como la articulación entre la gestión logística y la estrategia comercial para asegurar que el producto llegue al cliente en condiciones que fortalezcan la propuesta de valor. Esto implica considerar variables como tiempos de entrega, cobertura, disponibilidad, presentación del producto, confiabilidad del servicio y experiencia del cliente. En este sentido, la logística no solo respalda la operación, sino que se convierte en un factor diferenciador en mercados cada vez más orientados a la rapidez, la precisión y el cumplimiento.
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/12.png", alt="")
    
    p.mb-4.mb-lg-5 Finalmente, la operación de transporte y distribución debe desarrollarse en armonía con la legislación aplicable, la cual regula aspectos relacionados con:  

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2. 
      span Aspectos del transporte y la distribución regulados por la legislación en Colombia 
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #DEF8FD")
            th Aspecto 
            th(colspan="2") Normatividad y entidades relacionadas 
            th(colspan="2") Aplicación logística 
        tbody
          tr(style="background-color: #F6F6F6")
            td #[strong Movilización de mercancías]
            td(colspan="2")
              p.mb-0 Ley 105 de 1993, Ley 336 de 1996 y Decreto 1079 de 2015. 
              p.mb-0 Ministerio de Transporte y Superintendencia de Transporte.
            td(colspan="2") Regulan las condiciones generales para movilizar mercancías y prestar servicios de transporte. 
          tr
            td #[strong Documentación] 
            td(colspan="2")
              p.mb-0 Decreto 1079 de 2015 y normativa vigente del Registro Nacional de Despachos de Carga (RNDC). 
              p.mb-0 Ministerio de Transporte y Superintendencia de Transporte. 
            td(colspan="2") Establecen requisitos para registrar y soportar documentalmente las operaciones de transporte terrestre de carga. 
          tr(style="background-color: #F6F6F6")
            td #[strong Condiciones de seguridad]
            td(colspan="2") 
              p.mb-0 Ley 769 de 2002 y Decreto 1079 de 2015. 
              p.mb-0 Ministerio de Transporte, Agencia Nacional de Seguridad Vial y Autoridades de Tránsito. 
            td(colspan="2") Establecen la movilización segura de la carga, vehículos y demás actores involucrados en la operación. 
          tr
            td #[strong Habilitación de vehículos y operación]
            td(colspan="2") 
              p.mb-0 Ley 336 de 1996, Ley 769 de 2002 y Decreto 1079 de 2015. 
              p.mb-0 Ministerio de Transporte, RUNT y Organismos de Tránsito. 
            td(colspan="2") Determinan requisitos de operación, registro, condiciones técnicas y documentación aplicable a empresas y vehículos. 
          tr(style="background-color: #F6F6F6")
            td #[strong Responsabilidad contractual]
            td(colspan="2") 
              p.mb-0 Código de Comercio – Decreto 410 de 1971 y Decreto 1079 de 2015. 
              p.mb-0 Superintendencia de Transporte y Autoridades Competentes. 
            td(colspan="2") Establecen obligaciones y responsabilidades relacionadas con recepción, transporte, custodia y entrega de mercancías. 
          tr
            td #[strong Seguros]
            td(colspan="2") 
              p.mb-0 Código de Comercio y Ley 769 de 2002. 
              p.mb-0 Superintendencia Financiera de Colombia y Ministerio de Transporte. 
            td(colspan="2") Regulan aspectos relacionados con aseguramiento, SOAT y coberturas frente a riesgos asociados con la operación. 
          tr(style="background-color: #F6F6F6")
            td #[strong Tránsito]
            td(colspan="2") 
              p.mb-0 Ley 769 de 2002 – Código Nacional de Tránsito y sus modificaciones. 
              p.mb-0 Ministerio de Transporte, Policía de Tránsito y Organismos Territoriales de Tránsito. 
            td(colspan="2") Define las condiciones para la circulación y operación segura de los vehículos en las vías. 
          tr
            td #[strong Normas técnicas]
            td(colspan="2")
              p.mb-0 Reglamentos técnicos y NTC aplicables según producto y operación. 
              p.mb-0 Ministerios competentes, Superintendencia de Industria y Comercio (SIC) e ICONTEC. 
            td(colspan="2") Establecen requisitos técnicos relacionados con vehículos, productos, empaques, embalajes, rotulado y seguridad, según corresponda. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/13.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p El conocimiento de este marco normativo es esencial para reducir riesgos operativos, evitar sanciones y garantizar la legalidad de la operación logística.
        .bg-contenido-a10.rounded-4.p-4.py-3
          p.mb-0 En síntesis, la distribución articula el cierre operativo de la cadena de suministro al conectar el producto con el cliente final. Su relación con el DRP, el marketing logístico y la normativa aplicable fortalece la eficiencia, la trazabilidad y el cumplimiento de la promesa de servicio de la organización. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        .bg-secundario-s5.rounded-4.p-4.mb-4.mb-lg-0
          h5 Ejemplo empresarial:
          p.mb-0 En Grupo Éxito, la distribución de mercancías hacia supermercados, hipermercados y formatos de proximidad exige coordinar inventarios, transporte y reposición según la demanda de cada punto de venta. En este contexto, la planeación de requerimientos de distribución (DRP) facilita programar qué productos enviar, en qué cantidades y en qué momento, evitando quiebres de inventario o sobreabastecimiento. Esta coordinación logística impacta directamente la disponibilidad del producto, la experiencia de compra del cliente y el cumplimiento de la propuesta comercial de la organización. 
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/14.png", alt="")
    
    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-primario-p5.p-4.p-lg-3
          .row.justify-content-around.align-items-center
            .col-2.col-lg-1.d-none.d-sm-block
              img.imgw-72(src="@/assets/curso/tema1/25.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Curso: gestión de transporte y distribución.
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con transporte y distribución en la operación logística: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=1G7di_eJ8bI" target="_blank")
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
                  h5.mb-1 Administración de compras y abastecimiento.
                  p.mb-0 Se invita al aprendiz a profundizar en transporte y distribución en la operación logística, tal como se muestra en el siguiente libro (página 172-180): 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://gc.scalahed.com/recursos/files/r161r/w25775w/L1LT123_S1_01.pdf" target="_blank")
                    span Ir al recurso













</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
