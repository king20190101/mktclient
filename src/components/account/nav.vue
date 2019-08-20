<template>
<div>
  <div class="AccountNav-box">
      <div class="AccountNav">
          <i class="fa fa-opera"></i>

          <div>
              积分抽奖
          </div>
          <div class="AccountNav-box-cl">
              <p>好奖随心选</p>
              <i class="fa fa-chevron-right"></i>
          </div>
      </div>
      <div class="AccountNav">
          <i class="fa fa-send-o (alias)"></i>

          <div class="first" >
              邀请有奖
          </div>
          <div  class="AccountNav-box-cl">
              <p>拿万元奖学金</p>
              <i class="fa fa-chevron-right"></i>
          </div>
      </div>
      <div class="AccountNav">
          <i class="fa fa-reply"></i>

          <div class="first">
              分销返利
          </div>
          <div class="AccountNav-box-cl">
              <p>查看受益与提现</p>
              <i class="fa fa-chevron-right"></i>
          </div>
      </div>
  </div>
  <div class="AccountNav-box-1">
      <router-link to="/shoppingCar">
          <div class="AccountNav">
              <div class="first">
                  购物车
              </div>
              <div class="">

                  <i class="fa fa-chevron-right"></i>
              </div>
          </div>
      </router-link>
      <router-link to="/order">
          <div class="AccountNav">
              <div class="first">
                  我的订单
              </div>
              <div class="">

                  <i class="fa fa-chevron-right"></i>
              </div>
          </div>
      </router-link>
  </div>
  <div class="AccountNav-box-2">
      <div class="AccountNav">
          <div class="first">
              我的余额
          </div>
          <div class="">

              <i class="fa fa-chevron-right"></i>
          </div>
      </div>
      <div class="AccountNav">
          <div class="first">
              电子兑换码
          </div>
          <div class="">

              <i class="fa fa-chevron-right"></i>
          </div>
      </div>
      <div class="AccountNav">
          <div class="first">
              优惠券
          </div>
          <div class="">

              <i class="fa fa-chevron-right"></i>
          </div>
      </div>
  </div>
   <div class="AccountNav-box-3">
       <div class="AccountNav">
           <div class="first">
               意见反馈
           </div>
           <div class="">

               <i class="fa fa-chevron-right"></i>
           </div>
       </div>
       <div class="AccountNav">
           <div class="first">
               常见问题
           </div>
           <div class="">

               <i class="fa fa-chevron-right"></i>
           </div>
       </div>
       <!-- <div class="AccountNav"> -->
           <router-link to="/set" tag="div" class="AccountNav">
                <div class="first">
                    设置
                </div>
                
                <div class="">

                    <i class="fa fa-chevron-right"></i>
                </div>
           </router-link>
       <!-- </div> -->
   </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    
</style>


