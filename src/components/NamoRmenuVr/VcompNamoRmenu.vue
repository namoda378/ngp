<template lang="pug">
    
    .vert
        NamoRitem(v-for="(v,k) in nametreeroot.children" :nametree="v" :RmenuListener="RmenuListener" :key="k")

</template>
<script>
import NamoRitem from "./VcompNamoRitem";

export default {
    name:"NamoRmenu",
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
