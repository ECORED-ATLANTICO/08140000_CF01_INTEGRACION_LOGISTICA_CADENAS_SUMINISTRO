<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Integración logística de cadenas de suministro',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos, procesos y elementos básicos de la cadena de suministro, el abastecimiento, el transporte, el almacenamiento, la distribución, los inventarios y los costos logísticos en contextos empresariales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué se entiende por cadena de suministro en una organización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El área encargada únicamente de vender productos al consumidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El conjunto de procesos, actores y recursos que intervienen en el flujo de bienes desde el proveedor hasta el cliente final.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El proceso de contratación del personal de una empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La estrategia de publicidad utilizada para posicionar una marca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La cadena de suministro integra procesos, actores y recursos para garantizar el flujo de bienes y servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes elementos corresponde a un nodo de la red de suministro?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estrategia de fidelización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Campaña publicitaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Centro de distribución.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estudio de mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los centros de distribución son nodos donde se realizan operaciones logísticas dentro de la red de suministro.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué flujo de la cadena de suministro se relaciona con pedidos, reportes e información entre actores?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Flujo de información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Flujo financiero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Flujo de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Flujo de promoción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El flujo de información conecta a los actores de la cadena mediante datos, reportes y pedidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la función principal del empaque en la cadena de suministro?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar los costos logísticos de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar el proceso de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir el transporte de mercancías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Proteger, contener e identificar el producto para su comercialización y manipulación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El empaque protege e identifica el producto, facilitando su comercialización y manejo logístico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué aspecto analiza la proyección de la demanda dentro de la operación logística?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La estructura jurídica de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El comportamiento futuro de las necesidades del mercado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La nómina del área comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La decoración del punto de venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La proyección de la demanda permite anticipar necesidades de abastecimiento, inventario y distribución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el propósito principal de la gestión de proveedores?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar el suministro oportuno de bienes o servicios requeridos por la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar campañas de mercadeo digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir la función del cliente en la cadena.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La gestión de proveedores busca asegurar la disponibilidad de bienes y servicios para la operación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué expresa el <em>lead time</em> en un proceso de abastecimiento?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de productos vendidos en un periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El costo del embalaje del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El tiempo transcurrido entre la solicitud del pedido y la entrega del bien o servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La rotación del inventario en la bodega.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El lead time mide el tiempo que tarda un pedido desde su solicitud hasta su entrega.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál de los siguientes corresponde a un modo de transporte?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Punto de equilibrio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inventario permanente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Segmentación del mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Marítimo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El transporte marítimo es uno de los modos utilizados para movilizar mercancías en la cadena de suministro.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué herramienta permite programar la reposición y el desplazamiento de productos en la red de distribución?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CRM.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'DRP.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'DOFA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'ERP contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El DRP facilita la planeación de requerimientos de distribución y la coordinación de inventarios y despachos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la finalidad principal del almacenamiento en la cadena de suministro?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Resguardar, organizar y controlar productos para asegurar su disponibilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar el transporte de mercancías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir el proceso de compras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El almacenamiento garantiza la conservación, organización y disponibilidad de los productos en la operación logística.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué representan los inventarios dentro de la operación logística?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las campañas de posicionamiento comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los contratos firmados con los proveedores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las rutas de transporte utilizadas por la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El conjunto de existencias disponibles para atender la operación o la demanda.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Los inventarios son las existencias que permiten responder a las necesidades de la operación y del mercado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una característica de los costos variables en logística?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo se presentan en el área comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permanecen iguales sin importar el volumen operado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cambian según el nivel de actividad o volumen de operación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No tienen relación con el transporte o almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los costos variables se modifican de acuerdo con el nivel de actividad logística.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué permite identificar el costeo basado en actividades (ABC)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El número de empleados por área.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El costo real de las actividades desarrolladas en la operación logística.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La cantidad de clientes de una campaña comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La segmentación geográfica del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El costeo ABC permite analizar cuánto consumen las actividades logísticas y cómo impactan los costos de la operación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué refleja una operación logística eficiente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El uso óptimo de recursos, tiempos, espacios y costos sin afectar el servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El incremento permanente de inventarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación de todos los costos de transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La reducción de proveedores sin análisis previo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La eficiencia operativa implica aprovechar los recursos disponibles sin afectar la calidad del servicio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué finalidad tiene la proyección de la demanda en la cadena de suministro?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir únicamente campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir el análisis de proveedores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el uso de inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Anticipar necesidades de abastecimiento, inventario y distribución.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La proyección de la demanda permite prever necesidades futuras y planear mejor el abastecimiento, los inventarios y la distribución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de los siguientes aspectos hace parte de la gestión de proveedores en la cadena de suministro?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaboración del presupuesto de mercadeo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseño del empaque del producto terminado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Selección, evaluación y seguimiento del proveedor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Definición del manual de funciones del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La gestión de proveedores implica seleccionar, evaluar y hacer seguimiento al desempeño de quienes suministran bienes o servicios a la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué caracteriza al transporte multimodal dentro de la operación logística?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El uso de varios modos de transporte bajo una coordinación logística integrada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El almacenamiento de mercancías en un solo punto de venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La reducción automática de todos los costos fijos de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La clasificación de productos según su rotación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El transporte multimodal integra varios modos de transporte bajo una misma coordinación logística para facilitar el traslado de mercancías.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué función cumple el recibo de mercancías en el proceso logístico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir el proceso de distribución al cliente final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar, registrar y dar ingreso a los productos recibidos por la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar los costos de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar el control de inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El recibo de mercancías permite verificar cantidades, condiciones y documentos antes de ingresar los productos al sistema logístico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el propósito principal del costeo basado en actividades (ABC) en logística?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificar proveedores según su ubicación geográfica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Medir la satisfacción del cliente frente al servicio recibido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar la proyección de la demanda en la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Asignar costos a partir de las actividades que consumen recursos en la operación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El costeo ABC permite identificar el costo real de las actividades logísticas y su impacto en la operación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué se entiende por eficiencia operativa en la cadena de suministro?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La eliminación total de proveedores en la operación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El incremento permanente de inventarios sin control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La capacidad de ejecutar los procesos logísticos con el mejor uso posible de recursos, tiempo y costos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La reducción del transporte sin considerar el servicio al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La eficiencia operativa implica desarrollar la operación logística optimizando recursos, tiempos y costos sin afectar el nivel de servicio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Felicidades, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
