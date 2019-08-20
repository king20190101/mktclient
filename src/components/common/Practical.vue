<template>
    <div>
       
    <router-link 
                 :to="`/detailsPage?id=${
                    [item.pic,item.tit,item.price]
                 }`" 

                tag="div" 
                class="mkPracticalOne" 
                v-for="(item,index) in data" :key="index" 
                v-lazy="data" >
            
                <img :src="item.pic" alt="" class="mkPracticalTwo" >
                <div class="mkPracticalThree">
                    <span class="mkPracticalEight">{{item.tit}}</span>
                    <span class="mkPracticalFour ">{{item.one}}</span>
                    <span class="mkPracticalFour " >{{item.two}}</span>
                    <span class="mkPracticalFour fa fa-user-o">{{item.num}}</span>
                    <br>
                    <span class="mkPracticalFour">￥{{item.price}}</span>
                </div>
            <!-- </router-link>     -->
        </router-link>
        
    </div>
</template>

<script>
    export default {
        name: "practical",
        props:["data"],
        data(){
            return{
               
            }
        }
    }
</script>

<style scoped>
    
</style>