<template lang="pug">
  Layout
    
    Ctext
        
        h1 Carousel Animations
        h3 using pure CSS

    .flex
        .pos-abs
            .box-a
                
            .box-b
                

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
}
</script>

<style lang="scss" scoped>

    .flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pos-abs{
        box-shadow: 5px 5px 15px #aaa;
        position: relative;
        z-index: 101;
        height: 500px;
        width: 700px;
        overflow: hidden;
    
        .box-a{
            position: absolute;
            background:#1fa;
            top: -200px;
            left: -200px;
            width:100px;
            height:100px;
            transition:  all 1s;
          
            
            .flex:hover > & {
                left:100px;
                top:100px;
                transform: rotate(320deg);
            }
        }


        &::before{
        
            position: absolute;    
            right: -100%;
            height: 500px;
            width: 700px;
            content:"";
            background: red;
            z-index: 0;
            transition: all 1s;        

            .flex:hover > & {
                right: 0;
            }
        
        }

        .box-b{
            position: absolute;
            bottom:10%;
            left:10%;
            width:300px;
            height:100px;
            z-index: 101;
            overflow: hidden;

            &::before{
                position: absolute; 
                content:"Greetings";
                color:#466;
                line-height: 100px;
                font-size : 60px;
                overflow: hidden;
                width:0;
                transform: translateZ(0);

                transition: all 0.6s 0.1s;
                .flex:hover > & {
                    color:#fff;
                    transform: translateZ(1);
                    width:100%;
                }
            }

            &::after{
                position: absolute; 
                content: "";
                width: 100%;
                height: 100%;
                z-index: 110;
                background:#4ac;
                left: -100%;
                transition: all 1.2s;

                .flex:hover > & {
                    left:120%;
                }
            }
        }
    
    }



</style>
