<template lang="pug">

    div
        
        Layout

            h1 {{ key }}

            Rcomp(v-for="(content,idx) in contents" :key="idx" :data="content")


</template>

<page-query>
    query Yaml ($path:String!) {
        yaml : yaml(path:$path){
            path
            title
            json
        }
    }
</page-query>

<script>
export default {
    data(){
        return{
            data:null,
            key:null,
        }
    },
    metaInfo(){
        const json = this.$page.yaml.json;
        this.data = JSON.parse(json);
        this.key = Object.keys(this.data)[0];
        this.contents = this.data[this.key];

        return {
            title: this.key,
        }
    }
}
</script>
