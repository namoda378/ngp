<template lang="pug">
    
    .vcomp
        nav#nav.navbar.navbar-expand-sm.sticky-top.shadow-lg
            .container
                ul.navbar-nav.align-items-center
                    .nav-item.mr-3.ml-1
                        h1.font-weight-light Bongo
                    .nav-item
                        a.h4.font-weight-light.text-dark.nav-link.ml-4.my-0.hover-bgray.rounded-2(href='#') About
                        .d-none h4 gave bottom padding so need my-0
                    .nav-item
                        a.h4.font-weight-light.text-dark.nav-link.ml-4.my-0.hover-bgray.rounded-2(href='#') Upload
                    .nav-item
                        a.h4.font-weight-light.text-dark.nav-link.ml-4.my-0.hover-bgray.rounded-2(href='#') Library

        .container

            h1.display-3.text-light.my-5 Join Us

            form
                .input-group.mb-3
                    .input-group-prepend
                        span.input-group-text.bg-secondary.text-light.font-weight-light.mwr-7 Username
                    input.form-control.bg-light-08(type='text' )
                .input-group.mb-3
                    .input-group-prepend
                        span.input-group-text.bg-secondary.text-light.font-weight-light.mwr-7 Password
                    input.form-control.bg-light-08(type='text' )
                

            hr.my-5
            
            .row
                .col-md-4.col-lg-6.rounded.bg-light-09.p-3.px-4
                    p.text-dark.m-0
                        | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                

            hr.my-5


            .row.bg-light-08.p-3.my-3
                p.text-secondary.lead.m-0
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    .d-none p gives bottom margin as default
                
                p.text-secondary.lead.m-0
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            
            hr.my-5

        footer.bg-light-09
            .container
                .row
                    .col-sm-6.p-3
                        p.text-secondary.m-0
                            | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                



</template>
<script>
    import "bootstrap/dist/css/bootstrap.css";
    import "@fortawesome/fontawesome-free/css/all.css";

    export default {
        
    }
</script>
<style lang="scss" scoped>

    .vcomp{
        width: 100%;
        min-height: 100vh;
        background: center top/cover no-repeat url("./img/street.jpg"); 
        #nav{
            background: hsla(100,0%,100%,0.8);

        }
        .hover-bgray:hover{
            background: hsla(208, 52%, 71%, 0.3);
        }
        .rounded-2{
            border-radius: 2rem;
        }

        .bg-secondary-05{
            background:hsla(208, 7%, 46%,0.5)
        }

        .bg-light-08{
            background:hsla(210, 17%, 98%,0.8);
        }

        .bg-light-09{
            background:hsla(210, 17%, 98%,0.9);
        }

        .d-none{
            display: none;
        }

        .mwr-20{
            min-width: 20rem;
        }
        .mwr-10{
            min-width: 10rem;
        }
        .mwr-7{
            min-width: 7rem;
        }

        .h-100vh{
            height: 100vh;
        }
    }

</style>
