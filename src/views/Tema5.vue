<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Almacenamiento e inventarios 

    img(data-aos="fade-down-right")(src="@/assets/curso/tema5/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 El almacenamiento y los inventarios cumplen una función estratégica en la cadena de suministro al permitir la conservación, control y disponibilidad de los productos. Su adecuada gestión favorece la continuidad de la operación, la optimización del espacio, la trazabilidad de la mercancía y el cumplimiento oportuno de los despachos. 

    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Almacenamiento y costos asociados 

    .bg-primario-p5.rounded-4.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mb-0 El almacenamiento es el proceso logístico orientado a resguardar, organizar, conservar y controlar los materiales, insumos o productos dentro de la cadena de suministro, con el fin de asegurar su disponibilidad en el momento requerido por la operación o por el cliente. Su función no se limita a guardar mercancías, sino que comprende un conjunto de actividades relacionadas con la recepción, ubicación, custodia, manipulación, preparación y despacho de productos, en condiciones que garanticen su integridad, trazabilidad y eficiencia operativa. Dentro de la operación logística, el almacenamiento puede desarrollarse en diferentes tipos de instalaciones, como bodegas, centros de distribución, plataformas logísticas o áreas de depósito temporal. La elección de estas instalaciones y su organización interna dependen de factores como: 
        .col-4.col-lg-2.d-none.d-lg-block
          img.imgw-135(src="@/assets/curso/tema5/2.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        LineaTiempoD.color-acento-botones.linea-custom
          div(numero="1" titulo="Naturaleza del producto")
            p.mb-0 Determina las condiciones de manipulación y almacenamiento según las características del producto.
          div(numero="2" titulo="Volumen de inventario")
            p.mb-0 Define la capacidad de almacenamiento requerida según las cantidades mantenidas en existencia.
          div(numero="3" titulo="Rotación")
            p.mb-0 Indica la frecuencia con que los productos ingresan y salen del almacén, orientando su ubicación.
          div(numero="4" titulo="Condiciones de conservación")
            p.mb-0 Establecen los requerimientos ambientales necesarios para mantener la calidad e integridad del producto.
          div(numero="5" titulo="Nivel de automatización")
            p.mb-0 Determina el uso de tecnologías y equipos para ejecutar o controlar operaciones de almacenamiento.
          div(numero="6" titulo="Estrategia de distribución de la empresa")
            p.mb-0 Orienta la ubicación y funcionamiento de los almacenes según mercados, cobertura y niveles de servicio.
        
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p De esta manera, el almacenamiento se convierte en un punto de articulación entre el abastecimiento, el inventario y la distribución.  
        p.mb-4.mb-lg-0 La eficiencia del almacenamiento también se relaciona con los recursos económicos necesarios para recibir, conservar, manipular y mantener disponibles los inventarios dentro de una instalación logística. Su control permite identificar oportunidades para mejorar el aprovechamiento del espacio, los recursos y la eficiencia operativa. Entre los más relevantes tenemos: 
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/4.png", alt="")
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 3. 
      span Costos relacionados con el almacenamiento en una operación logística
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #DEF8FD")
            th Variable 
            th(colspan="2") Concepto 
            th(colspan="2") Ejemplo o caso aplicado 
        tbody
          tr(style="background-color: #F6F6F6")
            td #[strong Infraestructura y ocupación del espacio] 
            td(colspan="2") Comprende los costos de disponer y utilizar bodegas, áreas, estanterías y posiciones necesarias para mantener los inventarios. 
            td(colspan="2") Una empresa mantiene una bodega de 5.000 m², pero utiliza regularmente solo el 60 %. El espacio disponible continúa generando costos, aunque permanezca sin mercancía. 
          tr
            td #[strong Equipos de almacenamiento y manipulación] 
            td(colspan="2") Incluye los costos relacionados con adquisición, alquiler y utilización de equipos necesarios para almacenar y movilizar mercancías. 
            td(colspan="2") Un centro de distribución utiliza montacargas eléctricos para movilizar pallets. Su operación genera costos por alquiler o adquisición, carga de baterías y utilización diaria. 
          tr(style="background-color: #F6F6F6")
            td #[strong Personal] 
            td(colspan="2") Corresponde al costo del talento humano encargado de recibir, almacenar, controlar, preparar y despachar las mercancías. 
            td(colspan="2") Para atender un aumento de pedidos, una empresa incorpora operarios adicionales en picking y despacho, incrementando los costos de personal del almacén. 
          tr
            td #[strong Servicios y mantenimiento] 
            td(colspan="2") Reúne los gastos necesarios para conservar instalaciones y equipos funcionando adecuadamente, incluyendo energía, refrigeración, vigilancia y mantenimiento. 
            td(colspan="2") Una bodega de productos refrigerados mantiene cámaras frías funcionando permanentemente, generando consumo de energía y mantenimiento periódico de los sistemas de refrigeración. 
          tr(style="background-color: #F6F6F6")
            td #[strong Manipulación de mercancías] 
            td(colspan="2") Hace referencia a los costos generados por descargar, trasladar, ubicar, seleccionar, reubicar y despachar los productos dentro del almacén. 
            td(colspan="2") Una mala distribución obliga a trasladar varias veces los pallets antes del despacho, aumentando horas de trabajo, utilización de montacargas y tiempo operativo. 
          tr
            td #[strong Deterioro y obsolescencia] 
            td(colspan="2") Representa pérdidas ocasionadas cuando los productos almacenados pierden calidad, vigencia, utilidad o valor comercial antes de su venta o utilización. 
            td(colspan="2") Una empresa almacena demasiado inventario de alimentos y parte vence antes de comercializarse, generando pérdidas y costos adicionales para retirar y gestionar esos productos. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Estos costos impactan directamente la rentabilidad de la operación logística, por lo que su control es clave para evitar sobrecostos y mantener el equilibrio entre disponibilidad de producto y eficiencia financiera.
        .bg-primario-p5.rounded-4.p-4.mb-4.py-3
          p.mb-0 En consecuencia, el almacenamiento no debe entenderse como una actividad pasiva dentro de la cadena de suministro, sino como un proceso estratégico que influye en la continuidad del abastecimiento, la organización de inventarios, la preparación de pedidos y el cumplimiento de la promesa de servicio al cliente. 

    .row.justify-content-center.align-items-center
      .col-lg-7
        .bg-primario-p5.rounded-4.p-4.mb-4.mb-lg-0
          h5 Ejemplo empresarial:
          p En los centros de distribución de Tecnoquímicas, los medicamentos y productos de cuidado personal deben organizarse considerando condiciones de conservación, rotación, clasificación por referencias y control de fechas.  
          p.mb-0 Los productos de mayor salida se ubican en zonas de fácil acceso para agilizar el alistamiento de pedidos, mientras que otros requieren áreas específicas por sensibilidad o volumen. Esta gestión del espacio mejora la productividad, reduce recorridos internos, favorece la trazabilidad y ayuda a controlar costos asociados al almacenamiento. 
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/6.png", alt="")
    
    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Sistemas de inventarios, recibo y despacho de mercancías 

    img(data-aos="fade-down-right")(src="@/assets/curso/tema5/7.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 Los inventarios representan el conjunto de materiales, insumos, productos en proceso o productos terminados que una organización mantiene disponibles para atender las necesidades de su operación o del mercado. En la cadena de suministro, su función es equilibrar la relación entre abastecimiento y demanda, permitiendo que la empresa responda de manera oportuna a los requerimientos del cliente, mantenga la continuidad de sus procesos y reduzca el riesgo de desabastecimiento. 

    .bg-secundario-s5.rounded-4.p-4.mb-4
      p.mb-0 La administración de inventarios exige la aplicación de sistemas de control, orientados a registrar, clasificar, ubicar y monitorear las existencias disponibles. Estos sistemas permiten conocer cantidades, rotación, niveles mínimos y máximos, puntos de reposición y condiciones de almacenamiento, facilitando la toma de decisiones sobre compras, abastecimiento y distribución. Dependiendo del tipo de operación, la organización puede aplicar alguno de los siguientes tipos de inventario: 
    
    .row.justify-content-center.cursor-pointer.mb-4
      .col-sm-10.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/8.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Inventario periódico 
            p.mb-0.text-center Actualiza las existencias mediante conteos físicos realizados en intervalos establecidos.  
            p.mb-0.text-center #[strong Ejemplo]: una bodega cuenta mensualmente sus productos para verificar existencias y ajustar diferencias encontradas. 
      .col-sm-10.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/9.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Inventario permanente o perpetuo 
            p.mb-0.text-center Registra continuamente entradas y salidas, manteniendo actualizadas las existencias después de cada movimiento.  
            p.mb-0.text-center #[strong Ejemplo]: un supermercado descuenta automáticamente del inventario las unidades registradas durante cada venta. 
      .col-sm-10.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/10.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Sistemas automatizados de inventario 
            p.mb-0.text-center Utilizan tecnologías como WMS, ERP, códigos de barras o RFID para controlar movimientos y existencias.  
            p.mb-0.text-center #[strong Ejemplo]: un centro de distribución registra recepción, ubicación y despacho mediante WMS y lectores de códigos. 

    p.mb-4 En este contexto, el proceso de recibo de mercancías constituye la entrada formal de productos al sistema logístico de la empresa. Este incluye actividades como: 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/11.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-slider.p-3.p-md-4.rounded-4
          .tarjeta.tarjeta--blanca.p-4
            SlyderA(tipo="b")
              div.p-4
                h4 Verificar documentos
                p.mb-0 Revisar los documentos entregados por el proveedor (factura, remisión, orden de compra, guía de transporte) para validar la información y autorizar el recibo.
              div.p-4
                h4 Inspeccionar cantidades y condiciones físicas
                p Verificar que la cantidad recibida y el estado físico de los productos correspondan a lo indicado en los documentos y cumplan con los estándares establecidos.
              div.p-4
                h4 Validar frente a la orden de compra
                p Comparar la información recibida con la orden de compra para confirmar que el producto, cantidad, referencias y condiciones estén de acuerdo con lo solicitado.
              div.p-4
                h4 Registrar novedades
                p Registrar las diferencias, daños o inconsistencias en el sistema y notificar al área correspondiente para gestionar y dar solución.
              div.p-4
                h4 Ubicar inicialmente el producto
                p Trasladar y ubicar el producto en el área de almacenamiento asignada para su control y custodia.

    p Una recepción adecuada reduce errores, fortalece la trazabilidad y evita inconsistencias que pueden afectar el inventario o la operación posterior. 
    p.mb-4 Por su parte, el despacho de mercancías corresponde al conjunto de actividades mediante las cuales los productos son preparados, verificados y entregados para su distribución o entrega al cliente. Esto incluye actividades como: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        LineaTiempoD.color-acento-botones.mb-4.mb-lg-0
          div(numero="1" titulo="Seleccionar referencias")
            p.mb-0 Identificar y recoger del inventario los productos solicitados según el pedido o la orden de salida.
          div(numero="2" titulo="Alistar pedidos")
            p.mb-0 Reunir, organizar y preparar los productos conforme a las especificaciones del pedido para su verificación.
          div(numero="3" titulo="Validar cantidades")
            p.mb-0 Verificar que la cantidad y las referencias coincidan con lo solicitado, asegurando la exactitud del pedido antes de su despacho.
          div(numero="4" titulo="Embalar")
            p.mb-0 Empacar y proteger los productos adecuadamente para garantizar su integridad durante el transporte y la entrega.
          div(numero="5" titulo="Emitir documentos")
            p.mb-0 Generar y entregar los documentos requeridos (guía de transporte, factura, remisión, etc.) para formalizar el despacho.
          div(numero="6" titulo="Realizar salida física de la mercancía")
            p.mb-0 Entregar la mercancía al transportista y registrar la salida del inventario para su distribución o entrega al cliente.
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/12.png", alt="")

    .bg-contenido-a10.rounded-4.p-4.mb-4.py-3
      p.mb-0.text-center Una gestión adecuada de estos procesos contribuye a la eficiencia de la cadena de suministro, al control de costos y al fortalecimiento del servicio al cliente. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        .bg-secundario-s5.rounded-4.p-4.mb-4.mb-lg-0
          h5 Ejemplo empresarial:
          p en Auteco, el manejo de repuestos para motocicletas exige registrar cada referencia que ingresa desde el proveedor, verificar cantidades, validar el estado del producto y ubicarlo según su clasificación en bodega. 
          p.mb-0 Cuando un distribuidor o taller autorizado solicita un pedido, el sistema permite identificar existencias, preparar el despacho, validar referencias y generar los documentos de salida. Este control de inventarios fortalece la trazabilidad, reduce errores en el despacho y mejora el servicio al cliente. 
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema5/13.png", alt="")
    
    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-primario-p5.p-4.p-lg-3
          .row.justify-content-around.align-items-center
            .col-2.col-lg-1.d-none.d-sm-block
              img.imgw-72(src="@/assets/curso/tema1/25.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Curso gestión de almacenes e inventarios
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con almacenamiento e inventarios: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=p4HfinYEW_Q" target="_blank")
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
                  h5.mb-1 Administración del inventario: elemento clave para la optimización de las utilidades en las empresas
                  p.mb-0 Se invita al aprendiz a profundizar en almacenamiento e inventarios, a través del artículo: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.redalyc.org/pdf/4655/465545892008.pdf" target="_blank")
                    span Ir al recurso









</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
