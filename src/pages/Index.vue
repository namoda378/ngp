  <template lang="pug">
    
    Layout
      
        faw(icon="home")
        g-image(alt="Example image" src="~/favicon.png" width="135")
    
</template>

<style lang="scss" scoped>

.home-links a {
  margin-right: 1rem;
}
</style>

<script>
export default {
  metaInfo(){
    console.log(this);
    return{
      title: 'Hello, world!'
    }
  }
  
}
</script>
