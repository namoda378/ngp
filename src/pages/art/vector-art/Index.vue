<template lang="pug">
  Layout
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    
    Ctext
      h1 Vector Arts
    
      .bl

      h3 ChryslerTower
      g-image(src="~/assets/vector-art/ChryslerTower.svg" style="width:300px;height:800px;")

      .bl
    
      h3 GlassDome
      g-image(src="~/assets/vector-art/GlassDome.svg" style="width:500px;height:auto;")
      
      .bl 

      h3 SimpleMonster
      g-image(src="~/assets/vector-art/SimpleMonster.svg" style="width:500px;height:auto;")
      
      .bl 


</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
