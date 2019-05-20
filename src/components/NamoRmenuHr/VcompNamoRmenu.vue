<template lang="pug">
    
    .vert
        RmenuRow(v-show="inViewMode" v-for='(nodePair,idx) in viewmodeNodePairs' :key="100+idx" :nodePair="nodePair" :RmenuListener="RmenuListener" @view-hier="onViewHier")
        RmenuRow(v-show="!inViewMode" v-for='(nodePair,idx) in directNodePairs' :key="idx" :nodePair="nodePair" :RmenuListener="RmenuListener" @view-hier="onViewHier")

</template>
<script>
import RmenuRow from "./RmenuRow";

export default {
    name:"NamoRmenuHr",
    data(){
        return {
            directNodePairs:this.pathToNodepairs(this.$route.fullPath),
            viewmodeNodePairs:[],
            inViewMode:false,
        }
    },
    props:{
        nametreeroot:{
            type:Object,
            default:()=>{return {};},
        },
        RmenuListener:{
            type:Object,
        },
    },
    components:{
      RmenuRow
    },
    methods:{
        onViewHier(node){
            this.inViewMode = true;
            console.log(node.children[0].accpath);
            this.viewmodeNodePairs = this.pathToNodepairs(node.children[0].accpath);
            console.log(this.viewmodeNodePairs);
        },
        pathToNodepairs(path){              
            const namesInPath = path.split("/").filter((name)=>name.length>0);
            
            let curNode = this.nametreeroot;
            return namesInPath.map((elm,idx)=>{
                const parent = curNode;
                const I = curNode.children.find((child)=>child.name===elm);
                curNode = I;
                return {parent,I};
            });
        },
    }
}       


</script>

<style lang="scss" scoped>

    .vert{
        height:100%;
        width:100%;
        pointer-events: auto;
        font-family: "Roboto Mono";
        background:rgb(9, 31, 3);
        overflow: hidden;
    }
    
</style>
