<template lang="pug">
  Layout
        
    .head
      h1 Graphnote
      h3 Vue.js 로 만든 노트 테이킹 웹앱

    
    .shr.wp100   

    
    .dui
      g-image(src="./img/adding-notes.gif")
      .descr
        p 노트 생성하기  
      
    .shr
    .dui
      g-image(src="./img/creating-tags.gif")
      .descr
        p 태그 생성하기 

    .shr    
    .dui
      g-image(src="./img/playing-with-tags.gif")
      .descr
        p 태그 조작하기   
    
    .shr
    .dui
      g-image(src="./img/responsive-layout.gif")
      .descr
        p css-grid를 활용한 responsive layout

</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss" scoped>

@import "~/styles/proj-doc.scss";
</style>
