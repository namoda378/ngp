  <template lang="pug">
    
    Layout
      
        faw(icon="home")
        g-image(alt="Example image" src="~/favicon.png" width="135")

        .btn(@click="getDim").
          Click
    
        h1 {{ dim.clientHeight }}
        h1 {{ dim.clientWidth }}
        h1 {{ dim.iw }}
        h1 {{ dim.sw }}

</template>

<style lang="scss" scoped>

.home-links a {
  margin-right: 1rem;
}

.btn{
  width:200px;
  height:200px;
  background:#aaa;
  text-align: center;
  line-height: 200px;
  font-size: 60px;
}

</style>

<script>
export default {
  metaInfo(){
    console.log(this);
    return{
      title: 'Hello, world!'
    }
  },
  data(){
    return{
      dim:{},
    };
  },
  methods:{
    getDim(){

      const clientHeight =  document.getElementsByTagName('body')[0].clientHeight;
      const clientWidth =  document.getElementsByTagName('body')[0].clientWidth;
      
      this.dim={clientHeight,clientWidth,
      iw : window.innerWidth,
      sw : screen.width,
      
      };
    },
  }
  
}
</script>
