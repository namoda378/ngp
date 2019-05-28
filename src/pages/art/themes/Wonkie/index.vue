<template lang="pug">
    .vcomp
        nav#nav.navbar.navbar-expand-sm.sticky-top.shadow-lg.bg-gradient
            .container
                ul.navbar-nav.align-items-center
                    .nav-item.mr-3.ml-1
                        h1.text-light Wonkie
                    .nav-item
                        a.h4.text-light.nav-link.ml-4.my-0.hover-bgray.rounded-2(href='#') About
                        .d-none h4 gave bottom padding so need my-0
                    .nav-item
                        a.h4.text-light.nav-link.ml-4.my-0.hover-bgray.rounded-2(href='#') Upload
                    .nav-item
                        a.h4.text-light.nav-link.ml-4.my-0.hover-bgray.rounded-2(href='#') Library

    
        .container
            #row-1.row
                #col-1.col-lg-3.col-md-4.col-sm-6.p-4
                    .d-none col 클래스들은 기본적으로 좌우 패딩을 갖기 때문에 p-*로 덮어서 상하좌우 균등한 패딩을 주는 것이 좋다.
                    .gradient-box
                        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum, lorem vel tincidunt imperdiet, nibh elit laoreet felis, a bibendum nisl tortor non orci. Donec pretium fermentum felis, quis aliquet est rutrum ut. Integer quis massa ut lacus viverra pharetra in eu lacus. Aliquam tempus odio adipiscing diam pellentesque rhoncus. Curabitur a bibendum est.

                .col-lg-3.col-md-4.col-sm-6.p-4
                    .gradient-box
                        form(action='/action_page.php')
                            .form-group
                                label(for='email') Email address:
                                input#email.form-control(type='email')
                            .form-group
                                label(for='pwd') Password:
                                input#pwd.form-control(type='password')
                            .form-group.form-check
                                label.form-check-label
                                    input.form-check-input(type='checkbox')
                                    |  Remember me
                            button.btn.bg-gradient.text-light(type='submit') Submit

                .col-lg-3.col-md-4.col-sm-6.p-4
                    ul.gradient-box.list-group.p-0
                        li.list-group-item First item
                        li.list-group-item Second item
                        li.list-group-item Third item


</template>
<script>

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default {
    
}
</script>



<style lang="scss">
    .bg-gradient{
        background: linear-gradient(120deg,#7f70f5,#0ea0ff);
    }

    .gradient-box {
        position: relative;
        padding: 1em;

        color: #333;
        background: #fff;
        
        // ! you can't set a z-index for this now;
        box-sizing: border-box;
        background-clip: padding-box; /* !importanté */
        border: solid 5px transparent; /* !importanté */
        border-radius: 1em;

        &:before {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            margin: -5px; /* !importanté */
            border-radius: inherit; /* !importanté */
            background: linear-gradient(to right,#7f70f5,#0ea0ff);
        }

        &.list-group{
            > .list-group-item{
                background:none;
                border-image: linear-gradient(to right,#7f70f5,#0ea0ff) 30 / 3px 0 0 0 ;
            }
            > .list-group-item:first-child{
                border:none;
            }
        }


    }


    .d-none{
        display: none;
    }
  

</style>
