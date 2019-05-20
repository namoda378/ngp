<template lang="pug">
    
    .vcomp(:style="{background:idxToBackground(idx)}")
        .siblings(v-for="(node1,idx1) in node.children" 
            @click="$emit('node-click',node1)"
            :class="{active:isActiveNode(node1)}"
            :style="{background:isActiveNode(node1)?idxToBackground(idx+1):'none',color:`hsla(100,50%,${80+idx*3}%,1)`}"
            ). 
        
            {{ node1.name }}


</template>
<script>

export default {
    name:"rmenuRow",
    props:{
        node:Object,
        idx:Number,
        last_idx:Number,
        nodeList:Array,
    },
    methods:{
        isActiveNode(node){
            // console.log("idx : "+this.idx);
            // console.log("last_idx : "+this.last_idx);
            // console.log("node1 name : "+node.name);
            // if(this.idx < this.last_idx) console.log("node next name : "+this.nodeList[this.idx+1].name);
            return this.idx < this.last_idx && node === this.nodeList[this.idx+1];
        },
        nodeHasChild(node){
            return node.children.length > 0;
        },
        idxToBackground(idx){
            return `hsla(100,80%,${16+idx*7}%,1)`;
        },
    }
}

</script>
<style lang="scss" scoped>
    .vcomp{
        display: block;
        .siblings{
            cursor: pointer;
            padding:5px 10px 10px 10px;
            margin:5px 0 0 20px;
            display: inline-block;
            font-size: 30px;
            line-height: 33px;
            &.active{
                border-radius: 20px 20px 0 0;
            }
        }
    }
</style>
