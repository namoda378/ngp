<template lang="pug">
    
    .vert
        NamoRitem(v-for="(v,k) in nametreeroot.children" :nametree="v" :RmenuListener="RmenuListener" :key="k")

</template>
<script>
import NamoRitem from "./VcompNamoRitem";


function newRmenuListener(){
    return {goto(){}};
}

export default {
    props:{
        nametreeroot:{
            type:Object
        },
        RmenuListener:{
            type:Object,
            default:newRmenuListener,
        },
    },
    components:{
        NamoRitem
    }
}       


</script>

<style lang="scss" scoped>

    .vert{
        height:100%;
        width:100%;
        pointer-events: auto;
        font-family: "Roboto Mono";
        background:hsla(100,87%,15%,1);
        overflow-y: auto;
        overflow-x: hidden;
    }
    
</style>
