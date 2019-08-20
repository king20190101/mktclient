<template>
    <div>
        <router-link :to="`/detailsPage?id=${
            [item.pic,item.tit,item.price]
                }`" 

                tag="div" 
                class="mkspracticalOne" 
                v-for="(item,index) in data" :key="index" 
                v-lazy="data" >

            <img :src="item.pic" alt="" class="mkspracticalTwo" >
            <div class="mkspracticalThree">
                <span class="mkspracticalEight">{{item.tit}}</span>
                <span class="mkspracticalFour ">{{item.one}}</span>
                <span class="mkspracticalFour " >{{item.two}}</span>
                <span class="mkspracticalFour fa fa-user-o">{{item.num}}</span>
                <br>
                <span class="mkspracticalFour">￥{{item.price}}</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "practical1",
        props:["data"],
        data(){
            return{

                // newlist:[0,1,2]
            }
        }
    }
</script>

<style scoped>
    


</style>