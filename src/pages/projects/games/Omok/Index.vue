<template lang="pug">
  
   Layout
    
    .head
      h1 Omok 
      h3 HTTP와 Corona SDK를 활용한 간단한 MMO 보드 게임 만들기

    hr 

    .flex-row
      g-image(src="./img/in_game.gif")
    
</template>

<script>

export default {
  data(){
    return{
      pageState:{},
    }
  },
  metaInfo(){
    return{
      title: 'Hello, world!'
    }
  }
}
</script>

<style lang="scss" scoped>


  .head{
    font-family: "Noto Sans KR","Roboto";
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .flex-row{
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }

</style>
