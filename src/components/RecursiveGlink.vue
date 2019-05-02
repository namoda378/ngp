<template lang="pug">
    
    div
        h3 {{ key }}

        Rlink(v-for="route in routes" :key="route.path" :rdata="route")



</template>
