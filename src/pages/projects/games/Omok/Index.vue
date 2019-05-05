<template lang="pug">
  
  Layout(:pageState="pageState")
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    g-image(alt="Example image" src="~/favicon.png" width="135")
    
    h1 Omok
    h3 A casual turn-based game using http with Corona SDK
   
    p.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    
    .flex-con
      g-image.img(src="./img/color_squares.gif")
      g-image.img(src="./img/pan_nav.gif")

    h2 Lorem ipsum dolor sit

    p.
      Quisque finibus, quam id tristique malesuada, velit libero euismod est, id aliquet justo dui a diam. Maecenas aliquet diam id tincidunt tempus. Proin aliquam eros non nisl venenatis, sed tincidunt nisi porttitor. Donec tincidunt consectetur leo aliquet tincidunt. Proin convallis finibus augue id dapibus. Vestibulum id arcu mi. Morbi non imperdiet leo. Donec rutrum purus eu nulla placerat, ut lobortis orci ullamcorper. Vivamus blandit est vitae ullamcorper iaculis. Maecenas ut felis vehicula, tempor nunc sed, iaculis turpis. Nunc blandit pharetra purus ac efficitur. Pellentesque a ligula ultricies, euismod sem molestie, ultrices eros. Nulla euismod est tellus, sed blandit enim ullamcorper vel. 

    .flex-con
      g-image.img(src="./img/color_squares.gif")
      g-image.img(src="./img/pan_nav.gif")

    
</template>

<script>

export default {
  data(){
    return{
      pageState:{},
    }
  },
  metaInfo(){
    this.pageState.route = this.$route;
    return{
      title: 'Hello, world!'
    }
  }
}
</script>

<style lang="scss" scoped>

.home-links a {
  margin-right: 1rem;
}

.flex-con{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .img{
    margin:20px;
  }
}

</style>
