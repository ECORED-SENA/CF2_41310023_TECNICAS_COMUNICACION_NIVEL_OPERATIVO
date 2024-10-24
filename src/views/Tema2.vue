<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Las políticas y la comunicación

    .row
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-up")
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#CCF6F0;border-radius:14px;")
          p.mb-0 Las políticas empresariales no tienen el mismo impacto si los miembros de la empresa las desconocen. No basta con que sepan dónde encontrarlas; también es necesario que las comprendan. Es decir, cada empleado debe ser capaz de describir, con sus propias palabras, cómo su labor contribuye al cumplimiento de las políticas de la empresa. 
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-down" style="place-self:center;")
        figure.m-auto.col-8.col-md-6.col-lg-12 
          img(src="@/assets/curso/tema2/1.svg")
      .col-lg-4(data-aos="fade-left" style="place-self:end;")
        figure.mb-3.col-5.col-md-5.col-lg-6
          img(src="@/assets/curso/tema2/2.svg")
        p.mb-0 Esto implica que el personal debe incorporar estas políticas en su trabajo diario. Para lograrlo, es fundamental socializarlas con todos los miembros de la empresa, lo cual hace indispensable una comunicación efectiva dentro de la organización. 
    
    .cont_2_1.mt-4
      .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
        .row
          .col-auto.pe-0.ps-lg-4(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema1/23.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4.pt-lg-3 La comunicación en las empresas 
    
      p(data-aos="fade-up") Descubran la importancia de la comunicación en las empresas y cómo puede marcar la diferencia. Los invitamos a revisar este video:  

      figure.mt-4(data-aos="zoom-in-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/TJV3MjTNzHE?si=J2Z2s8NL-HPnX7HM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
      .col-xl-10.m-auto.mt-4
        .p-4.p-md-3(style="background-color:#340B81;border-radius:55px;" data-aos="zoom-in")
          .row  
            .col-auto.d-md-block.d-none(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/3.svg")
            .col(style="place-self:center;")
              p.mb-0.text-white Las estrategias de innovación en las empresas suelen recaer preferentemente en la comunicación externa, antes que en la interna.
      

        




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
