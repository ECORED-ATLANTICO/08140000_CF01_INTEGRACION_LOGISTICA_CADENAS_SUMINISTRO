<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Costos logísticos y eficiencia operativa 
    
    img(data-aos="fade-up")(src="@/assets/curso/tema6/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 La operación logística implica el uso de recursos que deben ser controlados para garantizar rentabilidad y sostenibilidad empresarial. Analizar los costos logísticos y la eficiencia operativa permite identificar oportunidades de mejora, optimizar procesos y fortalecer la toma de decisiones dentro de la cadena de suministro. ç

    separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Costos y gastos logísticos: conceptos y clasificación  

    .bg-primario-p5.rounded-4.p-4.mb-4(data-aos="fade-up")
      p.mb-0 Los costos logísticos corresponden al conjunto de recursos económicos que una organización destina para ejecutar las actividades relacionadas con el abastecimiento, almacenamiento, transporte, distribución, gestión de inventarios y servicio al cliente dentro de la cadena de suministro. Su análisis es fundamental porque permite comprender cuánto cuesta movilizar, conservar y entregar los productos, así como identificar oportunidades de mejora en la operación. 
    p.mb-4.mb-lg-5 En el ámbito logístico, es importante diferenciar entre costos y gastos. A continuación, se muestra cual es la diferencia y la relación que tienen: 

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Diferencia entre costos y gastos en el ámbito logístico
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema6/2-mob.png", alt="La figura presenta la diferencia entre los costos y los gastos dentro de una organización, destacando su relación con la gestión logística. Los costos están vinculados directamente con las actividades necesarias para movilizar, manipular, almacenar y proteger las mercancías, mientras que los gastos respaldan funciones administrativas, comerciales y financieras. Esta diferenciación permite comprender cómo ambos conceptos intervienen en el funcionamiento de la empresa y contribuyen al control de los recursos y a la sostenibilidad de sus operaciones. ")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema6/2.png", alt="La figura presenta la diferencia entre los costos y los gastos dentro de una organización, destacando su relación con la gestión logística. Los costos están vinculados directamente con las actividades necesarias para movilizar, manipular, almacenar y proteger las mercancías, mientras que los gastos respaldan funciones administrativas, comerciales y financieras. Esta diferenciación permite comprender cómo ambos conceptos intervienen en el funcionamiento de la empresa y contribuyen al control de los recursos y a la sostenibilidad de sus operaciones. ")
        figcaption Nota. SENA, (2026).

    p.mb-4(data-aos="fade-up") En las operaciones logísticas, los costos presentan comportamientos diferentes según el nivel de actividad de la empresa. Algunos permanecen relativamente constantes durante un periodo, mientras otros aumentan o disminuyen de acuerdo con el volumen almacenado, transportado o distribuido. A continuación, se presentan sus principales características y ejemplos de aplicación.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 4. 
      span Tipos de costos en las operaciones logísticas
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #DEF8FD")
            th Tipo de costo
            th(colspan="4") Definición y ejemplo
        tbody
          tr(style="background-color: #F6F6F6")
            td #[strong Costos fijos]
            td(colspan="4") 
              p.mb-0 Permanecen relativamente constantes durante un periodo, independientemente del volumen de operación.  
              p.mb-0 #[strong Ejemplo]: el arrendamiento mensual de una bodega se mantiene, aunque varíe la cantidad de mercancía almacenada. 
          tr
            td #[strong Costos variables]
            td(colspan="4") 
              p.mb-0 Cambian de acuerdo con el nivel de actividad o volumen de la operación logística.  
              p.mb-0 #[strong Ejemplo]: el consumo de combustible aumenta cuando se realizan más recorridos para distribuir mercancías. 
          tr(style="background-color: #F6F6F6")
            td #[strong Costos directos]
            td(colspan="4") 
              p.mb-0 Pueden identificarse y relacionarse específicamente con un producto, pedido, cliente u operación.  
              p.mb-0 #[strong Ejemplo]: el flete contratado exclusivamente para entregar un pedido a un cliente determinado. 
          tr
            td #[strong Costos indirectos]
            td(colspan="4") 
              p.mb-0 Son compartidos por diferentes productos, procesos u operaciones y requieren criterios para distribuirlos.  
              p.mb-0 #[strong Ejemplo]: el consumo de energía de una bodega utilizada para almacenar múltiples referencias. 

    .row.justify-content-center.align-items-center.z-2
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema6/3.png", alt="")
      .col-lg-7
        .bg-secundario-s5.rounded-4.p-4
          h5 Ejemplo empresarial:
          p En Postobón, la operación logística involucra costos asociados al almacenamiento de bebidas, transporte hacia distribuidores y puntos de venta, combustible, mantenimiento de vehículos, uso de empaques y personal operativo. 
          p.mb-0 En este contexto, el arriendo o sostenimiento de centros de distribución puede considerarse un costo fijo; el combustible y la contratación adicional de transporte, costos variables; el embalaje de pedidos específicos, un costo directo; y servicios compartidos como energía o supervisión, costos indirectos. Esta clasificación facilita analizar la estructura de costos y tomar decisiones para mejorar la rentabilidad.

    separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Costeo basado en actividades (ABC) y análisis de eficiencia logística 

    img(data-aos="fade-up")(src="@/assets/curso/tema6/4.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow.mb-3
          p.mb-0 El costeo basado en actividades (ABC, #[em Activity-Based Costing]) es una metodología que permite identificar, clasificar y asignar los costos a partir de las actividades reales que se desarrollan en la operación. En el contexto logístico, este enfoque resulta especialmente útil porque no se limita a distribuir costos de manera general, sino que permite reconocer cuánto consume cada proceso de abastecimiento, almacenamiento, transporte, inventario, preparación de pedidos o distribución. La lógica del costeo ABC parte de que los productos o servicios no consumen recursos de forma directa, sino a través de las actividades necesarias para su gestión. El método es el siguiente: 
    
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-sm-12.col-lg-6
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema6/5.png", alt="")
      .col-lg-6
        .p-4.py-3.rounded-4.bg-primario-p5.mb-3
          h5.mb-0 Identificar actividades
          p.mb-0 Se reconocen las actividades logísticas que intervienen en la operación.
        .p-4.py-3.rounded-4.bg-primario-p5.mb-3
          h5.mb-0 Determinar recursos utilizados
          p.mb-0 Se identifica los recursos que requiere cada actividad para ejecutarse.
        .p-4.py-3.rounded-4.bg-primario-p5.mb-3
          h5.mb-0 Asignar costos según consumo
          p.mb-0 Se asignan los costos a productos, procesos o clientes de acuerdo con el nivel de consumo de cada actividad.

    .bg-contenido-a10.rounded-4.p-4.mb-4.py-3
      p.mb-0.text-center Aplicado a la cadena de suministro, el costeo ABC permite analizar actividades como:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        LineaTiempoD.color-acento-botones.mb-4.mb-lg-5
          div(numero="1" titulo="Recepción de mercancías")
            p.mb-0 Descarga e inspección de los productos recibidos de proveedores.
          div(numero="2" titulo="Control de inventarios")
            p.mb-0 Monitoreo de existencias, conteos y análisis para asegurar disponibilidad y exactitud.
          div(numero="3" titulo="<em>Picking</em>")
            p.mb-0 Selección y alistamiento de los productos solicitados por el cliente.
          div(numero="4" titulo="Embalaje")
            p.mb-0 Protección y preparación de los productos para su transporte.
          div(numero="5" titulo="Cargue y transporte")
            p.mb-0 Carga de los productos en el vehículo y traslado desde el origen hasta el destino final.
          div(numero="6" titulo="Almacenamiento")
            p.mb-0 Ubicación y custodia de los productos en condiciones óptimas dentro de la bodega.
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema6/6.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/7.png", alt="" data-aos="zoom-in-down")
      .col-lg-7 
        p Este análisis se relaciona directamente con la eficiencia logística, entendida como la capacidad de ejecutar los procesos de la cadena de suministro utilizando de manera óptima el tiempo, el espacio, los recursos humanos, la infraestructura y los costos disponibles, sin afectar la calidad del servicio. Una operación logística eficiente no es solo aquella que reduce costos, sino la que logra equilibrio entre productividad, oportunidad, cumplimiento y satisfacción del cliente. 
        .p-4.py-3.rounded-4.bg-primario-p5
          p.mb-0 En consecuencia, el costeo basado en actividades y el análisis de eficiencia logística constituyen herramientas clave para la toma de decisiones en la organización. Su aplicación permite mejorar la visibilidad de los costos, fortalecer la planeación operativa, optimizar recursos y orientar acciones de mejora continua dentro de la cadena de suministro. 

    .bg-secundario-s5.rounded-4.p-4.mb-4
      h5 Ejemplo empresarial: 
      p En Mercado Libre, la operación logística asociada al almacenamiento, clasificación, <em>picking</em>, empaque y despacho de pedidos puede analizarse mediante costeo basado en actividades (ABC), identificando cuánto consume cada proceso en tiempo, espacio, personal y recursos tecnológicos.  
      p.mb-0 Si el análisis muestra que la preparación de pedidos o el alistamiento consume más recursos de los previstos, la empresa puede reorganizar la operación, ajustar #[em layout], redistribuir tareas o automatizar procesos para mejorar la eficiencia logística y reducir sobrecostos. 

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-primario-p5.p-4.p-lg-3
          .row.justify-content-around.align-items-center
            .col-2.col-lg-1.d-none.d-sm-block
              img.imgw-72(src="@/assets/curso/tema1/25.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Webinar "Costos Logísticos, cómo calcularlos y su importancia para la operación"
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con costos logísticos y eficiencia operativa: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=eD6VqdcMwdk" target="_blank")
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
                  h5.mb-1 Costos logísticos y metodologías para el costeo en cadenas de suministro: una revisión de la literatura
                  p.mb-0 Se invita al aprendiz a profundizar con costos logísticos y eficiencia operativa, a través del siguiente artículo: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.redalyc.org/pdf/3836/383668911007.pdf " target="_blank")
                    span Ir al recurso


    .row.justify-content-center.align-items-center.mb-4
      .col-sm-10.col-lg-5.d-none.d-sm-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/8.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        .bg-audio.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-4.col-xl-3.d-none.d-sm-block
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/common/mic.png", alt="" data-aos="zoom-in-down")
            .col-sm-7
              p A continuación, se invita a ir al siguiente pódcast: 
              TarjetaAudio.color-secundario.mb-4(
                texto="“Charlas logísticas”. Episodio: “Costos logísticos y eficiencia operativa”"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
              )

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
