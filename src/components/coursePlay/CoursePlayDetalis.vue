<template>
<!--    <h1 class="nn">我是详情</h1>-->
    <div class="coursePlayDetalisBox">
        <!-- 详情标题部分  -->
        <div class="coursePlayDetalisTitBox">
            <div class="coursePlayDetalisTit">
                <h2 v-for="(item,index) in courseMsg" :key="index">{{item.courseTitle}}</h2>
                <div class="coursePlayDetalisBtn" @click="change">
                    <i>☆</i>
                    <span>收藏</span>
                </div>
            </div>
            <p>不仅能学到自定义控件，和重新组装控件，第三方库.最终可以完成一个炫酷的音乐播放器.</p>
        </div>
        <div class="coursePlayDetalisLine"></div>
    <!-- 课程须知部分 -->
        <div class="coursePlayDetalisNotice">
            <div class="coursePlayDetalisNoticeMes">
                <h3>课程须知</h3>
                <p>学习本课之前需要有一定的安卓基础知识。本科分上中下三个系列，建议同学完整学习课程。</p>
            </div>
            <div class="coursePlayDetalisNoticeMes">
                <h3>老师告诉你能学到什么？</h3>
                <p>不仅能学到自定义组件，第三方框架，Realm数据库等知识点，更能体验到一个APP从0到1的完整过程。</p>
            </div>
        </div>
        <div class="coursePlayDetalisLine"></div>
    <!-- 授课老师资料 -->
        <div class="coursePlayDetalisTeacher">
            <div class="coursePlayDetalisTeacherLeft">
                <div class="coursePlayImgBox">
                    <img src="img/wt_img/tx.jpg" alt="">
                    <img src="img/wt_img/mooc_logo.jpg" alt="">
                </div>
                <div class="coursePlayDetalisTeacherImg">
                    <span class="coursePlayDetalisTeacherName">LGD_uu</span>
                    <span class="coursePlayDetalisTeacherLecturer">全栈工程师</span>
                </div>
            </div>
            <i class="entryLogin">进入</i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CoursePlayDetalis",
        props:["courseMsg"],
        methods:{
            change(){
                    let btn = document.getElementsByClassName("coursePlayDetalisBtn")[0].childNodes;
                    btn[0].style.display = "none";
                    btn[1].innerHTML = "已收藏";
                    document.getElementsByClassName("coursePlayDetalisBtn")[0].style.backgroundColor = "#BABABA";
                    document.getElementsByClassName("coursePlayDetalisBtn")[0].style.color = "#ffffff";
                }
            }
        }
</script>

<style scoped>
    /*.coursePlayDetalisBox{*/
    /*    text-align: left;*/
    /*    padding-top: 5.2rem;*/

    /*}*/
    /*.coursePlayDetalisLine{*/
    /*    width: 100%;*/
    /*    height: 1px;*/
    /*    border-bottom: 1px solid #eeeeee;*/
    /*}*/
    /*.coursePlayDetalisTit{*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    align-items: center;*/
    /*    margin-bottom: .12rem;*/

    /*}*/
    /*.coursePlayDetalisBtn{*/
    /*    padding: .03rem .07rem;*/
    /*    display: flex;*/
    /*    background: red;*/
    /*    border-radius: .05rem;*/
    /*}*/
    /*.coursePlayDetalisBtn span,.coursePlayDetalisBtn i{*/
    /*    color: #fff;*/
    /*}*/
    /*.coursePlayDetalisTitBox p{*/
    /*    line-height: .6rem;*/
    /*    font-size: .32rem;*/
    /*    color: #6c6d6f;*/
    /*}*/
    /*.coursePlayDetalisBtn i{*/
    /*    font-size: .32rem;*/
    /*    margin-right: .15rem;*/
    /*}*/
    /*.coursePlayDetalisBtn span{*/
    /*    height: 100%;*/
    /*    font-size: .32rem;*/
    /*    margin-right: .2rem;*/
    /*}*/
    /*.coursePlayDetalisTitBox{*/
    /*    padding: .25rem .5rem .15rem;*/
    /*}*/
    /*.coursePlayDetalisNotice{*/
    /*    padding-bottom: .3rem;*/
    /*}*/
    /*.coursePlayDetalisNoticeMes{*/
    /*    margin-top: .25rem;*/
    /*}*/
    /*.coursePlayDetalisNoticeMes h3{*/
    /*    padding-left: .49rem;*/
    /*    font-size: .32rem;*/
    /*    line-height: .78rem;*/
    /*    color: #333;*/
    /*}*/
    /*.coursePlayDetalisNoticeMes p{*/
    /*    padding-left: 1.02rem;*/
    /*    line-height: .6rem;*/
    /*    font-size: .32rem;*/
    /*    color: #6c6d6f;*/
    /*}*/
    /*.coursePlayDetalisTeacherImg{*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    !*padding-top: .4rem;*!*/
    /*    padding-left: .24rem;*/
    /*    !*padding-right: .53rem;*!*/
    /*}*/
    /*.coursePlayDetalisTeacherName{*/
    /*    line-height: .6rem;*/
    /*    font-size: .36rem;*/
    /*    font-weight: 600;*/
    /*}*/
    /*.coursePlayDetalisTeacherLecturer{*/
    /*    line-height: .28rem;*/
    /*    font-size: .28rem;*/
    /*    color: #a1a2a4;*/
    /*}*/
    /*.coursePlayImgBox{*/
    /*    position: relative;*/
    /*    width: .85rem;*/
    /*    height: .85rem;*/
    /*}*/
    /*.coursePlayImgBox img:first-child{*/
    /*    width: .85rem;*/
    /*    height: .85rem;*/
    /*    display: block;*/
    /*}*/
    /*.coursePlayImgBox img:last-child{*/
    /*    position: absolute;*/
    /*    right:0;*/
    /*    bottom:0;*/
    /*    width: .28rem;*/
    /*    height: .28rem;*/
    /*    display: block;*/
    /*}*/
    /*.coursePlayDetalisTeacherLeft{*/
    /*    display: flex;*/
    /*    width: 80%;*/

    /*}*/
    /*.coursePlayDetalisTeacher{*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    padding-left: .66rem;*/
    /*    margin-top: .4rem;*/
    /*    padding-right: .54rem;*/
    /*    padding-bottom: .78rem;*/
    /*}*/
    /*.entryLogin{*/
    /*    line-height: .8rem;*/
    /*}*/
</style>