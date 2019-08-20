<template>
    <div class="lesson-nav lesson">
        <div class="lesson">
            <div id="lesson"  :class="navBarFixed == true ? 'navBarWrap' :''">
                 <div class="tab">
                    <a href="#" @click="tabId=0" class="{tabId=0}">默认</a>
                    <a href="#" @click="tabId=1" class="{tabId=1}">最新</a>
                    <a href="#" @click="tabId=2" class="{tabId=2}">销量</a>
                    <a href="#" @click="tabId=3" class="{tabId=3}">更新</a>
                 </div>
                <div class="lesson-right">
                   <div class="lesson-r">全部</div>
                    <i class="iconfont icon-quanbu"></i>
                </div>
            </div>
        </div>
        <div class="box">
            <div v-show="tabId===0">
                <lesson-one></lesson-one>
            </div>
            <div v-show="tabId===1">
                <lesson-two></lesson-two>
                <lesson-two></lesson-two>
            </div>
            <div v-show="tabId===2">
                <lesson-three></lesson-three>
                <lesson-three></lesson-three>
                <lesson-three></lesson-three>
            </div>
            <div v-show="tabId===3">
                <lesson-three></lesson-three>
                <lesson-three></lesson-three>
                <lesson-three></lesson-three>
                <lesson-three></lesson-three>
            </div>
         </div>

    </div>

</template>

<script>
    import lessonOne from './lesson-one'
    import lessonTwo from './lesson-two'
    import lessonThree from './lesson-three'
    export default {
        name: "lesson-nav",
        components:{
          lessonOne,
            lessonTwo,
            lessonThree,
        },
        data(){
            return {
                tabId: 0,
                navBarFixed:false,
            }
        },
        mounted() {
            window.addEventListener("lesson", this.watchScroll);
        },


        methods: {
            watchScroll() {
                var scrollTop =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                console.log(scrollTop)
                //  当滚动超过 90 时，实现吸顶效果
                if (scrollTop > 90) {
                    this.navBarFixed = true;
                } else {
                    this.navBarFixed = false;
                }
            }
        }
    }
</script>

<style scoped>
    .navBarWrap {
        position:fixed;
        top:0;
        z-index:999;
    }

    .lesson-right{
        float: right;
        /*margin-top: 0.1rem;*/
        font-size: 0.3rem;
        height: 0.5rem;
        line-height: 0.5rem;
        margin-right: 0.3rem;
    }
    .lesson-r{
        font-size: 0.35rem;
        display: inline-block;
    }
    .lesson-right i{
        /*width: 0.5rem;*/
        font-size: 0.4rem;
        margin-top: 0.1rem;
    }
    .tab{
        width: 60%;
        margin-left: 0.3rem;
    }
    .tab a{
        color: #bfbfbf;
          text-decoration: none;
          height: 0.5rem;
           width: 25%;
          float: left;
        line-height: 0.5rem;
         text-align: center;
        }

</style>