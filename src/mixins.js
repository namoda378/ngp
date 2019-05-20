export const windowResizeListener = {
    mounted() {
      this.$nextTick(function() {
        window.addEventListener('resize', this.onWindowResize);
        window.addEventListener('onorientationchange', this.onWindowResize);
      })
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onWindowResize);
      window.removeEventListener('onorientationchange', this.onWindowResize);
    }
  };


export const routeSetter = {
    created() {
      console.log(this);      
    },
};