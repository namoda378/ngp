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
                NamoRmenu(:nametreeroot="{name:'ewga',children:[{name:'ewga',children:[]}]}" :RmenuListener="{goto:()=>{}}")


</template>

<script>
// import NamoRmenu from "~/components/NamoRmenu/VcompNamoRmenu"
import NamoRmenu from "~/components/NamoAAA/AAA"



export default {
  metaInfo: {
    title: 'Namo'
  },
  components:{
    NamoRmenu
  },
  methods:{
      a(){
          return {name:"ewga",children:[{name:"ewga",children:[]}]};
      },
      pathsToNameTree(paths){
        const root = {name:"/",children:[],dm:{height:0}};
        let id_tic = 1;

        for(let path of paths){  
            let curnode = root;
            let tokens = path.split("/");
            
            tokens = tokens.filter((elm)=>elm.length>0);
            
            // tokens = tokens.filter((elm)=>elm.);

            let accpath = "";

            for(let idx in tokens){
            const depth = parseInt(idx)+1;
            const tok = tokens[idx];
            accpath += `/${tok}`;
            let node = curnode.children.find( node => node.name === tok );
            if(!node){
                node = {name:tok,children:[],depth,dm:{height:0},id:id_tic++,accpath};
                curnode.children.push(node);
            }
            curnode = node;        
            }
            curnode.path = path;
        }

        root.children[0].name.split("");

        return {name:"ewga",children:[{name:"ewga",children:[]}]};
    },
    generatePaths(){
        const tokens = ["apple","peach","tomato"];
        const paths = [];
        function r(depth,accpath){
        paths.push(accpath);
        if(depth < 5){
            for(let tok of tokens){
            r(depth+1,accpath+"/"+tok);
            }
        }
        }
        r(0,"");
        return paths;
    },
  }
}
</script>

<style lang="scss" scoped>
    //@import "~/components/NamoRmenu/sc1.scss";
</style>
