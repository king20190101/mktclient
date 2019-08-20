<template>
    <div>
           <zhuanlanHeader/>
           <zhuanlanNum/>
    </div>
</template>



<script>
import zhuanlanHeader from "../components/zhuanlan/zhuanlanHeader.vue"
import zhuanlanNum from "../components/zhuanlan/zhuanlanNum.vue"
export default {
    name:"zhuanlan",
    components:{
        zhuanlanHeader,
        zhuanlanNum
    }
}
</script>


<style scoped>
    @import "../assets/css/zhuanlan.css";
</style>
