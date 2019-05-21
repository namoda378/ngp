<template lang="pug">
  Layout
    
    Ctext
        
        h1 Carousel Animations
        h3 using pure CSS
    
    ShowCase(ofhID="sc1")
        SumGreetingCarousel

    
    Ctext
        .bl4
        h3 a scroll snapping Carousel

    ShowCase(ofhID="sc2")
        ScrollsnapContainer

    
    Ctext
        .bl4
            

</template>
<script>
import ScrollsnapContainer from "~/components/NamoScrollsnapFloater/Showcase/Container";
import SumGreetingCarousel from "~/components/works/SumGreetingCarousel";

export default {
    components:{
        ScrollsnapContainer,
        SumGreetingCarousel,
    },
    metaInfo: {
        title: 'Namo'
    },
    data(){
        return{
        a:1,
        }
    },
}
</script>
