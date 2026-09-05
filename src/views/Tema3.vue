<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Proveedores, compras y abastecimiento

    img(data-aos="fade-up")(src="@/assets/curso/tema3/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 La continuidad de la operación logística depende de la capacidad de la empresa para adquirir oportunamente los bienes y servicios que necesita. En este proceso, la gestión de proveedores, compras y abastecimiento resulta esencial para garantizar disponibilidad, calidad, tiempos de respuesta y cumplimiento dentro de la cadena de suministro. 

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 3.1 Proveedores, contratos y sistemas de entrega 

    .bg-botones-a5.p-4.rounded-4.mb-4
      .row.justify-content-center.align-items-center
        .col-4.col-lg-2
          figure
            img.imgw-110.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/tema3/18.png", alt="")
        .col-lg-10
          p.mb-0 Los proveedores son entidades que aportan bienes y servicios a la empresa para cumplir con sus objetivos. Son fundamentales para la cadena de suministro, ya que proporcionan los recursos necesarios para la producción y distribución de productos.
          p.mb-0 La gestión de proveedores es esencial para garantizar la continuidad del suministro, la calidad de los productos y el cumplimiento de los plazos de entrega.
          p.mb-0 Para ello, es necesario establecer relaciones sólidas con los proveedores, definir sus roles y responsabilidades, y gestionar eficientemente las compras y abastecimiento.

    TabsC.color-acento-contenido.mb-4.mb-lg-5
      .p-4.row.justify-content-center.align-items-center(titulo="Tipo de bien o servicio suministrado")
        .col-lg-7
          p Considera la naturaleza de aquello que el proveedor entrega a la organización, como materias primas, insumos, productos terminados, equipos, repuestos o servicios. Esta clasificación permite relacionar cada suministro con las necesidades específicas de producción y operación logística. 
          p.mb-4.mb-lg-0 #[strong Ejemplo:] una empresa de bebidas puede tener proveedores de azúcar, envases, etiquetas, equipos industriales, mantenimiento y servicios de transporte.      
        .col-sm-8.col-lg-4
          figure
            img(data-aos="fade-up")(src="@/assets/curso/tema3/2.png", alt="")
      
      .p-4.row.justify-content-center.align-items-center(titulo="Según el nivel de especialización")
        .col-lg-7
          p Responde al grado de conocimiento técnico, experiencia y capacidad específica que posee el proveedor para atender determinados requerimientos. Puede abarcar desde suministros de uso general hasta productos, tecnologías o servicios altamente especializados para una operación particular. 
          p.mb-4.mb-lg-0 #[strong Ejemplo:] un proveedor especializado suministra sensores, repuestos y soporte técnico para los sistemas automatizados utilizados en un centro de distribución.
        .col-sm-8.col-lg-4
          figure
            img(data-aos="fade-up")(src="@/assets/curso/tema3/3.png", alt="")
      .p-4.row.justify-content-center.align-items-center(titulo="Según la ubicación geográfica ")
        .col-lg-7
          p Toma como referencia la localización del proveedor frente a las instalaciones de la empresa, permitiendo identificar proveedores locales, regionales, nacionales o internacionales. La distancia puede afectar tiempos de reposición, costos de transporte, disponibilidad y riesgos de abastecimiento. 
          p.mb-4.mb-lg-0 #[strong Ejemplo:] una empresa colombiana compra empaques a un proveedor nacional y componentes para maquinaria a un fabricante ubicado en Alemania.
        .col-sm-8.col-lg-4
          figure
            img(data-aos="fade-up")(src="@/assets/curso/tema3/4.png", alt="")
      .p-4.row.justify-content-center.align-items-center(titulo="Según la frecuencia de abastecimiento")
        .col-lg-7
          p Está relacionada con la periodicidad requerida para recibir materiales, productos o servicios. Las entregas pueden ser diarias, semanales, mensuales, programadas u ocasionales, dependiendo del consumo, rotación del inventario, capacidad de almacenamiento y continuidad de la operación. 
          p.mb-4.mb-lg-0 #[strong Ejemplo:] un supermercado recibe productos lácteos diariamente, mientras que determinados equipos y repuestos pueden solicitarse de manera ocasional según las necesidades operativas. 
        .col-sm-8.col-lg-4
          figure
            img(data-aos="fade-up")(src="@/assets/curso/tema3/5.png", alt="")
      .p-4.row.justify-content-center.align-items-center(titulo="Según la relación comercial establecida")
        .col-lg-7
          p Refleja el grado de continuidad, confianza, importancia y colaboración existente entre proveedor y empresa. La relación puede evolucionar desde compras ocasionales hasta vínculos habituales, preferentes o estratégicos que incluyen acuerdos de largo plazo e intercambio de información. 
          p.mb-4.mb-lg-0 #[strong Ejemplo:] un fabricante mantiene una relación estratégica con su proveedor principal de materia prima, compartiendo pronósticos de demanda para programar anticipadamente las entregas. 
        .col-sm-8.col-lg-4
          figure
            img(data-aos="fade-up")(src="@/assets/curso/tema3/6.png", alt="")
  
    .row.justify-content-center.align-items-center.mb-4
      .col-sm-10.col-lg-5.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/7.png", alt="" data-aos="zoom-in-down")
      .col-sm-10.col-lg-7
        p Esta diversidad exige que la organización defina criterios de selección orientados a evaluar la capacidad de suministro, calidad, cumplimiento, flexibilidad, condiciones comerciales, respaldo técnico y nivel de riesgo.
        p La relación con el proveedor se formaliza mediante contratos, entendidos como acuerdos que establecen las condiciones comerciales, operativas y legales del suministro. En el ámbito logístico, los contratos suelen definir aspectos como cantidades, especificaciones del producto o servicio, tiempos de entrega, condiciones de pago, responsabilidades de transporte, condiciones de devolución, penalidades por incumplimiento y mecanismos de seguimiento. La adecuada estructuración contractual permite reducir la incertidumbre, prevenir conflictos y asegurar condiciones claras para la operación.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .bg-contenido-a10.p-4.rounded-4.mb-4.mb-lg-0
          p.mb-0 Junto a la gestión contractual, los sistemas de entrega representan un elemento fundamental del abastecimiento. Estos sistemas determinan la forma en que los materiales o productos llegan a la empresa, considerando frecuencia, volumen, programación, nivel de coordinación y responsabilidad logística. Entre los esquemas más comunes se encuentran las entregas programadas, las entregas consolidadas, el abastecimiento continuo, las entregas bajo pedido y los modelos sincronizados con la demanda. La elección del sistema de entrega debe responder a la naturaleza del producto, la capacidad de almacenamiento, la criticidad del insumo y el comportamiento de la demanda.
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/8.png", alt="")
    
    p.mb-4 En consecuencia, la gestión de proveedores, contratos y sistemas de entrega constituye una base esencial para la eficiencia de la cadena de suministro, en la medida en que fortalece la disponibilidad de recursos, mejora la coordinación logística y contribuye al cumplimiento de los objetivos operativos de la organización. 

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/9.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        .bg-secundario-s5.p-4.rounded-4
          h5.mb-3 Ejemplo empresarial: 
          p En Grupo Nutresa, el abastecimiento depende de una red de proveedores de materias primas, empaques, ingredientes, servicios logísticos y materiales de soporte para sus diferentes negocios. 
          p.mb-0 La relación con estos proveedores se apoya en acuerdos y lineamientos de abastecimiento que establecen condiciones de calidad, sostenibilidad, cumplimiento y entrega. De esta manera, la organización puede coordinar entregas programadas, abastecimiento continuo o reposiciones según la naturaleza del producto y las necesidades de producción y distribución.

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-up")
      h2 3.2 Compras, abastecimiento y #[em lead time] de pedido y entrega 

    p La función de compras comprende el conjunto de actividades orientadas a adquirir los bienes y servicios requeridos por la organización en las condiciones adecuadas de calidad, cantidad, precio, tiempo y lugar.  
    .bg-secundario-s5.p-4.rounded-4.mb-3
      p.mb-0 Dentro de la cadena de suministro, esta función no se limita a la transacción comercial, sino que forma parte del proceso estratégico de abastecimiento, ya que conecta las necesidades operativas de la empresa con la capacidad de respuesta del mercado proveedor. 
    p.mb-4.mb-lg-5 El abastecimiento corresponde al proceso mediante el cual la organización asegura la disponibilidad de materiales, productos o recursos necesarios para mantener la continuidad de sus operaciones. Este proceso lo integran las siguientes actividades: 

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5
      .col-sm-6.col-lg-4.mb-4
        .bg-adicional-2.p-4.rounded-4.h-100
          .row
            .col-9
              h5 Identificación de necesidades
              p.mb-0 Determina los materiales, productos o servicios requeridos, considerando cantidades, especificaciones, inventarios disponibles, demanda prevista y fechas necesarias para garantizar la continuidad de las operaciones.
            .col-3
              figure
                img(src="@/assets/curso/tema3/10.svg", alt="")
      .col-sm-6.col-lg-4.mb-4
        .bg-adicional-2.p-4.rounded-4.h-100
          .row
            .col-9
              h5 Selección de proveedores 
              p.mb-0 Evalúa y elige proveedores según criterios de calidad, precio, capacidad de suministro, cumplimiento, tiempos de entrega y condiciones comerciales, procurando responder adecuadamente a los requerimientos de abastecimiento. 
            .col-3
              figure
                img(src="@/assets/curso/tema3/11.svg", alt="")
      .col-sm-6.col-lg-4.mb-4
        .bg-adicional-2.p-4.rounded-4.h-100
          .row
            .col-9
              h5 Negociación de condiciones
              p.mb-0 Establece acuerdos con los proveedores sobre precios, cantidades, descuentos, formas de pago, tiempos de entrega, calidad, garantías y responsabilidades, buscando condiciones favorables para ambas partes. 
            .col-3
              figure
                img(src="@/assets/curso/tema3/12.svg", alt="")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .bg-adicional-2.p-4.rounded-4.h-100
          .row
            .col-9
              h5 Emisión de órdenes de compra 
              p.mb-0 Formaliza la adquisición mediante un documento que especifica productos o servicios, cantidades, precios, fechas de entrega y demás condiciones acordadas, facilitando el control y trazabilidad de la compra. 
            .col-3
              figure
                img(src="@/assets/curso/tema3/13.svg", alt="")
      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .bg-adicional-2.p-4.rounded-4.h-100
          .row
            .col-9
              h5 Seguimiento a entregas 
              p.mb-0 Controla el cumplimiento de las órdenes de compra mediante la verificación de fechas, cantidades y condiciones pactadas, permitiendo anticipar retrasos, faltantes u otras novedades que puedan afectar la operación. 
            .col-3
              figure
                img(src="@/assets/curso/tema3/14.svg", alt="")
      .col-sm-6.col-lg-4
        .bg-adicional-2.p-4.rounded-4.h-100
          .row
            .col-9
              h5 Recepción de bienes o servicios adquiridos 
              p.mb-0 Verifica que los bienes o servicios recibidos correspondan con lo solicitado, revisando cantidades, especificaciones, calidad, estado y documentación antes de aceptar y registrar la adquisición. 
            .col-3
              figure
                img(src="@/assets/curso/tema3/15.svg", alt="")

    p.mb-4 Su adecuada gestión permite prevenir rupturas de inventario, optimizar niveles de existencias, controlar costos y garantizar el flujo oportuno de recursos hacia los procesos productivos, comerciales o de servicio.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/16.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p En este contexto, el análisis del lead time es un elemento crítico para la planeación logística. El lead time de pedido corresponde al tiempo transcurrido desde que se identifica la necesidad de compra y se emite la orden hasta que esta es procesada por el proveedor. Por su parte, el lead time de entrega comprende el tiempo que tarda el proveedor en despachar y hacer llegar el producto o servicio a la empresa, incluyendo las actividades de preparación, transporte y recepción. La suma de estos tiempos incide directamente en la programación de compras, la reposición de inventarios y la capacidad de respuesta frente a la demanda.
        .bg-contenido-a10.p-4.rounded-4.py-3
          p.mb-0 Una gestión eficiente del lead time permite sincronizar el abastecimiento con los requerimientos de la operación, reducir tiempos muertos, evitar sobre inventarios y minimizar riesgos de desabastecimiento. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        .bg-secundario-s5.p-4.rounded-4.mb-4.mb-lg-0
          h5.mb-3 Ejemplo empresarial: 
          p En una cadena de restaurantes como McDonald´s Colombia, la compra de pollo, papas, bebidas, empaques y otros insumos debe realizarse considerando el tiempo que transcurre entre la solicitud del pedido, su procesamiento y la entrega al punto de consumo o centro de preparación.  
          p Si el #[em lead time] de un insumo crítico se extiende más de lo previsto, la empresa puede enfrentar desabastecimiento, afectando la preparación del menú y el servicio al cliente. Por ello, el área de compras debe anticipar necesidades, coordinar con proveedores y monitorear tiempos de entrega para asegurar continuidad operativa. 
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/17.png", alt="")
    
    .bg-primario-p5.p-4.rounded-4.mb-4
      p.mb-0 En síntesis, las compras y el abastecimiento constituyen procesos clave dentro de la cadena de suministro, pues garantizan la disponibilidad de recursos para el desarrollo de la operación logística. Su articulación con el análisis del lead time favorece la planeación, la eficiencia operativa y la continuidad del servicio en contextos empresariales cada vez más dinámicos.

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-primario-p5.p-4.p-lg-3
          .row.justify-content-around.align-items-center
            .col-2.col-lg-1.d-none.d-sm-block
              img.imgw-72(src="@/assets/curso/tema1/25.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Curso: gestión de compras y abastecimiento.
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con proveedores, compras y abastecimiento: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=NsyoTPh1mcU" target="_blank")
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
                  p.mb-0 Se invita al aprendiz a profundizar en proveedores, compras y abastecimiento, a través del siguiente libro (página 65-78): 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://gc.scalahed.com/recursos/files/r161r/w24118w/AdmComprasAbasteS2.pdf" target="_blank")
                    span Ir al recurso

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
