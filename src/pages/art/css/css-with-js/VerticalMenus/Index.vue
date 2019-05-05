<template lang="pug">
    Layout

        .text
            h1 Vertical Menu Styles

            h3 using pure CSS

        
        ShowCase(ofhID="sc1")

            .flex-col
                .list
                    - let a = 2;
                    while (a--)
                        .item
                            .title
                                h1.hi= "menu"+(2-a)
                            .ofy-hid
                                - let b = 2;
                                while (b--)
                                    .item
                                        .title
                                            h1.hi= "menu"+(2-b)
                                        .ofy-hid
                                            - let c = 2;
                                            while (c--)
                                                .item
                                                    .title
                                                        h1.hi= "menu"+(2-c)
                                        //-             .ofy-hid
                                        //-                 - let d = 2;
                                        //-                 while (d--)
                                        //-                     .item
                                        //-                         .title
                                        //-                             h1.hi= "menu"+(2-d)
                                                    
                
                .grow

        .text
            h3 using pure CSS

</template>

<script>
export default {
  metaInfo: {
    title: 'Namo'
  },
  data(){
    return{
      a:1,
    }
  },
  methods:{
      
  }
}
</script>

<style lang="scss" scoped>
    @import "./sc1";
    
    .text{
        display: flex;
        margin-bottom: 30px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px 0;
        h1{
            font-size: 70px;
        }
        h3{
            font-size: 35px;
        }
    }
    

</style>
