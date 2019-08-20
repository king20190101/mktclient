<template>
    <div class="zhuanlanInsideFixtop">
        <div class="zhuanlanInsideFixtopcontent">
            <i class="fa fa-angle-left zhuanlanInsideTopfa" @click="goback"></i>
            <span>零基础实现微信电商小程序开发</span>
            <i class="fa fa-envelope-o"></i>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "zhuanlanInsideFixtop",
        methods: {
            goback(){
                this.$router.replace("./index")
            }
        }
    }
</script>

<style scoped>
    /*.zhuanlanInsideFixtop {*/
    /*    width: 100%;*/
    /*    height: 1.2rem;*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    position: sticky;*/
    /*    top: 0;*/
    /*    background-color: white;*/
    /*}*/
    /*.zhuanlanInsideFixtopcontent {*/
    /*    width: 90%;*/
    /*    height: 1.2rem;*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    align-items: center;*/
    /*    margin: 0 auto;*/
    /*}*/
    /*.zhuanlanInsideFixtopcontent>span {*/
    /*    font-size: 0.36rem;*/
    /*}*/

</style>