export const windowResizeListener = {
    mounted() {
      this.$nextTick(function() {
        window.addEventListener('resize', this.onWindowResize);
      })
    },
  
    methods: {
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onWindowResize);
    }
  };


export const routeSetter = {
    created() {
      console.log(this);      
    },
};