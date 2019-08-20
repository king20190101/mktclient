<template>
    <div class="indexNav">
        <router-link
                class="indexThree"
                v-for="(item,index) in kecheng" :key="index"
                :to="item.path"
                tag="div"
        >
            <img :src="item.img" alt="" class="indexThreeOne">
            <div class="indexThreeTwo">{{item.span}}</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "nav-666",
        props:["kecheng"],
        data(){
            return{
                
            }
        }
    }
</script>

<style scoped>


</style>