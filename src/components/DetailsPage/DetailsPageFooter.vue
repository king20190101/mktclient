<template>
    <div>
        <div class="DetailsPageFooter">
            <div class="DetailsPageFooterimg">
                <!-- <img :src="src[0]" alt=""> -->
                
                 <i class="fa fa-github-alt"></i>
                <span>咨询</span>
            </div>
             <div class="DetailsPageFooterimg">
                <!-- <img :src="src[1]" alt=""> -->
                <i class="fa fa-star-o"></i>
                <span>收藏</span>
            </div>
            <div class="DetailsPageFooterright">
                <!-- <router-link
                    to="./shoppingCar"
                > -->
                    <div class="DetailsPageFooteradd" 
                    
                    @click=addgoods(arr[0])>加入购物车</div>

                <!-- </router-link> -->
                <router-link
                        to="./payment"
                >
                    <div class="DetailsPageFooterbuy">立即购买</div>

                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailsPageFooter",
    props:["arr"],
    data(){
        return{
            // src:["http://szimg.mukewang.com/596d79b10001523b07500860.jpg","http://szimg.mukewang.com/596d799d0001eb4207500757.jpg"],
            // word:["咨询","收藏"]
        }
    },
    methods:{
        addgoods(practs){
            //console.log(practs)
                let info={
                        goods:practs
                    };
                    
                //console.log(practs)
                fetch("http://localhost:3000/cart/api/goodscartt",{
                    method: "post",
                    headers: {
                        "Content-Type": "application/json" //请求头
                    },
                    body: JSON.stringify(info),
                    

                }).then(res => {
                    res.json().then(data => {
                        alert("商品添加成功");
                        //触发actions的getAddNum方法，计算购物车的商品数量
                        //this.$store.dispatch("getAddNum");
                    });
                });
        }
    },
    created(){
        //console.log(this.arr[0]);
        
    }
}
</script>

<style scoped>
</style>