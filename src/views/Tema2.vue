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
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#CCF6F0;")
          p.mb-0 Las políticas empresariales no tienen el mismo impacto si los miembros de la empresa las desconocen. No basta con que sepan dónde encontrarlas; también es necesario que las comprendan. Es decir, cada empleado debe ser capaz de describir, con sus propias palabras, cómo su labor contribuye al cumplimiento de las políticas de la empresa. 




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
