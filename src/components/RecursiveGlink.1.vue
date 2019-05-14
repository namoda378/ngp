<template lang="pug">
    
    .itcon
        .tcon
            g-link.hi(to="path" 
                @mouseover="setES((es)=>es.hover.hi=true);" 
                @mouseleave="setES((es)=>es.hover.hi=false);"). 
                
                {{ nametree.name }}

        .rcon(v-if="nametree.children" :style="`max-height:${styleData.rconHeight}`")
            
            .sidebar( 
                @mouseover="setES((es)=>es.hover.sidebar=true);"
                @mouseleave="setES((es)=>es.hover.sidebar=false);"
                :style="`width:${styleData.sidebarWidth};background:${styleData.sidebarBG}`")

            .height-keeper(ref="heightKeeper")
                Rlink(v-for="(elm,idx) in nametree.children" :nametree="elm" :key="idx")


</template>
<script>
import Vue from 'vue';

export default {
    props:{
        nametree:Object,
    },
    data(){
        
        let sidebarBG = `hsla(100,80%,${this.nametree.depth*15}%,1)`

        return{
            evCount:0,
            evState:{
                hover:{
                    sidebar:false,
                    hi:false,
                },
                activeChildren:{},
            },
            dmState:{
                conclusiveActive:false,
            },
            styleData:{
                sidebarWidth:0,
                sidebarBG,
                rconHeight : 0,
            },
        }
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
        reportDM(){
            const ch = this.dmState.conclusiveActive ? this.$refs.heightKeeper.clientHeight +"px" : 0;
            if(this.styleData.rconHeight !== ch){
                this.styleData.rconHeight = ch;
                if(this.$parent.reportDM){
                    Vue.nextTick(()=>{
                        this.$parent.reportDM();
                    });
                }
            }
        }
    },
    watch:{
        evCount(){
            const selfActive = this.evState.hover.hi || this.evState.hover.sidebar;
            const childActive = Object.keys(this.evState.activeChildren).length > 0;
            
            const conclusiveActive = selfActive || childActive;
            this.dmState.conclusiveActive = conclusiveActive;
            
            this.$parent.reportActive && this.$parent.reportActive(conclusiveActive,this.nametree.id);
            
            this.styleData.sidebarWidth = conclusiveActive ? "30px" : 0;

            const ch = this.dmState.conclusiveActive ? this.$refs.heightKeeper.clientHeight +"px" : 0;
            if(this.styleData.rconHeight !== ch){
                this.styleData.rconHeight = ch;
                if(this.$parent.reportDM){
                    Vue.nextTick(()=>{
                        this.$parent.reportDM();
                    });
                }
            }

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
        padding:0;
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
            width:0px;
            background:#faa;
        }
    }

    .height-keeper{
        height: fit-content;
    }



</style>
