<template>
  <div>
    <div class="headers">
      <!-- <img :src="imgs[0]" alt @click="back" /> -->
      <router-link to="/" class="fa fa-chevron-left" tag="span">
      </router-link>
      <!-- <span class="fa fa-chevron-left"></span> -->
      <div
        class="words"
        v-for="(item,index) in message"
        :key="index"
        :class="{wordsclick:index==b}"
        @click="change(index)"
      >
      {{item}}
     
      </div>
        <router-link to="/shoppingCar">
        <i class="fa fa-cart-arrow-down"></i>
        </router-link>
        <i class="fa fa-calendar-check-o"></i>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsPageheaders",
  data() {
    return {
      b:0,
      imgs: [
        "./img/detailsPage/details01.png",
        "./img/detailsPage/details02.png",
        "./img/detailsPage/details03.png"
      ],
      message: ["详情", "章节", "评价", "推荐"]
      

      
    };
  },
  methods: {
    // back() {
    //   this.$router.go(-1);
    // },
    change: function(index) {
      this.b = index;
    }
  }
  
};
</script>



<style scoped>
  
</style>