<template lang="pug">
    Layout

        Ctext

            h1 Vertical Menu Styles

            h3 using pure CSS

        
        ShowCase(ofhID="sc1" :resizeW="true")

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

        Ctext(style="margin-top:50px;")
            h3 Namo Style menu with Vue.js

        ShowCase(ofhID="sc2" :resizeW="true")
            div(style="position:absolute;left:0;height:100%;width:200px;")
                NamoRmenuVr(:nametreeroot="makeNameTreeRoot()")


</template>

<script>
import pathsToNameTree from "~/util/pathsToNameTree"
import generatePaths from "~/util/generatePaths"


export default {
  metaInfo: {
    title: 'Namo'
  },
  methods:{
      makeNameTreeRoot(){
          const nametreeroot = pathsToNameTree(generatePaths());
          return nametreeroot;
      }
  }
}
</script>

<style lang="scss" scoped>
    @import "~/components/NamoRmenuVr/sc1.scss";
</style>
