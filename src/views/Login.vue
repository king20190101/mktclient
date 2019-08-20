<template>
<div>
<!--    <login-header></login-header>-->
    <div class="LoginHeader">
        <!-- <router-link
                to="./index"
        > -->
            <i class="fa fa-remove" @click="goBack()"></i>
        <!-- </router-link> -->
        <router-link
                to="./register"
        >
            <span>注册</span>
        </router-link>
    </div>
    <login-tittle></login-tittle>
    <login-main></login-main>
</div>
</template>

<script>
// import header from "../components/login/header.vue"
import tittle from "../components/login/tittle.vue"
import main from "../components/login/main.vue"
export default {
    components:{
       // loginHeader:header,
       loginTittle:tittle,
       loginMain:main
    },
        methods:{
            goBack(){
                
            }
    }

}
</script>

<style scoped>
        @import "../assets/css/login.css";
</style>


