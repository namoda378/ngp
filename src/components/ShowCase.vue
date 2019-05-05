<template lang="pug">

  .flex-con  
    .ofv(ref="ofv")
        .resize-btn(draggable 
            @drag="resize")

        .ofh(:id="ofhID")
            slot
                
</template>

<script>

export default {
    props:{
        ofhID:String,
    },
    methods:{
        log(s){
        console.log(s);
        },
        resize(ev){
            console.log(ev);
            if(ev.screenX) this.$refs.ofv.style.width = ev.screenX + "px";
        },
    },  
}
</script>


<style lang="scss">
    .flex-con{
        width:100%;
        display: flex;
        justify-content: center;
        
        > .ofv{
            box-shadow: 5px 5px 5px 5px #aaa;
            width: 800px;
            height: 500px;
            position: relative;
            > .resize-btn{
                &::before{
                    position:absolute;
                    text-align: center;
                    width:100%;
                    line-height: 40px;
                    font-size:25px;
                    content: "< >"
                }
                position: absolute;
                bottom:50%;
                right:-20px;
                width:40px;
                height:40px;
                border-radius: 20px;
                background:#aaa;
            }

            > .ofh{
                width:100%;
                height:100%;
                overflow: hidden;
            }
        }
    }

</style>
