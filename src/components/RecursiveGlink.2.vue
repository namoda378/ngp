<template lang="pug">
    
    .itcon
        .tcon(ref="tcon"
            @mouseover="setES((es)=>es.hover.hi=true);" 
            @mouseleave="setES((es)=>es.hover.hi=false);")
            
            g-link.hi(:to="nametree.path") {{ nametree.name }}

        .rcon(v-if="nametree.children" :style="`max-height:${styleData.rconHeight}`")
            
            .sidebar( 
                @mouseover="setES((es)=>es.hover.sidebar=true);"
                @mouseleave="setES((es)=>es.hover.sidebar=false);"
                :style="`width:${styleData.sidebarWidth}px; background:${styleData.sidebarBG}; border-radius: 0 20px ${styleData.sidebarBRradius}px 0;`")

            .height-keeper
                Rlink(v-for="(elm,idx) in nametree.children" :nametree="elm" :key="idx")


</template>
<script>
import Vue from 'vue';

export default {
    props:{
        nametree:Object,
    },
    data(){
        
        let sidebarBG = `hsla(100,80%,${20+this.nametree.depth*15}%,1)`

        return{
            evCount:0,
            evState:{
                hover:{
                    sidebar:false,
                    hi:false,
                },
                activeChildren:{},
            },
            styleData:{
                sidebarWidth:0,
                sidebarBRradius:20,
                sidebarBG,
                rconHeight : 0,
            },
        }
    },
    mounted(){
        console.log(this.nametree.path);
        this.nametree.dm.height = this.$refs.tcon.clientHeight;
    },
    methods:{
        setES(f){
            f(this.evState);
            this.evCount++;
        },
        reportActive(active,id){
            if(active){
                this.setES((es)=>es.activeChildren[id] = true);
            }else{
                this.setES((es)=> delete es.activeChildren[id]);
            }
        },
    },
    watch:{
        evCount(){
            const selfActive = this.evState.hover.hi || this.evState.hover.sidebar;
            const childActive = Object.keys(this.evState.activeChildren).length > 0;
            const conclusiveActive = selfActive || childActive;
            
            const { children } = this.nametree;
            const lastChild = children[children.length-1];

            let tconHeight = this.$refs.tcon.clientHeight;
            let rconHeight = conclusiveActive ? children.reduce((prev,elm)=>prev += elm.dm.height,0) : 0;
            
            this.styleData.sidebarWidth = conclusiveActive ? 20 : 0;
            this.styleData.sidebarBRradius = lastChild && lastChild.children.length && lastChild.dm.conclusiveActive ? 0 : 20;    
            this.styleData.rconHeight = rconHeight + "px";
            

            this.nametree.dm.height = tconHeight + rconHeight;
            this.nametree.dm.conclusiveActive = conclusiveActive;
            
            this.$parent.reportActive && this.$parent.reportActive(conclusiveActive,this.nametree.id);
            
            // console.log(` (${this.nametree.path}).evCount : conslusive::${conclusiveActive} , ac::${JSON.stringify(this.evState.activeChildren)} `)
            
            // if(this.nametree.depth<2){
            //     console.log(this.styleData.rconHeight);
            //     console.log(JSON.stringify(this.evState));
            // }
        }
    }
}
</script>
<style lang="scss">

    .tcon{
        margin:0;
        padding:10px;
        .hi{
            text-decoration: none;
            color:#fff;
            font-size:30px;
        }
    }

    .rcon{
        display: flex;
        flex-direction: row;
        max-height:0px;
        overflow-y: hidden;
        transition: all 0.5s;
        .sidebar{
            transition: all 0.5s;
            align-self: stretch;
        }
    }

    .height-keeper{
        height: fit-content;
    }



</style>
