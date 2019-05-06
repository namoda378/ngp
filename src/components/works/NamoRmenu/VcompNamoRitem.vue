<template lang="pug">
    
     .itcon
        .tcon(ref="tcon"
            @mouseover="setES((es)=>es.hover.hi=true);" 
            @mouseleave="setES((es)=>es.hover.hi=false);"
            :style="`padding:${styleData.tconPad}px;`")
            
            .hi(@click="RmenuState.goto(nametree.path)"
                :style="`color:${styleData.hiColor}; height:${styleData.hiLH}px;  line-height:${styleData.hiLH}px; font-size:${styleData.hiFS}px;`").
            
                {{ nametree.name }}

        .rcon(ref="rcon" v-if="nametree.children" :style="`max-height:${styleData.rconHeight}px;`")
            
            .sidebar(ref="sidebar" 
                @mouseover="setES((es)=>es.hover.sidebar=true);"
                @mouseleave="setES((es)=>es.hover.sidebar=false);"
                :style="` width:${styleData.sidebarWidth}px; background:${styleData.sidebarBG}; border-radius: 0 ${styleData.sidebarBorderRadius}px ${styleData.sidebarBRradius}px 0;`")

            .height-keeper(:style="`${styleData.rconAdditionalStyle}`")
                NamoRitem(v-for="(elm,idx) in nametree.children" :nametree="elm" :key="idx" :RmenuState="RmenuState")


</template>
<script>
import Vue from 'vue';
import NamoRitem from './VcompNamoRitem';

export default {
    name:"NamoRitem",
    props:{
        nametree:{type: Object, required: true},
        RmenuState:{type: Object, required: true},
    },
    components:{
        NamoRitem,
    },
    created(){
        this.onEvChange();
    },
    mounted(){
        setImmediate(()=>{
            this.$refs.sidebar.style.transition="all 0.5s";
            this.$refs.rcon.style.transition="all 0.5s";
        });
    },
    data(){
        
        let sidebarBG = `hsla(100,80%,${20+this.nametree.depth*15}%,1)`

        const {fullPath} = this.$route;
        const {accpath} = this.nametree;
        // console.log(this.nametree.accpath);
        let route_active = fullPath.search(accpath) >= 0 ? true : false;
        let route_exact = accpath == fullPath ? true : false;
    
        
        return{
            evCount:0,
            evState:{
                route:{
                    active:route_active,
                    exact:route_exact,
                },
                hover:{
                    sidebar:false,
                    hi:false,
                },
                activeChildren:{},
            },
            styleData:{
                sidebarWidth:0,
                sidebarBorderRadius:8,
                sidebarBRradius:0,
                sidebarBG,
                rconHeight : 0,
                tconPad:0,
                hiColor:"#bfb",
                hiLH:0,
                hiFS:0,
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
        onEvChange(){
            const {evState} = this;
            const selfActive = this.evState.hover.hi || this.evState.hover.sidebar;
            const childActive = Object.keys(this.evState.activeChildren).length > 0;
            const conclusiveActive = selfActive || childActive || evState.route.active ;
            
            const { children } = this.nametree;
            const lastChild = children[children.length-1];

            // let tconHeight = this.$refs.tcon.offsetHeight;
            
            const {styleData} = this;
            styleData.sidebarWidth = conclusiveActive ? 30 : 0;
            styleData.sidebarBRradius = lastChild && lastChild.children.length && lastChild.dm.conclusiveActive ? 0 : styleData.sidebarBorderRadius;    
            styleData.rconHeight =  conclusiveActive ? children.reduce((prev,elm)=>prev += elm.dm.height,0) : 0;
            styleData.hiColor = selfActive || evState.route.exact ? "#ff9" : "#bfb";
            styleData.hiLH = 40 - this.nametree.depth*2;
            styleData.hiFS = 30 - this.nametree.depth*2;
            styleData.tconPad = styleData.hiLH/5;
            styleData.rconAdditionalStyle = 
                evState.route.exact
                || this.evState.hover.hi 
                // || evState.route.active &&             
                ? 'background:hsla(100,75%,55%,0.1);border-radius:10px;':"";
            
            let tconHeight = styleData.tconPad * 2 + styleData.hiLH;
            let rconHeight = styleData.rconHeight

            this.nametree.dm.height = tconHeight + rconHeight;
            this.nametree.dm.conclusiveActive = conclusiveActive;

            // console.log(this.nametree.accpath);
            // console.log(this.nametree.dm.height);

            this.$parent.reportActive && this.$parent.reportActive(conclusiveActive,this.nametree.id);
            
            // console.log(` (${this.nametree.path}).evCount : conslusive::${conclusiveActive} , ac::${JSON.stringify(this.evState.activeChildren)} `)
            
            // if(this.nametree.depth<2){
            //     console.log(this.styleData.rconHeight);
            //     console.log(JSON.stringify(this.evState));
            // }
        },
    },
    watch:{
        evCount(){
            this.onEvChange();
        }
    },
}
</script>
</script>

<style lang="scss" scoped>

    .tcon{
        margin:0;
        padding:10px;
        .hi{
            cursor: pointer;
            text-decoration: none;
            color:#fff;
            font-size:30px;
            line-height: 35px;
        }
    }

    .rcon{
        display: flex;
        flex-direction: row;
        overflow-y: hidden;
        .sidebar{
            align-self: stretch;
        }
    }

    .height-keeper{
        height: auto;
    }


    
</style>
