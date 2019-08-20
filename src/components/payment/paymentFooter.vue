<template>
    <div class="paymentFooter"
         v-model="money"
         :totalMoney="totalMoney"
         @click ="cClick"
    >
        <div class="paymentFooterMoney">
            <span>实付</span><span class="payMoney moneySign">{{totalMoney}}</span>
        </div>
        <van-button class="paymentFooterBtn" type="info">提交订单</van-button>
    </div>
</template>

<script>
    export default {
        name: "paymentFooter",
        props:["money","totalMoney"],
        methods:{
            cClick(){
                this.$emit("cClick")
            }
        }
    }
</script>

<style scoped>

</style>