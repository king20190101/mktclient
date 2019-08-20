<template>
<div>
    <set-header></set-header>
    <set-main></set-main>
    <set-nav></set-nav>
    <set-exit></set-exit>
</div>
</template>

<script>
import header from "../components/set/header.vue"
import main from "../components/set/main.vue"
import nav from "../components/set/nav.vue"
import exit from "../components/set/exit.vue"
export default {
    components:{
        SetHeader:header,
        SetMain:main,
        SetNav:nav,
        SetExit:exit
    }
}
</script>

<style scoped>
        @import "../assets/css/set.css";
</style>


