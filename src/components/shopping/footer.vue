<template>
     <div class="ShoppingFooter" >
         <div class="first" >
             <van-checkbox checked="allSelect" checked-color="#07c160" v-model="allSelect" @click="allselectaction()" ></van-checkbox>
             <p>全选</p>
         </div>
         <div class="second">
             <p>合计：{{totalPrice}}</p>
         </div>
         <router-link to="./payment" class="third" tag="div">
                 <p ref="aaa">去结算</p>
            </router-link>
    </div>
</template>

<script>
export default {
  props:["shops"],
   data() {
    return {
      //checked: true
      allSelect:false,
       isSelect:false
    };
  },
  computed:{
        totalPrice() {
            var total = 0;
            for (var i=0;i<this.shops.length;i++){
                var aaa = this.shops[i];
                if (aaa.isSelect){
                    total += parseFloat(aaa.goods[2] )
                }
            }
 
        
 
            return total;
        }
    },
    created(){
        //console.log(this.shops[0])
    },
    methods:{
        allselectaction:function () {
    
                 //alert(1)
                this.allSelect=!this.allSelect
                if(this.allSelect){
                    for (var i=0; i<this.shops.length; i++){
                        var item = this.shops[i];
                        item.isSelect = true
                    }
                }else {
                    for (var i=0; i<this.shops.length; i++){
                        var item = this.shops[i];
                        item.isSelect = false
                    }
                }
            }
        },
         watch:{
 
        shops:{
            handler:function (val,oldval) {
                if(val){
 
                    var index = 0;
                    for (var i=0; i<this.shops.length; i++){
                        var item = this.shops[i];
                        if(item.isSelect){
                            index++
                        }
                    }
                    if(index == this.shops.length){
                        this.allSelect = true
                    }else {
                        this.allSelect = false
                    }
                }
            },
            deep:true
        },
   }
}
</script>

<style scoped>

</style> 