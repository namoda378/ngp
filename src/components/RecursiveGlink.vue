<template lang="pug">
    
    div.con-nav(@mouseover="showSub=true" @mouseleave="showSub=false")
        g-link.glink(:to="path" :style="computeStyle('glink')") {{ name }}
        div.rcon-nav(v-if="map.hasChildren")
            Rlink(v-for="(v,k) in map" :key="k" :map="v" :name="k" :path="v.path" :depth="depth+1")

</template>
<script>
export default {
    props:{
        path:String,
        name:String,
        map:Object,
        depth:Number,
    },
    data(){
        return{
            showSub:false,
        }
    },
    methods:{
        computeStyle(typ){
            const background = 20+this.depth*10;
            const color = (background+40)%100;

                return `background : hsla(100,67%,${background}%,1);` + `color : hsla(100,67%,${color}%,1);`

        }
    }
}
</script>
<style lang="scss">

    
    .rcon-nav{
        transition: all 2s ease-in;
        overflow: hidden;
        max-height: 0px;
        font-size: 0.8em;
        display: block;
    }

    .con-nav{
        &.d1{
            font-size : 45px;
        }

        .glink{
            display: block;
            padding:0.5em 0.5em;
            text-decoration: none;
            border-radius: 0 0 35px 0;
            &.active + .rcon-nav{
                max-height: 1000px;
            }

            &.active--exact{
                color:#363;
            }
        }
        
        &:hover > .rcon-nav{
            max-height: 1000px;
        }

    }
</style>
