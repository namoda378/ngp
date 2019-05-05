<template lang="pug">
  Layout
    
    g-image(alt="Example image" src="~/favicon.png" width="135" @click="a++" :style="`width:${a*10}px;`")
    
    h1(@click="$refs.codepen.dataset.height+=10") Hello.

    div
      | <p ref="codepen" class="codepen" data-height="358" data-theme-id="0" data-default-tab="html,result" data-user="namoda378" data-slug-hash="NmQOWV" data-pen-title="MenuStyle1">
      //- |  <span>See the Pen <a href="https://codepen.io/namoda378/pen/NmQOWV/">
      //- |  MenuStyle1</a> by namoda378 (<a href="https://codepen.io/namoda378">@namoda378</a>)
      //- |  on <a href="https://codepen.io">CodePen</a>.</span>
      |</p>
    
    p.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores

</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data(){
    return{
      a:1,
    }
  },
  mounted(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://static.codepen.io/assets/embed/ei.js';

    document.body.appendChild(script);
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.cp_embed_wrapper {
  /* required for resize to work */
  overflow: hidden;

  /* make resizeble! */
  resize: both;

  /* required to see the handle */
  background: #224;
  padding-bottom: 22px;
  

  /* default height */
  height: 900px;
}
.cp_embed_wrapper iframe {
  height: 100% !important;
}
</style>
