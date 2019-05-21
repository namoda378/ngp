<template lang="pug">
    
    .t1(ref="domelm") 
        .scroller(ref="scroller" @scroll.passive="onscroll")

        .carousel-container
            Carousel.carousel(:focused_bid="focused?parseInt(focused.dataset.bid):-1")
                slot

</template>

<script>
import Carousel from "./Carousel"

export default {
    data(){
        return{
            focused:
            
            
            null,
        }
    },
    mounted(){
        const domelm = this.$refs.domelm;
        

        const scroller = domelm.querySelector(".scroller");
        const carousel = domelm.querySelector(".carousel-container>.carousel");

        const num_frame = carousel.children.length;

        for(let i = 0 ; i < num_frame ; i++){
            const div = document.createElement("div");
            div.classList.add("block");
            div.dataset.bid = i+1;
            div.innerHTML = `<h1>${div.dataset.bid}</h1>`;
            scroller.appendChild(div);
        }

        this.onscroll();
    },
    components:{
        Carousel,
    },
    methods:{
        
        onscroll(){
            const target = this.$refs.scroller;
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

<style lang="scss">

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
                color:#ded;
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
