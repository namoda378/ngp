<template lang="pug">
  
  Layout
    Ctext
      h1()
        span(style="font-size:0.5em;").
          About.&nbsp 
        span(style="font-family:'ZCOOL KuaiLe';").
          Namo
      
      .bl

      g-image(alt="Example image" src="~/favicon.png" width="135")

      .bl

      .p4 I've been a developer since 2014. 
      .p4 At the start I wanted to make awesome games. 
      .p4 Now I'd like to make super useful webservices as well.

      .bl2

      h2
       | Techs that I &nbsp
       faw.pink(icon="heart")

      
      .bl2


      .c-con
        .item
          g-image(src="~/assets/tech-logos/git-icon.png" width="135")
        .item
          g-image(src="~/assets/tech-logos/vue-icon.png" width="135")
        .item
          g-image(src="~/assets/tech-logos/webpack-icon.png" width="135")

      .bl4

      h2 Contact Me

        




</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style lang="scss" scoped>
  .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &:after {
      position: absolute;
      width: 74%;
      height: 22%;
      border-radius: 50%;
      z-index: -1;
      bottom: -20%;
      content: "";
      box-shadow: 0 50px 24px rgba(0,0,0,0.24);
    }
  }

</style>

