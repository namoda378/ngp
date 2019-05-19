<template lang="pug">
    Layout
        h1 {{ $page.lut.json }}
</template>
<page-query>
    query Lut($path:String!) {
        lut : lut(path:$path){
            path
            json
        }
    }
</page-query>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>
