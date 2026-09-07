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
    
    .row.justify-content-center.align-items-center.z-2
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
