<template lang="pug">
    
    .comproot(ref="comproot")
        h1 Hello

</template>
<script>

export default {
    name:"bgcliptext",
}
</script>
<style lang="scss" scoped>
    
    .comproot{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        
        height:100%;
        width:100%;
        background:rgb(70, 55, 39);
 
        h1{
            background: url( "/img/moodish/fruits.png" );
            background-clip: text;
            font-size:250px;
            color:transparent;
            transition: background-position 2s;
        }

        &:hover{
            h1{
                background-position-x: 700px;
            }
        }

    }
</style>
