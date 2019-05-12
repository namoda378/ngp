<template lang="pug">
    Layout

        Ctext

            h1 Card Designs

            h3 simple boncy card.
            h4
                |  imitated the work of 
                a(href='https://codepen.io/electerious/') Tobias Reich

        ShowCase(ofhID="sc1" :resizeW="false")
            
            Card1

        Ctext

            .bl2

            h3 text clipped background

        ShowCase(ofhID="sc2" :resizeW="false")
            
            BgClipText

</template>



<script>
import Card1 from "~/components/works/VcompCard1";
import BgClipText from "~/components/works/BgClipText/main";

export default {
    components:{
        Card1,
        BgClipText,
    }    
}
</script>

<style lang="scss">
    
    #sc1 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 500px;
        font-family: 'Open Sans', sans-serif;
        color: #333;
        background: #f8f8f8;
    }

</style>

