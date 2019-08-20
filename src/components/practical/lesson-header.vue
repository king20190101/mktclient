<template>

    <div class="lesson-header">
        <span @click="back" class="goback icon-fanhui iconfont"></span>
        <span class="lesson-header-center">实战课</span>
        <span class="float-r">我的实战</span>
    </div>

</template>

<script>
    export default {
        name: "lesson-header",
        methods:{
            back(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped>

    .lesson-header{
        width: 100%;
        height: 0.8rem;
        background: white;
        position: fixed;
        z-index:9999;
    }
    .goback{
        float: left;
        margin:0.2rem;
        font-size: 0.4rem;
        font-weight:600;
    }
    .float-r{
        float: right;

        font-size: 0.3rem;
        font-weight: 400;
        height: 0.8rem;
        line-height: 0.8rem;
        margin-right: 0.2rem;
    }
    .lesson-header-center{
        font-size: 0.38rem;
        display: inline-block;
        height: 0.8rem;
        line-height: 0.8rem;
        font-weight: 600;
        margin-left: 0.3rem;
    }
</style>