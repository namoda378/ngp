<template lang="pug">
   
    a.card(href="#" ref="card")

        .card__head
        
        .card__body.
            hello I am id oek kla oewl owjm lvoem lale klemn aoej aliai aie aei la ki ajel iagjwkli awje akajwieiljgaile
            
        .card__footer.
            Read More


</template>

<script>
export default {
    mounted(){
        const elem = this.$refs.card;

        elem.onmouseenter = () => {
            elem.classList.add('hover')
        }

        elem.onmouseleave = () => {
            elem.classList.remove('hover')
        }

    }
}
</script>


<style lang="scss" scoped>

@function cb($numbers...){
	@return cubic-bezier($numbers);
}

$cb-param : .19,1.07,.69,1.73;
$trans-dur: 0.5s;

.card{
	text-decoration:none;
	color: currentColor;
	position:relative;
	width:300px;
	height:350px;
	background:#b89;
	overflow:hidden;
	
	&__head{
		transition: all $trans-dur cb($cb-param);
		background: #504;
		height:70%;	
	}
	
	&.hover > &__head{
		height:100%;
	}
	
	&__body{

		transition: all $trans-dur cb(.38,-0.74,.76,.42);
        margin : 0;
        box-sizing: border-box;
		width:100%;
		padding:10px;
		position: absolute;
		bottom:20px;
	}
	
	&.hover > &__body{
		transition: all $trans-dur cb($cb-param);
		bottom:63px;
		color:#fbe
	}
	
	&__footer{
		
		transition: all $trans-dur cb(.38,-0.74,.76,.42);
		margin : 0;
		padding:10px;
		position: absolute;
		font-size:16px;
		bottom:-50px;
		right:10px;
		border-bottom:3px solid #b89;
	}
	
	&.hover > &__footer{
		transition: all $trans-dur cb($cb-param);
		bottom:15px;
		color:#fbe;
		border-bottom-color:red;
	}
	
	
	
}

</style>
