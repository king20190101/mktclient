<template>
    <div class="page">
        <order-header></order-header>
        <order-payment></order-payment>
    </div>
</template>

<script>
import header from "../components/order/header.vue"
import payment from "../components/order/payment.vue"
export default {
    components:{
      orderHeader:header,
      orderPayment:payment
    }
}
</script>

<style scoped>

        @import "../assets/css/order.css";
</style>


