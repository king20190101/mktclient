<template>
<!--    头部组件-->
    <div class="courseHeader">
<!--        点击返回主页-->
        <i class="fa fa-angle-left " @click="goindex"></i>
        <span class="courseSpantop">课程</span>
        <span class="courseSpanbutton">我的收藏</span>
    </div>
</template>

<script>
    export default {
        name: "courseHeader",
        methods: {
            goindex(){
                this.$router.replace("./index")
            }
        }
    }
</script>

<style scoped>
    /*.courseHeader {*/
    /*    width: 100%;*/
    /*    height: 1.55rem;*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    align-items: center;*/
    /*    font-size: 0.5rem;*/
    /*    position:sticky;*/
    /*    top:0;*/
    /*    background-color:white;*/
    /*}*/
    /*.courseHeader>i {*/
    /*    margin-left: 0.3rem;*/
    /*    font-size: 0.5rem;*/
    /*}*/
    /*.courseSpantop {*/
    /*    font-weight: bolder;*/
    /*    margin-left: 1rem;*/
    /*}*/
    /*.courseSpanbutton {*/
    /*    margin-right: 0.3rem;*/
    /*    font-size: 0.42rem;*/
    /*}*/

</style>