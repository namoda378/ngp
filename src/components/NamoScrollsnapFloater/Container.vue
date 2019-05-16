<template lang="pug">
    
    .t1 

        .scroller(@scroll.passive="onscroll")
            - let a = 0;
            while ( a++ < 5 )
                .block(data-bid=a)= `page ${a}` 

        .carousel-container
            Carousel.carousel(:focused_bid="focused?parseInt(focused.dataset.bid):-1")

</template>

<script>
import Carousel from "./Carousel_sample"

export default {
    data(){
        return{
            focused:null,
        }
    },
    components:{
        Carousel,
    },
    methods:{
        onscroll(evt){
            const { target } = evt;
            const children_nl = target.querySelectorAll(".block");
            const children = Array.from(children_nl).reverse();
            // console.log(children.map((c)=>c.getBoundingClientRect().top));
            // console.log(children.map((c)=>c.offsetParent));
            // console.log(children.map((c)=>c.offsetTop));
            // console.log(target.scrollTop);
            const new_focused = children.find((child)=>child.offsetTop <= target.scrollTop);
            if(this.focused !== new_focused){
                this.focused = new_focused;
            }
        }
    }
}

</script>

<style lang="scss" scoped>

    .t1{
        position: relative;
        width: 100%;
        height: 100%;
        margin:0;
        padding:0;

        .scroller{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top:0;
                
            overflow: auto;
            
            .block{
                color:#ccd;
                padding:20px;
                font-size:20px;
                display: block;
                height:500px;
            }
        }
        

        .carousel-container{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top:0;
            
            display: flex;
            justify-content: center;
            align-items: center;

            pointer-events: none;

            .carousel{
                position: relative;
                width:calc(100% - 60px);
                height:calc(100% - 20px);
            }
        }
    }

</style>
