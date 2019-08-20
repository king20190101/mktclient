<template>
    <div class="ShoppingShop">
        <div class="border"  :key="index" v-for="(item,index) in shops">
            <van-checkbox checked="item.isSelect" v-model="item.isSelect" checked-color="#07c160" icon-size="0.46rem"></van-checkbox>
            <!-- <input type="radius" > -->
            <div class="picture">
               <img v-if="item.goods[0]" :src="item.goods[0]" alt="">
            </div>
            <div class="text">
                <span v-if="item.goods[1]">{{item.goods[1]}}</span>
                <p v-if="item.goods[2]">{{item.goods[2]}}</p>
            </div>
        </div>
       
    </div>
</template>

<script>

export default {
    props:["shops"],
   data() {
        return {
            // data:[
            //     {
                  
            //       isSelect:false,
            //       allSelect:false,
            //     }
            //   ]
        }
    },
    // created(){
    //     console.log(this.data[0].goods)
    // }
}
</script>

<style scoped>
.ShoppingShop{
    display: unset;
}
</style> 