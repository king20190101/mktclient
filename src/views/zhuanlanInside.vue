<template>
    <div class="zhuanlanInside">
        <zhuanlanInside-fixtop class="zhuanlanInsidefixtop"></zhuanlanInside-fixtop>
        <div class="zhuanlanInsideContentshow" ref="viewBox" >
            <zhuanlanInside-Top-header class="zhuanlanInsideTopheader"></zhuanlanInside-Top-header>
            <zhuanlanInside-Top></zhuanlanInside-Top>
            <zhuanlanInside-content v-if="zhuanlanInsidecontentList" :zhuanlanInsidecontentList="zhuanlanInsidecontentList"></zhuanlanInside-content>
            <zhuanlanInside-list v-if="ZhuanlanInsideList" :ZhuanlanInsideList="ZhuanlanInsideList"></zhuanlanInside-list>
        </div>
        <zhuanlanInside-fixbuttom></zhuanlanInside-fixbuttom>
    </div>
</template>

<script>
    import $ from "jquery"
    import zhuanlanInsideFixtop from "../../src/components/zhuanlanInside/zhuanlanInsideFixtop"
    import zhuanlanInsideTop from "../../src/components/zhuanlanInside/zhuanlanInsideTop"
    import zhuanlanInsidecontent from "../../src/components/zhuanlanInside/zhuanlanInsidecontent"
    import zhuanlanInsideFixbuttom from "../../src/components/zhuanlanInside/zhuanlanInsideFixbuttom"
    import zhuanlanInsidelist from "../components/zhuanlanInside/zhuanlanInsidelist"
    import zhuanlanInsideTopheader from "../components/zhuanlanInside/zhuanlanInsideTopheader"

    export default {
        name: "zhuanlanInside",
        mounted () {
            this.box = this.$refs.viewBox
            // 监听这个dom的scroll事件
            this.box.addEventListener('scroll', () => {
                 console.log(" scroll " + this.$refs.viewBox.scrollTop)
                // this.isScroll=this.$refs.viewBox.scrollTop>0
                let zhuanlanInsidefixtop = document.getElementsByClassName("zhuanlanInsidefixtop")[0]
                if(this.$refs.viewBox.scrollTop>0){
                    $(".zhuanlanInsidefixtop").fadeIn("slow","linear");
                }else{
                    $(".zhuanlanInsideFixtop").css({"display":"none"});
                }
            }, false)

        },
        methods: {

        },

        data(){
            return {
                ZhuanlanInsideList :{},
                zhuanlanInsidecontentList: {},
            }
        },
        components: {
            "zhuanlanInside-fixtop": zhuanlanInsideFixtop,
            "zhuanlanInside-Top": zhuanlanInsideTop,
            "zhuanlanInside-content": zhuanlanInsidecontent,
            "zhuanlanInside-fixbuttom": zhuanlanInsideFixbuttom,
            "zhuanlanInside-list": zhuanlanInsidelist,
            "zhuanlanInside-Top-header": zhuanlanInsideTopheader,
        },
        created(){
            fetch("http://localhost:3000/cart/api/zhuanlanInsidelists").then(res=>{
                res.json().then(data=>{
                    this.ZhuanlanInsideList = data.ZhuanlanInsideList
                    this.zhuanlanInsidecontentList = data.zhuanlanInsidecontentList
                   // console.log(this.ZhuanlanInsideList)
                    //console.log(this.zhuanlanInsidecontentList)
                })
            })
        }

    }
</script>

<style scoped>

    

    @import "../assets/css/zhuanlanInside.css";

</style>