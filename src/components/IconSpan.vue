<template lang="pug">
    span
        g-image(:src="`/icons/${iconname}`")

</template>
<script>
export default {
    props:{
        iconname:String,
    }
}
</script>
<style lang="scss" scoped>
    span{
        display: inline-block;
        .g-image{
            width:100%;
        }
    }
</style>

