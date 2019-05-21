<template lang="pug">
    
    .comproot(ref="comproot")
        .scene 
            Ctext
                h1 Hello World !!
                h3 greetings from Namo.
        .scene.below 
           
            .flex-v

                h1 I Made a Scroll Snapping Carousel
            
                .under-line

        
        .scene.below
            
            .flex-v
            
                h1 It uses an Overlay Div 
                h3 maybe not the best way to do this. 
        
        .scene.below 
            Ctext
                h1 And It Works !!
                p but it's useful and works like a charm
        
        .scene.below 
            Ctext
                h1 What's Next 
                p what will I make next ?
        

</template>
<script>
export default {
    props:{
        focused_bid:Number,
    },
    watch:{
        focused_bid(to){
            console.log(to);
            const scenes = Array.from(this.$refs.comproot.querySelectorAll(".scene"));
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

        .scene {
            position: absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
            transform:translate(0,0,0);
            transition: transform 1s linear;
            z-index: 100;

            display: flex;
            justify-content: center;
            align-items: center;

            &.above{
                transform:translate(0,-100%,1px);
                z-index: 99;
            }

            &.below{
                transform:translate(0,100%,1px);
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
