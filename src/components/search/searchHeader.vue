<template>
    <div class="searchTop">
        <!--顶部搜索框-->
        <div class="searchTop1">
            <i class="fa fa-chevron-left" @click="goBack"></i>
            <input class="con" type="search" :placeholder="keyWord?keyWord:'请输入搜索内容'">
            <i class="iconfont icon-sousuo"  @click = "sInfo"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchHeader",
        props:["keyWord"],
        methods:{
            goBack(){
                this.$emit("gBack")
            },
            sInfo(){
                this.$emit("sInfo")
            }
        }

    }
</script>

<style scoped>

</style>