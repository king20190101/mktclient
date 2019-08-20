
<template>
    <div class="WriteNoteBox">
        <div class="WriteNote_header">
            <span @click="isShowNote">×</span>
            <span>定制课表</span>
        </div>
        <div style="width: 100%;height: 100%;background: #FCFAF8;display: flex">
            <div style="display: flex;padding:.3rem 0;margin: auto;margin-top: 3.8rem;width:100%; ">
                <h2 style="background: -webkit-linear-gradient(left,#45CAFF,#1471FB);
    background: linear-gradient(90deg, #45CAFF,#1471FB);
    -webkit-background-clip: text;
    color: transparent;;display: flex;margin: auto;font-size: .65rem;color: transparent;">敬请期待</h2>
            </div>
        </div>

<!--        <div style="position: relative;border: 1px solid;">-->
<!--            <div>-->
<!--                <h2 v-for="item in courseMsg">{{item.courseTitle}}</h2>-->
<!--            </div>-->
<!--            <div>-->
<!--                <span  v-for="item in courseMsg">章节数：<span>{{item.summaryNum}}节</span></span>-->
<!--                <span  v-for="item in courseMsg">总时长：<span>{{item.AllTime}}</span></span>-->
<!--            </div>-->
<!--            <div>-->
<!--                <span v-for="item in courseMsg">订制学习计划<span>待完成<i>{{item.NoComplete}}</i>节</span></span>-->
<!--            </div>-->
<!--            <div id="aaa" style="display: flex;justify-content: space-around;border: 1px solid;">-->
<!--                <div style="border:1px solid;width:.6rem;height: 1.7rem;overflow-y: scroll;font-size: .45rem">-->
<!--                    <ul v-for="(item,index) in courseMsg" :key="index"  style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms; transition-property: none; line-height: 44px;">-->
<!--                        <li class="summeryNum" style="height: .6rem;" v-for="(i,index) in item.summaryNum" :key="index">{{i}}</li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                <div style="border:1px solid;width:.6rem;height: 1.7rem;overflow-y: scroll;font-size: .45rem">-->
<!--                    <ul v-for="(item,index) in courseMsg" :key="index"  style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms; transition-property: none; line-height: 44px;">-->
<!--                        <li class="daysNum" style="height: .6rem;" v-for="(i,index) in item.summaryNum" :key="index">{{i}}</li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                <div class="contrast" style="width:100%;height: .6rem;position: absolute;border: 1px solid;bottom: .65rem;z-index: -1;background: rgba(0,0,0,.6)">-->
<!--                    <span style="position: absolute;left:2.3rem;top: .15rem;">节</span>-->
<!--                    <span style="position: absolute;right: 1.1rem;top: .15rem;">天</span>-->
<!--                </div>-->
<!--            </div>-->

<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "CoursePlayTable",
        props:[
            'coursePlayTxt',
            'courseMsg'
        ],
        data(){
            return{
                showNode5:false,
            }
        },
        methods:{
            isShowNote(){
                this.$emit("isShowNote5",this.showNode5)
                console.log([this.showNode5,this.show])
            },
        },
        mounted() {

        }
    }
</script>

<style scoped>
    /*.WriteNote_content_txt{*/
    /*    background: #21cd85;*/
    /*    width: 94.5%;*/
    /*    height: 5rem;*/
    /*    font-size: .36rem;*/
    /*    !*line-height: .38rem;*!*/
    /*    padding: 0 .2rem;*/
    /*}*/
    /*.WriteNoteBox{*/
    /*    position: fixed;*/
    /*    top: 0;*/
    /*    left: 0;*/
    /*    bottom: 0;*/
    /*    right: 0;*/
    /*    background: white;*/
    /*    z-index: 2200;*/
    /*}*/
    /*.WriteNote_header{*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    position: relative;*/
    /*    width: 100%;*/
    /*    height: 1rem;*/
    /*}*/
    /*.WriteNote_header span:first-child{*/
    /*    font-size: .45rem;*/
    /*    font-weight: 600;*/
    /*    position: absolute;*/
    /*    left: .3rem;*/
    /*    top: .2rem;*/
    /*}*/
    /*.WriteNote_header span:last-child{*/
    /*    font-size: .36rem;*/
    /*    font-weight: 600;*/
    /*}*/
</style>