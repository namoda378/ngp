<template lang="pug">
    div
        h1 {{ this.$page.markdown.title }}
        h1 {{ this.$page.markdown.propA }}
</template>

<page-query>
    query Markdown ($path:String!) {
        markdown : markdown(path:$path){
            title
            propA
        }
    }
</page-query>

<script>
export default {
    metaInfo(){
        return {
            title: this.$page.title,
        }
    }
}
</script>
