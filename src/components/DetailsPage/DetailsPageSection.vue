<template>
  <div>
    <div class="tit">
      <div class="subject" id="one">实战课程</div>
      <h1 class="SectionH1">{{arr[0][1]}}</h1>
      <div class="SectionP">
        <!-- <p v-for="(item,index) in message" :key="index">{{item}}</p> -->
        <!-- <p>SSM商铺系统V1.0,解决毕业设计痛点;</p> -->
      </div>
      <div class="SectionPrice">
        <div class="SectionPriceLeft">Ұ{{arr[0][2]}}</div>
        <div class="SectionPriceRight">
          试看
          <router-link to="/coursePlay" class="Sectionimg" tag="a">
            <i class="fa fa-play-circle"></i>
          </router-link>

        </div>
      </div>
      <!-- SectionBigBox -->
      <div class="SectionBigBox">
        <div class="SectionBoxone" >   
          <div class="SectionBoxone-left">
            <span class="SectionBoxone-span">促销</span>
            <span class="SectionPayfor">花呗付款</span>
            已支持支付宝花呗付款
          </div>
          <div class="SectionBoxone-right">
            <span>&hellip;</span>
            <!-- <img src="http://szimg.mukewang.com/596d799d0001eb4207500757.jpg" alt /> -->
          </div>
        </div>
        <van-popup
          v-model="show"
          position="bottom"
          opacity:0.3
          :style="{ height: '3.6rem'}"
          :overlay-style="{'background-color':'rgba(0,0,0,.1)'}"
          round
        >
        <div class="SectionBoxone-cx" >
            <div class="SectionBoxone-cuxiao">
                促销
            </div> 
            <div class="SectionBoxone-hb">
                <span class="SectionBoxone-hb-one">花呗付款</span>
                已支持支付宝花呗付款
            </div>
            <div class="SectionBoxone-success">完成</div>
        </div>
        </van-popup>
        <div class="SectionBoxone" @click="showPopup">    
          <div class="SectionBoxone-left">
            <span class="SectionBoxone-span">参数</span>
            初级 · 23小时 · 2436人学 · 99.4%好评度
          </div>
          <div class="SectionBoxone-right">
            <span>&hellip;</span>
            <!-- <img src="http://szimg.mukewang.com/596d799d0001eb4207500757.jpg" alt= /> -->
          </div>
        </div>
        <div class="SectionBoxone" >
          <div class="SectionBoxone-left">
            <span class="SectionBoxone-span">套餐</span>
            套餐最高立省Ұ136, 更多套餐有惊喜
          </div>
          <div class="SectionBoxone-right">
            <span>&hellip;</span>
            <!-- <img src="http://szimg.mukewang.com/596d799d0001eb4207500757.jpg" alt /> -->
          </div>
        </div>
        <div class="SectionBoxone">
          <div class="SectionBoxone-left">
            <span class="SectionBoxone-span">服务</span>
            <div class="SectionBoxone-left-img">
              <!-- <img :src="pictor" alt=""> -->
            </div>
          </div>
          <div class="SectionBoxone-right">
            <span>&hellip;</span>
            <!-- <img src="http://szimg.mukewang.com/596d799d0001eb4207500757.jpg" alt /> -->
          </div>
        </div>
        <div class="SectionBoxone">
          <div class="SectionBoxone-left">
            <span class="SectionBoxone-span">日志</span>
            共2条日志, 最近更新2条
          </div>
          <div class="SectionBoxone-right">
           
            <span>&hellip;</span>
            <!-- <img src="http://szimg.mukewang.com/596d799d0001eb4207500757.jpg" alt /> -->
          </div>
        </div>
      </div>
    </div>
    <img src="../../../public/img/index/dp1.jpg" alt="" class="dp1">
    <img src="../../../public/img/index/dp2.jpg" alt="" class="dp2">
    <img src="../../../public/img/index/dp3.jpg" alt="" class="dp2">
    <img src="../../../public/img/index/dp4.jpg" alt="" class="dp2">
    <img src="../../../public/img/index/dp5.jpg" alt="" class="dp2">
    <img src="../../../public/img/index/dp6.jpg" alt="" class="dp2">
    <img src="../../../public/img/index/dp7.jpg" alt="" class="dp2">
    <img src="../../../public/img/index/dp8.jpg" alt="" class="dp2">
    <!-- <img class="DetailsPageSectionimg" :src="imgs" alt />
    <img class="DetailsPageSectionimg" :src="imgs" alt />
    <div id="two" class="zx">章节</div>
    <img class="DetailsPageSectionimg" :src="imgs" alt />
    <img class="DetailsPageSectionimg" :src="imgs" alt />
    <img class="DetailsPageSectionimg" :src="imgs" alt />
    <img class="DetailsPageSectionimg" :src="imgs" alt />
    <div class="zx" id="three">评价</div>
    <img class="DetailsPageSectionimg" :src="imgs" alt />
    <img class="DetailsPageSectionimg" :src="imgs" alt />
    <div class="zx" id="four">推荐</div>
    <img class="DetailsPageSectionimg" :src="imgs" alt /> -->
  </div>
</template>


<script>
export default {
  name: "DetailsPageSection",
  props: ["arr"],
  data() {
    return {
      // words: "毕设神器 JAVA主流技术栈SSM+SpringBoot商铺系统",
      // src: "http://szimg.mukewang.com/596d799d0001eb4207500757.jpg",
      // message: [
      //   "SSM商铺系统V1.0,解决毕业设计痛点;",
      //   "SpringBoot商铺V2.0,满足企业工作刚需"
      // ],
      // price: "299.00",
      // photo: "http://szimg.mukewang.com/596d799d0001eb4207500757.jpg",
      // pictor: "http://szimg.mukewang.com/596d799d0001eb4207500757.jpg",
      // imgs: "http://szimg.mukewang.com/596d799d0001eb4207500757.jpg",
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
      
    }
  },
  created() {
    //console.log(sid);
  }
};
</script>


<style scoped>
/* .zx {
  height: 1rem;
  background: red;
  color: black;
  font-size: 0.3rem;
  line-height: 1rem;
}
.SectionBoxone-cx{
    width: 7rem;
    height: 100%;
    margin: 0 auto;
}
.SectionBoxone-cuxiao{
    width: 6.6rem;
    margin: 0 auto;
    height: 1.1rem;
    line-height: 1.1rem;
    color: #d28e07;
    font-size: .32rem;
    font-weight: 600;
    text-align: left;
    border-bottom: 2px solid #c8c5bc;
}
.SectionBoxone-hb{
    width: 6.6rem;
    height: 1.2rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    font-size: .24rem;
    color: #0d0d0f;
    border-bottom: 2px solid #dcdbd1;
    margin-bottom: .2rem;
    letter-spacing:1px;
}
.SectionBoxone-hb-one{
    display:block;
    width: 1.2rem;
    height: .4rem;
    line-height: .4rem;
    font-size: .2rem;
    color: #1bb4d8;
    background: #d6effb;
    border-radius: .2rem;
    margin-left: .1rem;
    margin-right: .1rem;
}
.SectionBoxone-success{
    width: 100%;
    height: .84rem;
    background: #d28e07;
    border-radius: .42rem;
    font-size: .28rem;
    color: #ffffd7;
    line-height: .84rem;
} */
</style>