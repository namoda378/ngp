<template lang="pug">
    
    .ctext
        slot
                
</template>

<script>

export default {
}
</script>


<style lang="scss">
    .ctext{
        position: relative;
        display: flex;
        margin-bottom: 30px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px 0;
        h1{
            font-size: 70px;
        }
        h2{
            font-size: 45px;
        }
        h3{
            font-size: 35px;
        }
        h4{
            max-width: 50%;
            text-align: center;
            font-size: 25px;
        }

        .p4{
            font-size: 25px;
        }

        .bs{ display: block; height:20px; }
        .bm{ display: block; height:50px; }
        .bl{ display: block; height:70px; }
        .bl2{ display: block; height:150px; }
        .bl4{ display: block; height:300px; }

        .c-con{
            display: flex;
            justify-content: center;

            img{
                margin:15px;
            }
            .item{
                margin:15px;
            }
        }


        .pink{
            color:#e9b;
        }
    }
</style>
