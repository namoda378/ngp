<template lang="pug">
    
    div
        div(v-if="key" class="rcon")
            h3 {{ key }}
            
            Rcomp(v-for="(content,idx) in contents" :key="idx" :data="content")

        div(v-else) {{ content }}

</template>

<script>

export default {
    props:{
        data:null,
    },
    data(){
        const { data  } = this;
        const key = (typeof data === 'object')?Object.keys(data)[0]:null;
        const contents = key ? data[key] : null;
        const content = key? null:data;    
        
        return {key,contents,content};
    },

}
</script>

<style>

    .rcon{
        padding-left: 20px;
    }

</style>
