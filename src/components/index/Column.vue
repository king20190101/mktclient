<template>
    <router-link to="/zhuanlanInside" tag="div" class="zhuanLan">
    
        <mk-cloumn-style :zhuanlandata = "zhuanlandata"/>
   
    </router-link>
</template>

<script>
    import CloumnStyle from '../common/ColumnStyle'
    export default {
        components:{
            "mk-cloumn-style":CloumnStyle,
        },
        data(){
            return{
                "zhuanlandata":[
                    {"img":"./img/index/index1.png",
                        "id":"小程序开发一线战地笔记"},
                    {"img":"./img/index/index2.png",
                        "id":"关于TS的前世今生一篇打尽"},
                    {"img":"./img/index/index3.png",
                        "id":"小程序开发一线战地笔记"},
                    {"img":"./img/index/index4.png",
                        "id":"小程序开发一线战地笔记"},
                    {"img":"./img/index/index5.png",
                        "id":"小程序开发一线战地笔记"},
                    {"img":"./img/index/index6.png",
                        "id":"小程序开发一线战地笔记"},
                    {"img":"./img/index/index7.png",
                        "id":"小程序开发一线战地笔记"},
                    {"img":"./img/index/index8.png",
                        "id":"小程序开发一线战地笔记"},
                ]
            }
        }
    }
</script>

<style scoped>



</style>


