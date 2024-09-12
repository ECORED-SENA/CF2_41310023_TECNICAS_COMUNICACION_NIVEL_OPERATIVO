<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg(data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-6.col-md-7.pe-lg-0(style="place-self:center;")
            figure.m-auto.col-9.col-md-12
              img(src="@/assets/curso/intro1.svg")
          .col-lg-6.col-md-12.ps-lg-0
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#E6FBF8;")
              p.mb-0 Para que una empresa se consolide en el mercado, necesita diversos elementos que le ayuden a establecer una base sólida. Entre estos elementos, las políticas empresariales son fundamentales, ya que constituyen las directrices que indican la ruta a seguir y cómo actuar en diferentes situaciones. Una política empresarial efectiva debe reflejar la visión y la proyección de la empresa. 
        p.mt-4 Estas políticas carecen de relevancia si no se difunden adecuadamente. Aquí es donde la comunicación se convierte en una herramienta clave para divulgar las políticas empresariales, tanto dentro como fuera de la organización. Cuando se busca proyectar una imagen positiva de la empresa hacia el exterior, es imprescindible recurrir a la comunicación externa. 
      .col-lg-auto.d-none.d-xl-block(data-aos="fade-left" data-aos-delay="500")
        figure 
          img(src="@/assets/curso/intro2.png")
    
    .row.mt-4
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-9.col-md-7.col-lg-12
          img(src="@/assets/curso/intro3.png")
      .col-lg(data-aos="fade-left")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure 
              img(src="@/assets/curso/intro4.svg")
          .col(style="place-self:center;")
            p.mb-0 En este proceso, el trabajador desempeña un papel crucial, ya que es quien debe conocer, apropiarse y aplicar las políticas empresariales. Además, el trabajador puede contribuir a su difusión tanto dentro como fuera de la empresa. 
        p.mt-4.mb-0  Actualmente, las organizaciones son más conscientes de la importancia de los miembros de la empresa en este contexto. Por ello, se esfuerzan no solo en que los empleados reconozcan las políticas empresariales, sino también en fomentar cualidades de liderazgo y participación, de manera que se conviertan en actores activos en el proceso de alcanzar las metas institucionales. 




    
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
