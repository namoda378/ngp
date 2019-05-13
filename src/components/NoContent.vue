<template lang="pug">

    div 
        g-image(alt="Example image" src="~/favicon.png" width="135")
        
        p.
            Sorry, This page doesn't have any content yet !. 
        
        p.home-links
            a(href="/" rel="noopener") Home
            a(href="/about" rel="noopener") About
            
</template>
<style lang="scss" scoped>

.home-links a {
    display: inline-block;
    margin-right: 1rem;
}
</style>
