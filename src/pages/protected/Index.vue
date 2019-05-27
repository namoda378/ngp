<template lang="pug">
    .vcomp
        div.container.p-5
            h2.mb-3.pos-rel 
                i.fas.fa-lock.text-muted
                | &nbsp Protected Pages
            
                a.btn.btn-outline-secondary.pos-abs.pos-abs-r-0(v-if="pageState==='index'" href="/") Back To Namo
                button.btn.btn-outline-secondary.pos-abs.pos-abs-r-0(v-else @click="gotoPage('index')") Back To Main

            .list-group(v-if="pageState==='index'")
                button.list-group-item.btn.btn-light(v-for="org in fors" type="button"  @click="showModal(org)")
                    small For.
                    | {{org.name}}
                button.list-group-item.btn.bg-secondary.text-light(@click="pageState='upload'")
                    | Upload Protected Doc
            #upload-form.w-100.mt-5(v-else-if="pageState==='upload'")
                .form-group
                    label(for="org-name") Organization Name:
                    input#org-name.form-control(type="text")
                    
                .form-group
                    label(for="org-pw") Organization Passcode:
                    input#org-pw.form-control(type="text")
                    
                .form-group
                    label(for="file-to-upload") File to Upload:
                    #file-to-upload.input-group.mb-3
                        .form-control.disablable
                            | {{ fileToUpload?fileToUpload.name:"" }}
                        .input-group-append
                            button.btn.btn-primary.text-light(@click="openFileSelector")
                                i.fas.fa-upload
                   
                .form-group
                    label(for="namo-pw") Namo Password:
                    input#namo-pw.form-control(type="text")

                .d-flex.justify-content-end.mt-5
                    button.btn.btn-primary.btn-lg.mr-3(@click="submitFile()")
                        .spinner-border.text-light(v-if="fileSubmissionState=='in-progress'")
                        span(v-else-if="fileSubmissionState=='succeed'") success
                        span(v-else-if="fileSubmissionState=='failure'") failed
                        span(v-else) Submit
                    button.btn.btn-outline-secondary.btn-lg(@click="gotoPage('index')") Cancel
            
        #myModal.modal.fade
            .modal-dialog
                .modal-content
                    .modal-header
                        h4.modal-title 
                            | Are you 
                            span.text-primary {{ focusedOrg.name }}
                        button.close(type='button' data-dismiss='modal') &times;
                    .modal-body
                        
                        .form-group.d-flex.justify-content-center(v-if="passcodeSubmissionState==='verifying'")
                            .embed-responsive.embed-responsive-1by1.w-25
                                .embed-responsive-item
                                    .spinner-border.text-muted.w-100.h-100
                        
                        .form-group(v-else-if="passcodeSubmissionState=='verification-success'")
                            .text-center.text-muted 
                                h1.display-2
                                    i.fas.fa-check-circle
                                h5
                                    | Verified
                        
                        .form-group(v-else-if="passcodeSubmissionState=='verification-failure'")
                            .text-center.text-muted 
                                h1.display-2
                                    i.fas.fa-dizzy
                                h5
                                    | Sorry, verification failed.

                        .form-group(v-else)
                            label(for="email") 
                                | Then you must have received a &nbsp
                                span.text-primary Passcode
                                | :
                            input.form-control(type="password" v-model="passcode")
                         
                    .modal-footer
                        button.btn.btn-primary(v-if="passcodeSubmissionState==null" type='button' @click="submitPasscode()") Submit
                        button.btn.btn-info(v-if="passcodeSubmissionState=='verification-failure'" type='button' @click="passcodeSubmissionState=null") Retry
                        button.btn.btn-danger(type='button' data-dismiss='modal') Close


</template>

<script>
import $ from "jquery";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { setTimeout } from 'timers';

import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
// Initialization Code
import * as myfb from "./fb";
import { Promise } from 'q';


export default {
    data(){
        const fors = [
            {name:"Sample(passcode:1234)"},
            {name:"Golfzon"},
            {name:"Grep"},
        ];
        const focusedOrg = fors[0];

        return{fors,focusedOrg,
            pageState:"index",
            passcode:"",
            passcodeSubmissionState:null,
            fileToUpload:null,
            fileSubmissionState:null,
        };   
    },
    mounted(){
        myfb.init(firebase);

        firebase.functions().useFunctionsEmulator('http://localhost:5000') 

        $('#myModal').on('hidden.bs.modal', ()=>{
            this.passcodeSubmissionState = null;
            this.passcode="";
        });
    },
    methods:{
        showModal(org){
            this.focusedOrg = org;
            $("#myModal").modal();
        },
        submitPasscode(){
            this.passcodeSubmissionState = "verifying";
            
            const unlockProtected =  firebase.functions().httpsCallable('unlockProtected');
            unlockProtected({passcode:this.passcode}).then((result)=>{
                if(this.passcodeSubmissionState !== "verification-failure"){
                    this.passcodeSubmissionState="verification-success";
                    $("#myModal").modal('hide');
                    console.log(result.data);
                }
            }).catch((err)=>{
                console.log(err);
                this.passcodeSubmissionState="verification-failure";
            });

            // setTimeout(()=>{this.passcodeSubmissionState="verification-success";$("#myModal").modal('hide');},2000);
        },
        submitFile(){
            this.disableForm();
            this.fileSubmissionState = "in-progress";
            
            const uploadProtectedVerification =  firebase.functions().httpsCallable('uploadProtectedVerification');
            uploadProtectedVerification({
                namopw:$("#namo-pw").val(),
                orgname:$("#org-name").val(),
                orgpw:$("#org-pw").val(),
                })
                .then(({data})=>{
                    if(data.token){
                        console.log(data);
                        return firebase.auth().signInWithCustomToken(data.token).then((result)=>{return{result,orgname : data.orgname}});
                    }else{
                        return Promise.reject("no token in data");
                    }
                })
                .then((result)=>{
                    console.log("signin Success" + JSON.stringify(result));
                
                    const storage = firebase.storage();
                    let ref = storage.ref();
                    ref = ref.child('protected')
                    ref = ref.child(result.orgname)
                    
                    return ref.put(this.fileToUpload);
                }).then((result)=>{
                    console.log(result);
                    if(this.fileSubmissionState) this.fileSubmissionState = "success";
                    this.enableForm();
                })                
                .catch((err)=>{
                    console.log(err);
                    if(this.fileSubmissionState) this.fileSubmissionState = "failure";
                    this.enableForm();
                });

            // setTimeout(()=>{this.passcodeSubmissionState="verification-success";$("#myModal").modal('hide');},2000);
        },
        openFileSelector(){
            var input = document.createElement('input');
            input.type = 'file';



            input.onchange = e => { 
                var file = e.target.files[0]; 
                this.fileToUpload = file;
            }

            input.click();
        },
        gotoPage(name){
            if(name==="index"){
                this.passcode = "";
                this.passcodeSubmissionState=null;
                this.fileToUpload=null;
                this.fileSubmissionState=null;
            }
            this.pageState = name;
        },
        disableForm(){
            $("#upload-form input,#upload-form button").prop('disabled',true);
            $("#upload-form .disablable").addClass('disabled');
        },
        enableForm(){
            $("#upload-form input,#upload-form button").prop('disabled',false);
            $("#upload-form .disablable").removeClass('disabled');
        },
    }
    
}
</script>
<style lang="scss" scoped>
    .pos-abs{
        position: absolute;
        &-tr-0{position: absolute;top:0;right:0;}
        &-r-0{position: absolute;top:0;right:0;}
    }
    .pos-rel{
        position: relative;
    }

    .disablable.disabled{
        background:#e9ecef;
    }
</style>
