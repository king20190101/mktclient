<template>
    <div>
        <div class="learnThirdNav">
            <router-link to="/learn" >
                <i class="fa fa-chevron-left"></i>
            </router-link>
            <p @click="showCont" class="learnMine">我的笔记
                <i class="fa fa-caret-down"></i>
            </p>

            <!-- <p to="/Learn" class="fa fa-caret-down"> -->
                
            <!-- </p> -->
        </div>
        <div v-if="show" class="learnBiji">
            <option class="learnB" value="全部">全部</option>
            <option class="learnB" value="课程">课程</option>
            <option class="learnB" value="实战">实战</option>
            <option class="learnB" value="就业班">就业班</option>
        </div>
        <div class="learnThirdImg">
            <img src="../../public/img/learn/learn16.jpg" alt="">
            <p>这里什么都没有</p>
        </div>



    </div>
</template>

<script>
    export default {
        name: "third",
        data(){
            return {
                show: false
            }
        },
        methods:{
            showCont:function(){
                this.show = !this.show;
            }
        },
    }


</script>

<style scoped>
    
     @import "../../src/assets/css/learneight.css";
</style>