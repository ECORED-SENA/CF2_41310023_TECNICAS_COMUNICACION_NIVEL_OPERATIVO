<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Política empresarial
    
    .cont_1_1.p-4.ps-lg-5(data-aos="zoom-in")
      .row
        .col-lg-8.order-2.order-lg-1(style="place-self:center;")
          .bg-white.p-4.p-xl-5
            p.mb-0 Una empresa es una organización compuesta por personas que realizan una labor determinada, pero para que toda organización funcione respondiendo a las exigencias del entorno, las empresas definen su política empresarial de la manera más conveniente para que así esta se convierta en el norte. Las políticas empresariales se convierten en ese derrotero que permite que la organización tenga claridad en las acciones y las estrategias que llevará a cabo, por eso son tan importantes. 
        .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(style="place-self:center;")
          figure.m-auto.col-8.col-md-5.col-lg-7
            img(src="@/assets/curso/tema1/1.svg")
      
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .h-100.p-2.pb-0.d-flex.flex-wrap.align-items-end.justify-content-center(style="background-color:#AE9DCC;border-radius:8px;")
          figure.col-7.col-md-6.col-lg-12  
            img(src="@/assets/curso/tema1/2.svg")
      .col-lg-8(data-aos="fade-left")
        p A continuación, se explican que son las políticas empresariales: 
        .p-4(style="background-color:#2A0967;border-radius:10px;")
          .row
            .col-lg-auto.md-4.mb-lg-0 
              figure.m-auto.col-7.col-md-5.col-lg-12
                img(src="@/assets/curso/tema1/3.svg")
            .col-lg(style="place-self:end;")
              h4(style="color:#F7B71B;") Pódcast
              TarjetaAudio.color-primario.mb-3(
                texto="Las políticas empresariales"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                tiempo
              )
        .row.mt-4
          .col-md-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/4.svg")
          .col-md(style="place-self:center;")
            p.mb-0 Es importante aclarar que las normas son reglas específicas que deben seguirse o adaptarse a las conductas, tareas o actividades dentro de una organización para asegurar el cumplimiento de una política organizacional. Por lo tanto, forman parte esencial de las políticas empresariales.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1  Características esenciales de una política empresarial 
    
    .cont_1_2
      p(data-aos="fade-up") Dada la importancia de las políticas empresariales en una organización, es fundamental que, al momento de formularlas, se consideren ciertas características básicas que permitan su efectividad. 

      .col-xl-11.m-auto.mt-4
        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up" style="place-self:center;")
            figure.m-auto.col-8.col-md-5.col-lg-12
              img(src="@/assets/curso/tema1/6.svg")
          .col-lg-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 p-4")
              .tarjeta.cont_1_3.p-4
                .pb-4.ps-3.pe-3
                  figure.text-center
                    img(src="@/assets/curso/tema1/7.svg" style="max-width:100px;display:inline;")
                  p.mb-0.mt-3.text-center Deben guiar las acciones de la empresa, basándose en sus valores y ajustándose tanto a su realidad organizacional como a las expectativas de sus clientes. 
              .tarjeta.cont_1_3.p-4
                .pb-4.ps-3.pe-3
                  figure.text-center
                    img(src="@/assets/curso/tema1/8.svg" style="max-width:100px;display:inline;")
                  p.mb-0.mt-3.text-center Se fundamentan en la definición de la institución, su filosofía y cultura empresarial, así como en su estrategia, para establecer los criterios de gestión empresarial.
              .tarjeta.cont_1_3.p-4
                .pb-4.ps-3.pe-3
                  figure.text-center
                    img(src="@/assets/curso/tema1/9.svg" style="max-width:100px;display:inline;")
                  p.mb-0.mt-3.text-center Cuando están bien elaboradas, permiten definir los criterios para la asignación de recursos en las diferentes funciones y áreas de la institución.
              .tarjeta.cont_1_3.p-4
                .pb-4.ps-3.pe-3
                  figure.text-center
                    img(src="@/assets/curso/tema1/10.svg" style="max-width:100px;display:inline;")
                  p.mb-0.mt-3.text-center Deben definir los objetivos que la organización desea alcanzar.
              .tarjeta.cont_1_3.p-4
                .pb-4.ps-3.pe-3
                  figure.text-center
                    img(src="@/assets/curso/tema1/11.svg" style="max-width:100px;display:inline;")
                  p.mb-0.mt-3.text-center Es esencial que incluyan un componente ético-social, garantizando la aplicación de valores éticos y sus correspondientes normas para lograr la responsabilidad social.
              .tarjeta.cont_1_3.p-4
                .pb-4.ps-3.pe-3
                  figure.text-center
                    img(src="@/assets/curso/tema1/12.svg" style="max-width:100px;display:inline;")
                  p.mb-0.mt-3.text-center Deben ser comunicadas a todos los miembros de la organización, incluyendo no solo a los trabajadores, sino también a clientes, proveedores y otros actores que interactúan con la empresa.
              .tarjeta.cont_1_3.p-4
                .pb-4.ps-3.pe-3
                  figure.text-center
                    img(src="@/assets/curso/tema1/13.svg" style="max-width:100px;display:inline;")
                  p.mb-0.mt-3.text-center Deben actualizarse conforme a los contextos y realidades de la empresa, para mantener su relevancia.
              .tarjeta.cont_1_3.p-4
                .pb-4.ps-3.pe-3
                  figure.text-center
                    img(src="@/assets/curso/tema1/14.svg" style="max-width:100px;display:inline;")
                  p.mb-0.mt-3.text-center Deben orientar claramente las decisiones y actuaciones en respuesta a situaciones específicas.
              .tarjeta.cont_1_3.p-4
                .pb-4.ps-3.pe-3
                  figure.text-center
                    img(src="@/assets/curso/tema1/15.svg" style="max-width:100px;display:inline;")
                  p.mb-0.mt-3.text-center Deben encaminar de manera efectiva las decisiones y acciones de la empresa.
      
      p.mt-5(data-aos="fade-right") La importancia de las políticas empresariales: 

    .row.mt-4.justify-content-center
      .col-lg-4.mb-4.col-md-6(data-aos="zoom-in-up")
        .h-100.cont_1_4
          img.figure_absolute(src="@/assets/curso/tema1/16.svg")
          figure
            img(src="@/assets/curso/tema1/17.png")
          .p-4.pb-5
            p.mb-0.text-center Motivan las normas generales de actuación de la empresa, determinando así los valores que posee la misma.
      .col-lg-4.mb-4.col-md-6(data-aos="zoom-in-up")
        .h-100.cont_1_4
          img.figure_absolute(src="@/assets/curso/tema1/16.svg")
          figure
            img(src="@/assets/curso/tema1/18.png")
          .p-4.pb-5
            p.mb-0.text-center Orientan la dirección a tomar en caso de que exista cualquier tipo de conflicto.
      .col-lg-4.mb-4.col-md-6(data-aos="zoom-in-up")
        .h-100.cont_1_4
          img.figure_absolute(src="@/assets/curso/tema1/16.svg")
          figure
            img(src="@/assets/curso/tema1/19.png")
          .p-4.pb-5
            p.mb-0.text-center Permiten crear una imagen empresarial y un fortalecimiento alrededor de esta.
      .col-lg-4.mb-4.col-md-6(data-aos="zoom-in-up")
        .h-100.cont_1_4
          img.figure_absolute(src="@/assets/curso/tema1/16.svg")
          figure
            img(src="@/assets/curso/tema1/20.png")
          .p-4.pb-5
            p.mb-0.text-center Definen los objetivos acerca de qué tipo de empresa se quiere llegar a ser.
      .col-lg-4.mb-4.col-md-6(data-aos="zoom-in-up")
        .h-100.cont_1_4
          img.figure_absolute(src="@/assets/curso/tema1/16.svg")
          figure
            img(src="@/assets/curso/tema1/21.png")
          .p-4.pb-5
            p.mb-0.text-center Al seguirse a cabalidad, permiten generar un clima de cordialidad y una imagen positiva.
      .col-lg-4.mb-4.col-md-6(data-aos="zoom-in-up")
        .h-100.cont_1_4
          img.figure_absolute(src="@/assets/curso/tema1/16.svg")
          figure
            img(src="@/assets/curso/tema1/22.png")
          .p-4.pb-5
            p.mb-0.text-center Permiten la creación de manuales que orienten la labor diaria en las dependencias de la empresa.
      


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
