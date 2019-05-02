<template lang="pug">

  div  
    
    .floater
      header.header
        g-link.navlink(to="/") Namo
      
      nav.nav
        g-link.navlink(to="/") Home
        g-link.navlink(to="/art" @mouseover="") Art
        g-link.navlink(to="/learn-and-tuts") Learn &amp Tuts
        g-link.navlink(to="/projects") Projects
        g-link.navlink(to="/about") About

    .non-floater
      .content

          slot

</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<style lang="scss">

body {
  font-family: Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  overflow: auto;

  .floater{
    background:none;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    width:100vw;
    height:100vh;

    header{
    height: 70px;
    top:0; left: 0;right: 0;
    background : #458823;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding-left:30px;

      .navlink{
        color:#fff;
        display: block;
        font-size : 40px;
        text-decoration: none;
      }
    }

    .nav{ 
      width:130px;
      flex-grow: 1;
      background:#abcdba;
      overflow: auto;
      .navlink{
        display: block;
        color:#336;
        text-decoration: none;
        padding:15px;
      }
    }
  }  
  
  .non-floater{
    padding: 70px 0 0 130px;
    .content{
      padding : 20px;
    }
  }

}
</style>
