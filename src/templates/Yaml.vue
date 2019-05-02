<template lang="pug">

    div
        h1 {{ this.$page.markdown.title }}
        h1 {{ this.$page.markdown.propA }}


</template>

<page-query>
    query Yaml($path:String!) {
        yaml : yaml(path:$path){
            path
            data
        }
    }
</page-query>

<script>
export default {
    data(){
        return {
            contentObject : JSON.parse(this.$page.data),
        }
    },
    metaInfo(){
        return {
            title: this.$page.path,
        }
    }
}
</script>
