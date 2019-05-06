<template lang="pug">
    
    .vert
        NamoRitem(v-for="(v,k) in nametreeroot.children" :nametree="v" :RmenuState="RmenuState" :key="k")

</template>
<script>
import NamoRitem from "./VcompNamoRitem";


function RmenuState(){

}
RmenuState.prototype.goto = function(path){

}
function newRmenuState(){
    return new RmenuState();
}

export default {
    props:{
        nametreeroot:{
            type:Object
        },
        RmenuState:{
            type:Object,
            default:newRmenuState,
        }
    },
    components:{
        NamoRitem
    }
}       


</script>

<style lang="scss" scoped>

    .vert{
        height:100%;
        width:200px;
        pointer-events: auto;
        font-family: "Roboto Mono";
        background:hsla(100,87%,15%,1);
        overflow-y: auto;
        overflow-x: hidden;
    }
    
</style>
