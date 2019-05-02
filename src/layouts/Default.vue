<template lang="pug">

  div  
    header.header
    
        g-link(to="/") Namo

    .grid

      nav.nav
        g-link.navlink(to="/") Home
        g-link.navlink(to="/about") About

      div
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
  padding:0px 15x;
  text-decoration: none;
}

header{
  height: 100px;
  position: fixed;
  top:0; left: 0;right: 0;
  background : #88cd66;
}
.nav {
  background:#abcdba
}

.nav .navlink{
  display: block;
  background:#aaffaa;
  border-radius: 15px;
  height:30px;
}

.grid{
  display: grid;
  padding-top:100px;
  grid-template-columns: 10% auto;
}

</style>
