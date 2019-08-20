<template>
    <div class="learnFirst">
        <div class="learnNav">
            <router-link to="/Learn" class="fa fa-chevron-left" tag="i">
            </router-link>
            <span>课程</span>
            <span>实战</span>
        </div>
        <div class="learnAll">
            <span>全部课程</span>
            <span>Android</span>
        </div>
        <div class="learnMusic">
            <img src="../../public/img/learn/learn15.png" alt="">
            <div class="learnMusicRight">
                <p>慕课音乐（四）</p>
                <span>免费</span>
                <span>中级</span>
                <span>823</span>
            </div>
        </div>
        <p class="learnMei">
            没有更多数据了
        </p>

    </div>
</template>

<script>
    export default {
        name: "learnFirst"
    }
</script>

<style scoped>
   
        @import "../../src/assets/css/learneight.css";
</style>