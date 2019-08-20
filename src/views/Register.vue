<template>
<div>
    <register-header></register-header>
    <register-tittle></register-tittle>
    <register-phone></register-phone>
</div>
</template>

<script>
import header from "../components/register/header.vue"
import tittle from "../components/register/tittle.vue"
import phone from "../components/register/phone.vue"
export default {
     components:{
      registerHeader:header,
      registerTittle:tittle,
      registerPhone:phone
    }
}
</script>

<style scoped>
        @import "../assets/css/register.css";
</style>


