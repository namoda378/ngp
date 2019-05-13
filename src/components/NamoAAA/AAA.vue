<template lang="pug">
    
    .div
        p(v-for="(v,k) in nametreeroot.children" :key="k") {{ v.name }}

</template>
<script>

export default {
    name:"sega",
    created(){
        this.RmenuListener.goto();
    },
    props:{
        nametreeroot:{
            type:Object,
        },
        RmenuListener:{
            type:Object,
        },
    },
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
