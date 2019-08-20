<template>
<div class="page">
    <shopping-header></shopping-header>
    <shopping-shop v-if="shops" :shops="shops"></shopping-shop>
    <shopping-footer v-if="shops" :shops="shops"></shopping-footer>
</div>
</template>

<script>
import header from "../components/shopping/header.vue"
import shop from "../components/shopping/shop.vue"
import footer from "../components/shopping/footer.vue"

export default {
    components:{
      shoppingHeader:header,
      shoppingShop:shop,
      shoppingFooter:footer
    },
    
    data(){
          return{
              
              shops:{}
          }
        },



    created(){
       fetch("http://localhost:3000/cart/app/goodscart").then(res=>{
                res.json().then(data=>{
                    this.shops=data.practs
                    //console.log(this.shops[1].goods);
                })
            })
    }
}
</script>

<style scoped>

@import "../assets/css/shoppingcar.css";
</style>


