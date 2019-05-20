<template lang="pug">
    
    .vcomp 
        .siblings(v-for="(node,idx) in nodePair.parent.children" 
            @click="node.path?RmenuListener.goto(node.path):$emit('view-hier',node)"). 
        
            {{ node.name }}

</template>
<script>
export default {
    name:"rmenuRow",
    props:{
        nodePair:Object,
        RmenuListener:Object,
    },
}
</script>
<style lang="scss" scoped>
    .vcomp{
        display: block;
        height: 60px;
        background:#142;
        .siblings{
            cursor: pointer;
            padding:5px;
            margin-left:20px;
            display: inline-block;
            font-size: 30px;
            color:#cfc;
        }

    }
</style>
