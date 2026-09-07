<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Productos, servicios y demanda en la cadena de suministro 

    img(data-aos="fade-up")(src="@/assets/curso/tema2/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 La cadena de suministro debe adaptarse a las características de los productos y servicios ofrecidos, así como al comportamiento de la demanda del mercado. Por ello, su gestión requiere analizar la oferta, proyectar necesidades y planear recursos logísticos de forma oportuna, según la naturaleza del portafolio y los niveles de consumo esperados. 

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Productos, servicios, portafolio, empaque y embalaje 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La gestión de productos y servicios constituye un elemento central en la cadena de suministro, ya que define las características de la oferta que la organización pone a disposición del mercado y condiciona las decisiones de abastecimiento, almacenamiento, transporte y distribución. En términos generales, un producto es un bien tangible diseñado para satisfacer una necesidad o resolver un problema del cliente, mientras que un servicio corresponde a una actividad intangible que genera valor a través de la atención, la experiencia, el soporte o la solución ofrecida al usuario. 
        p.mb-0 En el contexto logístico, los productos pueden clasificarse según los siguientes criterios: 

    AcordionA(tipo="a" clase-tarjeta="tarjeta color-acento-contenido").mb-5
      .row.justify-content-center.align-items-center.py-4.p-lg-0(titulo="Naturaleza")
        .col-lg-7
          p Agrupa los productos de acuerdo con sus características físicas, químicas o biológicas, las cuales determinan condiciones específicas para su manipulación, almacenamiento y transporte.  
          p.mb-4.mb-lg-0 #[strong Ejemplos:] alimentos, químicos, textiles, medicamentos o materiales industriales. 
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema2/3.png', alt='')
      .row.justify-content-center.align-items-center.py-4.p-lg-0(titulo="Uso")
        .col-lg-7
          p Clasifica los productos de acuerdo con la finalidad para la cual son adquiridos o utilizados. Pueden destinarse al consumo final, incorporarse a procesos productivos o emplearse como insumos, repuestos y materiales de apoyo. 
          p.mb-4.mb-lg-0 #[strong Ejemplo:] la harina de trigo puede utilizarse como materia prima en una empresa dedicada a la fabricación industrial de productos de panadería. 
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema2/4.png', alt='')
      .row.justify-content-center.align-items-center.py-4.p-lg-0(titulo="Rotación")
        .col-lg-7
          p Organiza los productos según la frecuencia y velocidad con que ingresan y salen del inventario. Permite identificar referencias de alta, media o baja rotación y definir ubicación, niveles de existencias y estrategias de reposición. 
          p.mb-4.mb-lg-0 #[strong Ejemplo:] las bebidas gaseosas pueden presentar alta rotación en supermercados, por lo que requieren reposición frecuente y ubicaciones que faciliten su preparación y despacho 
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema2/5.png', alt='')
      .row.justify-content-center.align-items-center.py-4.p-lg-0(titulo="Volumen")
        .col-lg-7
          p Diferencia los productos considerando el espacio físico que ocupan durante almacenamiento, manipulación y transporte. Esta clasificación facilita determinar capacidad, ubicación, equipos requeridos y aprovechamiento de espacios para mercancías pequeñas, medianas o voluminosas. 
          p.mb-4.mb-lg-0 #[strong Ejemplo:] los electrodomésticos como lavadoras ocupan espacios considerables y requieren planificar posiciones de almacenamiento, equipos de manipulación y capacidad vehicular. 
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema2/6.png', alt='')
      .row.justify-content-center.align-items-center.py-4.p-lg-0(titulo="Fragilidad")
        .col-lg-7
          p Categoriza los productos de acuerdo con su susceptibilidad a sufrir daños por golpes, vibraciones, presión, caídas o manipulación inadecuada. Permite establecer medidas especiales de protección mediante empaque, embalaje, almacenamiento y transporte. 
          p.mb-4.mb-lg-0 #[strong Ejemplo:] las botellas de vidrio requieren separadores, materiales amortiguadores y embalajes resistentes para reducir riesgos de rotura durante almacenamiento y transporte.  
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema2/7.png', alt='')
      .row.justify-content-center.align-items-center.py-4.p-lg-0(titulo="Requerimientos de conservación")
        .col-lg-7
          p Agrupa los productos según las condiciones necesarias para preservar su calidad e integridad durante la operación logística, considerando factores como temperatura, humedad, ventilación, exposición a la luz, higiene y tiempo de almacenamiento. 
          p.mb-4.mb-lg-0 #[strong Ejemplo:] la carne refrigerada requiere mantener temperaturas controladas durante almacenamiento, transporte y distribución para conservar su calidad e inocuidad. 
        .col-sm-8.col-lg-4
          figure
            img(src='@/assets/curso/tema2/8.png', alt='')

    .bg-botones-a5.rounded-4.p-4.mb-4.mb-lg-5
      .row.justify-content-center.align-items-center
        .col-lg-10.col-xl-11
          p.mb-0 En el contexto logístico, los servicios pueden diferenciarse según cómo responden a las necesidades del cliente y a las condiciones de la operación. Aspectos como la estandarización, personalización, rapidez y modalidad de entrega determinan el nivel de servicio ofrecido y los recursos necesarios para cumplirlo
        .col-4.col-lg-2.col-xl-1.d-none.d-lg-block
          img.imgw-75(src="@/assets/curso/tema2/9.png", alt="" data-aos="zoom-in-down")

    TabsC.color-acento-contenido.mb-4.mb-lg-5
      .py-3.py-md-4(titulo="Nivel de estandarización")
        .row.px-4.py-lg-5.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            p Determina qué tan uniforme y repetible es un servicio, mediante procedimientos, tiempos y condiciones previamente establecidos. Una mayor estandarización facilita el control de la operación, la productividad y el cumplimiento de los niveles de servicio.
            p.mb-4.mb-lg-0 #[strong Ejemplo aplicado:] Servientrega maneja procedimientos definidos para recibir, clasificar, transportar y entregar envíos, aplicando condiciones de servicio según el tipo de producto contratado.       
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/tema2/10.png', alt='')
      .py-3.py-md-4(titulo="Personalización")
        .row.px-4.py-lg-5.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            p Corresponde a la adaptación del servicio logístico según requerimientos particulares del cliente, como horarios, cantidades, frecuencias, manipulación, acondicionamiento o condiciones especiales de entrega. Exige mayor flexibilidad y coordinación de recursos. 
            p.mb-4.mb-lg-0 #[strong Ejemplo aplicado:] almacenes Éxito puede solicitar a sus proveedores entregas programadas por centro de distribución, cantidades específicas y mercancía identificada según sus requerimientos de recepción.    
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/tema2/11.png', alt='')
      .py-3.py-md-4(titulo="Tiempo de respuesta ")
        .row.px-4.py-lg-5.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            p Representa el periodo transcurrido desde que el cliente realiza una solicitud o pedido hasta que la organización lo procesa, prepara y atiende. Su reducción requiere disponibilidad de inventario, información oportuna y capacidad operativa. 
            p.mb-4.mb-lg-0 #[strong Ejemplo aplicado:] Rappi articula comercios, plataforma tecnológica y repartidores para gestionar pedidos y realizar entregas de última milla en periodos relativamente cortos.     
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/tema2/12.png', alt='')
      .py-3.py-md-4(titulo="Forma de entrega")
        .row.px-4.py-lg-5.justify-content-center.align-items-center
          .col-lg-7.col-xl-6
            p Define cómo, dónde y en qué condiciones el cliente recibe el producto. Puede contemplar entrega domiciliaria, punto de venta, recogida en tienda, centro de distribución, casillero u otras alternativas según el canal utilizado. 
            p.mb-4.mb-lg-0 #[strong Ejemplo aplicado:] Homecenter Colombia permite, dependiendo del producto y disponibilidad, realizar compras con despacho a domicilio o recoger determinados pedidos mediante sus alternativas de retiro.    
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/tema2/13.png', alt='')

    .bg-primario-p5.rounded-4.p-4.mb-4.mb-lg-5
      .row.justify-content-center.align-items-center
        .col-4.col-lg-2.col-xl-1.d-none.d-lg-block
          img.imgw-90(src="@/assets/curso/tema2/14.png", alt="" data-aos="zoom-in-down")
        .col-lg-10.col-xl-11
          p.mb-0 El portafolio de productos y servicios es la oferta que una organización dispone para atender las necesidades de sus diferentes clientes y mercados. Desde la perspectiva logística, su composición influye directamente en la planeación de la demanda, abastecimiento, inventarios, almacenamiento, preparación de pedidos, transporte y distribución, debido a que cada producto o servicio puede requerir condiciones operativas diferentes.  
          p.mb-0 Dentro del portafolio de productos y servicios, estos elementos permiten organizar la oferta empresarial y facilitan su gestión comercial y logística: 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/15.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-slider.p-3.p-md-4.rounded-4
          .tarjeta.tarjeta--blanca.p-4
            SlyderA(tipo="b")
              div.p-4
                h4 Referencias 
                p Corresponden a las variantes específicas de un producto, diferenciadas por atributos como tamaño, presentación, sabor, color o capacidad. Logísticamente, cada referencia requiere identificación y control individual dentro del inventario. 
                p.mb-0 #[strong Ejemplo:] una bebida gaseosa de 400 ml, 1,5 litros y 2,5 litros representa diferentes referencias que deben controlarse separadamente en almacenamiento y despacho. 
              div.p-4
                h4 Líneas 
                p Agrupan productos relacionados por características, función, marca o necesidad que atienden. Permiten organizar el portafolio y facilitan la planeación conjunta de abastecimiento, inventarios, almacenamiento y distribución. 
                p.mb-0 #[strong Ejemplo:] una empresa de alimentos puede manejar una línea de lácteos integrada por leche, yogur, queso y bebidas lácteas. 
              div.p-4
                h4 Categorías 
                p Reúnen productos o servicios que comparten características generales, usos o necesidades de consumo. Su clasificación facilita analizar demanda, rotación, espacio de almacenamiento y comportamiento comercial de grupos amplios del portafolio. 
                p.mb-0 #[strong Ejemplo:] un supermercado puede manejar categorías como bebidas, alimentos refrigerados, aseo del hogar y cuidado personal, cada una con requerimientos logísticos particulares. 
              div.p-4
                h4 Registrar novedades
                p Registrar las diferencias, daños o inconsistencias en el sistema y notificar al área correspondiente para gestionar y dar solución.
              div.p-4
                h4 Soluciones 
                p Integran productos y servicios para responder de manera conjunta a una necesidad específica del cliente. Su gestión requiere coordinar recursos, actividades y niveles de servicio para entregar una propuesta completa. 
                p.mb-0 #[strong Ejemplo:] un operador logístico puede ofrecer una solución de almacenamiento, gestión de inventarios, preparación de pedidos, transporte y distribución para una empresa de comercio electrónico. 

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Características y relación del empaque y el embalaje
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/16-mob.png", alt="La figura explica la relación entre el empaque y el embalaje dentro de la operación logística, mostrando cómo ambos contribuyen a proteger y conservar los productos durante su recorrido. La secuencia evidencia su integración desde el acondicionamiento inicial de las unidades hasta su agrupación, manipulación, almacenamiento, transporte y entrega. En conjunto, estas actividades facilitan el manejo de la carga, reducen riesgos de daños y favorecen que los productos lleguen al cliente en condiciones adecuadas. ")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/16.png", alt="La figura explica la relación entre el empaque y el embalaje dentro de la operación logística, mostrando cómo ambos contribuyen a proteger y conservar los productos durante su recorrido. La secuencia evidencia su integración desde el acondicionamiento inicial de las unidades hasta su agrupación, manipulación, almacenamiento, transporte y entrega. En conjunto, estas actividades facilitan el manejo de la carga, reducen riesgos de daños y favorecen que los productos lleguen al cliente en condiciones adecuadas. ")
        figcaption Nota. SENA, (2026).

    .bg-primario-p5.rounded-4.p-4.mb-4.mb-lg-5
      p.mb-0 La relación entre producto, servicio, portafolio, empaque y embalaje permite comprender que la cadena de suministro no solo moviliza mercancías, sino que gestiona una propuesta de valor que debe llegar al cliente en condiciones adecuadas de calidad, oportunidad y costo. 

    .row.justify-content-center.align-items-center
      .col-lg-8
        .bg-contenido-a10.rounded-4.p-4.mb-4.mb-lg-0
          h5 Ejemplo empresarial:
          p Grupo Nutresa administra un portafolio amplio de alimentos, entre ellos galletas, cafés, chocolates, cárnicos, helados y pastas.  
          p.mb-0 Cada categoría requiere condiciones distintas de empaque, conservación, manipulación y distribución: por ejemplo, los cárnicos refrigerados demandan cadena de frío, mientras que galletas y chocolates requieren protección contra humedad, golpes o deformaciones. En este contexto, el empaque comercial protege e identifica el producto para el consumidor, mientras que el embalaje logístico facilita su almacenamiento, transporte y distribución sin afectar la calidad. 
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/17.png", alt="")

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Análisis y proyección de la demanda








</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
