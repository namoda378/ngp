<template lang="pug">

    .vcomp
        nav.navbar.navbar-light.navbar-expand-lg.sticky-top.navigation-clean-search(style='margin-bottom: 20px;box-shadow: 0px 2px 3px #999;')
            .container
                a.navbar-brand(href='#') KomoKomo
                button.navbar-toggler(data-toggle='collapse' data-target='#navcol-1')
                    span.sr-only Toggle navigation
                    span.navbar-toggler-icon
                #navcol-1.collapse.navbar-collapse
                    ul.nav.navbar-nav
                        li.nav-item(role='presentation')
                        a.nav-link.active(href='#') Link 1
                        li.nav-item(role='presentation')
                        a.nav-link(href='#') Link 2
                        li.nav-item(role='presentation')
                        a.nav-link(href='#') Link 3
                    form.form-inline.mr-auto(target='_self')
                        .form-group
                        label(for='search-field')
                            i.fa.fa-search
                        input#search-field.form-control.search-field(type='search' name='search')
                    button#btn-signin.btn.btn-primary.boround-2em.boround-rflat(type='submit' style='filter: blur(0px);' @click="showLoginModal=true")
                        i.fa.fa-sign-in
                        | &nbsp; Sign In
                    button.btn.btn-primary.boround-2em.boround-lflat(type='submit' style='filter: blur(0px);background-color: rgb(91,144,200);')
                        i.fa.fa-pencil
                        | &nbsp; Sign Up
        .container.relafonsi.marginal
            #carousel-1.carousel.slide.margin(data-ride='carousel')
                .carousel-inner(role='listbox')
                    .carousel-item
                        img.w-100.d-block(src='./img/jaromir-kavan-177722-unsplash.jpg' alt='Slide Image')
                    .carousel-item.active
                        img.w-100.d-block(src='./img/karolis-puidokas-1446816-unsplash.jpg' alt='Slide Image')
                    .carousel-item
                        img.w-100.d-block(src='./img/todd-diemer-110882-unsplash.jpg' alt='Slide Image')
                div
                    a.carousel-control-prev(href='#carousel-1' role='button' data-slide='prev')
                        span.carousel-control-prev-icon
                        span.sr-only Previous
                    a.carousel-control-next(href='#carousel-1' role='button' data-slide='next')
                        span.carousel-control-next-icon
                        span.sr-only Next
                ol.carousel-indicators
                    li(data-target='#carousel-1' data-slide-to='0')
                    li.active(data-target='#carousel-1' data-slide-to='1')
                    li(data-target='#carousel-1' data-slide-to='2')
            .row
                .col-6.col-lg-3.colih
                div
        .container.relafonsi.marginal
            <div class="card">
                <div class="card-header bg-primary">Header</div>
                <div class="card-body">Content</div>
                <div class="card-footer">Footer</div>
            </div>
        .footer-clean
            footer
                .container
                    .row.justify-content-center
                        .col-sm-4.col-md-3.item
                            h3 Services
                            ul
                                li
                                    a(href='#') Web design
                                li
                                    a(href='#') Development
                                li
                                    a(href='#') Hosting
                        .col-sm-4.col-md-3.item
                            h3 About
                            ul
                                li
                                    a(href='#') Company
                                li
                                    a(href='#') Team
                                li
                                    a(href='#') Legacy
                        .col-sm-4.col-md-3.item
                            h3 Careers
                            ul
                                li
                                    a(href='#') Job openings
                                li
                                    a(href='#') Employee success
                                li
                                    a(href='#') Benefits
                        .col-lg-3.item.social
                            a(href='#')
                                i.icon.ion-social-facebook
                            a(href='#')
                                i.icon.ion-social-twitter
                            a(href='#')
                                i.icon.ion-social-snapchat
                            a(href='#')
                                i.icon.ion-social-instagram
                            p.copyright Company Name &copy; 2017
        #mdl-signin.modal.fade.relafonsi(role='dialog' :class="{show:showLoginModal}" tabindex='-1' style='/*pointer-events: none;*/background: hsla(100,40%,10%,0.1);')
            .modal-dialog(role='document' style='position: relative;width: 50em;')
                .modal-content
                    #firebaseui-auth-container
                    #firebaseui-auth-loader
                    
                            
                
</template>

<script>

import * as fb from "./js/fb";


const randomInt = (i,j)=>{
    return i + Math.ceil(Math.random()*(j-i));
}

const default_minHSLA = {h:0,s:0,l:0,a:1}
const maxHSLA = {h:360,s:100,l:100,a:1}
const randomHSLA = (hsla={}) => {
    for(let k in default_minHSLA){
        if(hsla[k] === undefined || hsla[k] === null || hsla[k] === '?'){
            hsla[k] = randomInt(default_minHSLA[k],maxHSLA[k]+1);
        }else if(typeof hsla[k] === 'string' && hsla[k].indexOf('-')){
            let match = hsla[k].match(/(\d+)-(\d+)/);
            hsla[k] = randomInt(parseInt(match[1]),parseInt(match[1]));
        }
    }

    const {h,s,l,a} = hsla;
    return `hsla(${h},${s}%,${l}%,${a})`;
}


export default {
    data(){
        const shobos = [
            {span:1,hsla:randomHSLA({s:"60-95",l:"70-95"})},
            {span:3,hsla:randomHSLA({s:"60-95",l:"70-95"})},
            {span:2,hsla:randomHSLA({s:"60-95",l:"70-95"})},
            {span:4,hsla:randomHSLA({s:"60-95",l:"70-95"})},
            {span:3,hsla:randomHSLA({s:"60-95",l:"70-95"})},  
            {span:2,hsla:randomHSLA({s:"60-95",l:"70-95"})},  
            {span:2,hsla:randomHSLA({s:"60-95",l:"70-95"})},  
        ];
        return{
            shobos,
            showLoginModal:false,
        }
    },
    mounted(){
        const { firebase , $ } = this.$jfb;
        
        let firebase_style = document.createElement('link');    
        firebase_style.setAttribute('rel',"stylesheet");
        firebase_style.setAttribute('type',"text/css");
        firebase_style.setAttribute('href',"https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css");
        document.head.appendChild(firebase_style);
        fb.init(firebase);
        // fb.init_ui(firebase,firebaseui,"#firebaseui-auth-container","firebaseui-auth-loader");

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                console.log("user is signed in " + JSON.stringify(user));
            } else {
                console.log("No user is signed in.");
            }
        });

    },
}
</script>

<style lang="scss">
    @import "~/styles/bootstrap.scss";
    @import "./styles/Footer-Clean";
    @import "./styles/Navigation-with-Search";
    @import "./styles/Login-Form-Clean";
    @import "./styles/relafonsi";
    @import "./styles/styles";


    body{
        background:#fff;
    }
    .vcomp{
        position: relative;
    }

    .banner{
        position: sticky;
        display: flex;
        justify-content: center;
        align-items: center;
        background:#ffd000;
        font-family: "ZCOOL KuaiLe";
        h1{
            font-size : 35px;
            margin:9px;
        }
    }

    .content{
        width:100%;
        
            .hik {
                margin:22px;
                font-size:22px;
            }

        .romsin{

            .briao{
                display: grid;
                width:100%;
                grid-auto-flow: row dense;
                grid-template-rows: repeat(5,120px);
                grid-template-columns: repeat(8,1fr);
            }
        }

        .ejia {
            margin:45px;
            
            .flroq{
                margin:22px;
                display: flex;
                justify-content: space-between;
                .nemo{
                    display: inline-block;
                    border-radius: 20px;
                    height:230px;
                    width:230px;
                    background:#aaa;
                }
            }

        }
    }

</style>
