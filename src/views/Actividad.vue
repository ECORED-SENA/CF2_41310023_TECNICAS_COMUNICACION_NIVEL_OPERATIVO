<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Liderazgo y participación en el entorno empresarial.',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar los fundamentales de liderazgo y participación en el entorno empresarial, así como los diferentes tipos de liderazgo y sus características clave.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es el liderazgo?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un conjunto de habilidades para guiar e influenciar a otros. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La capacidad de tomar decisiones sin titubear. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La habilidad de crear un entorno creativo. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El poder para controlar y supervisar a los empleados. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es una de las principales funciones del liderazgo? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar a los empleados. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Motivar a los compañeros de trabajo. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tomar decisiones unilaterales. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar conflictos laborales. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué implica el liderazgo transformacional? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El control estricto de las transacciones. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La utilización de altos niveles de comunicación para lograr los objetivos. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La concentración en las tareas actuales sin preocuparse por el futuro. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La delegación total de las responsabilidades a los empleados. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de liderazgo se caracteriza por no intervenir y permitir a los empleados una alta autonomía? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Liderazgo <em>laissez-faire</em>. ',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Liderazgo democrático. ', esCorrecta: false },
            { id: 'c', texto: 'Liderazgo autocrático. ', esCorrecta: false },
            {
              id: 'd',
              texto: 'Liderazgo transformacional. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es una ventaja del liderazgo democrático? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La rapidez en la toma de decisiones. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fomenta la participación y compromiso de los empleados. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La falta de <em>feedback</em> regular. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ausencia de conflictos laborales. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué debe hacer un buen líder para ser efectivo? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tener confianza en sí mismo. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar tomar decisiones difíciles. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Delegar todas las tareas a los subordinados. ',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Ser rígido y autoritario. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué característica no pertenece al liderazgo autocrático? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Concentra todo el poder. ', esCorrecta: false },
            {
              id: 'b',
              texto: 'Promueve el diálogo y la participación. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Toma decisiones rápidas y unilaterales. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No toma en cuenta la opinión de los trabajadores. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es el enfoque principal del liderazgo transaccional? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Orientarse a los objetivos mediante intercambios y recompensas. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crear un entorno altamente creativo. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permitir la total autonomía de los empleados. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer una visión a largo plazo. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué aspecto es fundamental en la participación laboral? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser un miembro activo en los procesos de la empresa. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mantenerse al margen de las decisiones importantes. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar involucrarse en tareas ajenas. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Delegar responsabilidades a otros. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es una característica de un líder transformacional? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Motiva y aumenta la productividad del grupo. ',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Evita asumir riesgos. ', esCorrecta: false },
            {
              id: 'c',
              texto: 'Se centra exclusivamente en las transacciones actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Promueve la estabilidad sin cambios en la organización. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
