<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    img(data-aos="fade-up")(src="@/assets/curso/intro.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 El componente formativo Fundamentos de la cadena de suministro y de los procesos logísticos desarrolla los conceptos esenciales para comprender la integración de las operaciones logísticas en el entorno empresarial. Su estudio permite reconocer cómo se articulan el abastecimiento, la gestión de proveedores, el transporte, el almacenamiento, la distribución y los inventarios dentro de una red de suministro orientada a la generación de valor.

    .p-4.bg-botones-a5.rounded-4.py-3
      p.mb-0 Su importancia radica en que proporciona bases para analizar el flujo de bienes, información y recursos desde el proveedor hasta el cliente final, favoreciendo la eficiencia operativa, la optimización de costos y la toma de decisiones logísticas en la organización. El componente se abordará de manera progresiva, iniciando con la estructura de la cadena de suministro, continuando con la gestión de productos, demanda, abastecimiento, transporte, almacenamiento e inventarios, y finalizando con el análisis de los costos logísticos y la eficiencia operativa.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
