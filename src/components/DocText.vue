<template lang="pug">
    
    .doctext
        slot
                
</template>

<script>

export default {
}
</script>


<style lang="scss">
    .doctext{
        display: flex;
        margin-bottom: 30px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 20px 20px;
        h1{
            margin: 0;
            padding: 14px;
            font-size: 70px;
        }
        h2{
            margin: 0;
            padding: 10px;
            font-size: 50px;
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

        .bm{
            display: block;
            height:50px;
        }

        .bs{
            display: block;
            height:20px;
        }
    }
</style>
