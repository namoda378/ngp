<template lang="pug">
  
  Layout
    
    .head
      h1 Teemo 
      h3 TCP 소켓과 Corona SDK를 활용하여 간단한 실시간 멀티플레이어 게임 만들기

    hr 

    .flex-row
      g-image(src="./img/in_game.gif")


</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss" scoped>
  .head{
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
