<template lang="pug">
    
    .comproot(ref="comproot")
        slot
        

</template>
<script>
export default {
    props:{
        focused_bid:Number,
    },
    mounted(){
        const scenes = Array.from(this.$refs.comproot.children).forEach((elm,idx)=>{
            
            elm.classList.add("frame")
            
            if( idx+1 < this.focused_bid ) {
                elm.classList.add("above");
            }else if( idx+1 > this.focused_bid ) {
                elm.classList.add("below");
            }
            
            })
    },
    watch:{
        focused_bid(to){
            console.log(to);
            const scenes = Array.from(this.$refs.comproot.querySelectorAll(".frame"));
            for(let k in scenes){
                const scene = scenes[k];
                const bid = parseInt(k)+1;
                if(bid>to){
                    scene.classList.remove("above");
                    scene.classList.add("below");
                }else if(bid<to){
                    scene.classList.remove("below");
                    scene.classList.add("above");
                }else{
                    scene.classList.remove("below");
                    scene.classList.remove("above");
                }
            }
        }
    },
    
}
</script>
<style lang="scss" scoped>
    .comproot{
        overflow: hidden;

        .frame {
            position: absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
            transform:translate(0,0);
            transition: transform 1s;
            z-index: 100;

            display: flex;
            justify-content: center;
            align-items: center;

            &.above{
                transform:translate(0,-100%);
                z-index: 99;
            }

            &.below{
                transform:translate(0,100%);
                z-index: 99;
            }

            
        }

    }

    .flex-v{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .under-line{
        height:10px;
        width: 100%;
        transition: all 1s 0.6s;
        background:red;

        .above &, .below &{
            transition: all 0.5s;
            width: 0%;
        }
    }
</style>
