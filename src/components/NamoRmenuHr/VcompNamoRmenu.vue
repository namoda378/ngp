<template lang="pug">
    
    .vert(ref="elm" tabindex="-1" @blur="reset")
        RmenuRow(v-for='(node,idx) in nodeList' :key="idx" v-bind="{node,idx,last_idx:nodeList.length-1,nodeList}" @node-click="onNodeClick")

</template>
<script>
import RmenuRow from "./RmenuRow";

export default {
    name:"NamoRmenuHr",
    data(){
        return {
            nodeList:this.pathToNodeList(this.$route.fullPath),
            nodeClicked:null,
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
        reset(){
            this.nodeClicked = null;
            this.nodeList = this.pathToNodeList(this.$route.fullPath);
        },
        onNodeClick(node){
            if(node.path && (node === this.nodeClicked || node.children.length === 0 )){
                // goto 

                this.RmenuListener.goto(node.path);
            
            }else{
                // peak
                this.$refs.elm.focus();
                this.nodeClicked = node;
                if(node.children.length){
                    this.nodeList = this.pathToNodeList(node.accpath);
                }
            }
        },
        pathToNodeList(path){
            const namesInPath = path.split("/").filter((name)=>name.length>0);
            
            let curNode = this.nametreeroot;
            const result = namesInPath.map((elm,idx)=>{
                curNode = curNode.children.find((child)=>child.name===elm);
                return curNode;
            })
            
            result.splice(0,0,this.nametreeroot);
            return result;
        }
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
