<template lang="pug">
  
  FtypLayout
    SnapScroller
    
      div
        .vfs-con

          h1
            span(style="font-size:0.5em;").
              About.&nbsp 
            span(style="font-family:'ZCOOL KuaiLe';").
              Namo
          

          g-image(alt="Example image" src="~/favicon.png" width="85")

          ul
            li I've been a developer since 2014. 
            li At the start I wanted to make awesome games. 
            li Now I'd like to make super useful webservices as well.


      div 
        h1 Casual Games


        
      
      div 
        .vfs-con
          h2 Web/Browser Applications
          
          .hc-div
            g-image(alt="Example image" src="~/assets/tech-logos/netlify.png" width="115")
            g-image(alt="Example image" src="~/assets/tech-logos/nodejs.png" width="115")
            g-image(alt="Example image" src="~/assets/tech-logos/vue-icon.png" width="85")
            g-image(alt="Example image" src="~/assets/tech-logos/firebase.png" width="85")

          ul
              li I've been a developer since 2014. 
              li At the start I wanted to make awesome games. 
              li Now I'd like to make super useful webservices as well.



      div 
        h1 Developer Tools 

      
      div 
        h1 Overview

      



</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style lang="scss" scoped>

  .vfs-con{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h1{
      font-size: 50px;
    }
    h2{
      font-size:40px;
    }

    ul{
      list-style: none;
      text-align: center;
      li{
        margin:20px;
      }
    }

    .hc-div{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .g-image{
        margin:20px;
      }
    }

  }
  
  
</style>

