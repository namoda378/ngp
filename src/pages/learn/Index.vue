<template lang="pug">
 
  Layout
    
    Dtext

      h2 Hello, This is the Learning Page
   
      h3(v-if="luts" v-for="(lut,idx) in luts" :key="idx") 
        g-link(:to="lut.node.path") aa

</template>
<page-query>
query Lut {
  luts: allLut {
    edges {
      node { 
        id
        title
        path
        json
      }
    }
  }
}
</page-query>
<script>
export default {
  data(){
    return{
      luts:null,
    }
  },
  metaInfo(){
    this.$page.luts.edges.forEach(lut=>{
      console.log(lut);
      console.log(lut.node.json);
      lut.obj = JSON.parse(lut.node.json);
    });

    this.luts = this.$page.luts.edges;

    return{
      title: 'Hello, world!'
    }
  },
  created(){
    console.log(this.$page);
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
