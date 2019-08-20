<template>
   <div>
       <div class="OrderPayment">
            <div class="number">
                <p>订单编号：1907111650507047</p>
            </div>
            <div class="OrderShop">
                <div class="border">
                    
                    <div class="picture">
                        <img src="../../../public/img/1.png" alt="">
                    </div>
                    <div class="text">
                        <span>前端面试项目冲刺 京东金融Vue组件化实战</span>
                        <p>￥299.00</p>
                    </div>
                </div>
            </div>
            <div class="price">
                <div class="first">
                    <span>总价</span>
                    <p>￥299.00</p>
                </div>

                <div class="second">
                    <router-link
                            to="./payment"
                    >
                        <p>立即支付</p>
                    </router-link>
                </div>
            </div>
       </div>
       
   </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>

</style>


