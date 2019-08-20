<template>
    <div style="overflow:auto;z-index: 99;" >
        <div class="courseHead">
            <div class="coursePlayPlayer">
                <div class="coursePlayHeader">
                    <i class="fa fa-chevron-left coursePlayBack"
                    style="font-size:0.4rem;color:#fff"
                     @click="goBack"></i>
                    <!-- 返回上一页 -->
                    <i class="coursePlayChange fa fa-list-ul"
                    style="font-size:0.4rem;color:#fff"
                    ></i>
                    <!-- 点击切换线路按钮出现弹出层 -->
                </div>
                <video :src="video" width="100%" height="100%" controls="" autoplay="" name="media"  >
<!--                    <source type="video/mp4" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4">-->
                </video>
<!--                <div class="coursePlayPlayBtn"><i class="fa fa-play-circle "></i></div>-->
                <p class="coursePlayTit">正在使用手机流量 当前视频<span v-for="i in flow">{{i}}</span>MB</p>
            </div>
            <!-- 播放页nav -->
            <div class="coursePlayNav">
                <ul class="coursePlayNavList">

                    <li class="coursePlayNavLi" v-if="courseNavList" v-for="(item,index) in courseNavList"
                        :key="index"
                        @click="handle(index)"
                        :class="{'activeRed':flag===index}"
                        >{{item.title}}</li>
                </ul>
            </div>
        </div>
<!--        <video-player></video-player>-->
        <keep-alive>
            <component :UserNoteContent="UserNoteContent" :courseMsg="courseMsg" :coursePlayTxt="coursePlayTxt" :is="pageForm" v-on:goData="showMsg"></component>
        </keep-alive>
        <div class="CoursePlayMore" v-show="tip" @click="showPopup"><span>+</span></div>
<!--        <van-button type="primary" @click="showPopup">-->
<!--            展示弹出层-->
<!--        </van-button>-->
<!--        :close-on-click-overlay="false"-->
        <span class="closePopup" v-show="!tip" @click="closePopup">×</span>
        <van-popup @click="closePopup" class="moreTools" v-model="show" :overlay="false"  position="bottom" :style="{ height: '68.5%' }">
            <div>
                <div @click="isShowNote" class="course_color_one">
                    <i class="fa fa-pencil-square-o"></i>
                </div>
                <span>记笔记</span>
            </div>
            <div>
                <div @click="isShowNote1" class="course_color_two">
                    <i class="fa fa-question-circle"></i>
                </div>
                <span>提问</span>
            </div>
            <div>
                <div @click="isShowNote2" class="course_color_three">
                    <i class="fa fa-commenting"></i>
                </div>
                <span>评论</span>
            </div>
            <div>
                <div @click="isShowNote3" class="course_color_four">
                    <i class="fa fa-download"></i>
                </div>
                <span>下载</span>
            </div>
            <div>
<!--                <div @click="showPopup" class="course_color_five">-->
                <div @click="isShowNote4" class="course_color_five">
                    <i class="fa fa-share"></i>
                </div>
                <span>分享</span>
            </div>
            <div>
                <div @click="isShowNote5" class="course_color_six">
                    <i class="fa fa-table"></i>
                </div>
                <span>定制课表</span>
            </div>
        </van-popup>
        <Course-play-write-note :sid="sid" @isShowNote="isShowNotes" v-show="showNode"></Course-play-write-note>
        <Course-play-question @isShowNote1="isShowNotes1" v-show="showNode1"></Course-play-question>
        <Course-play-more-comment @isShowNote2="isShowNotes2" v-show="showNode2"></Course-play-more-comment>
        <CoursePlayDownLoad :coursePlayTxt="coursePlayTxt" @isShowNote3="isShowNotes3" v-show="showNode3"></CoursePlayDownLoad>
        <CoursePlayShare  @isShowNote4="isShowNotes4" v-show="showNode4"></CoursePlayShare>
        <CoursePlayTable :courseMsg="courseMsg" :coursePlayTxt="coursePlayTxt" @isShowNote5="isShowNotes5" v-show="showNode5"></CoursePlayTable>
    </div>
</template>

<script>
    import CoursePlayChapterLi from '../components/coursePlay/CoursePlayChapterLi'
    import CoursePlayDetalis from '../components/coursePlay/CoursePlayDetalis'
    import CoursePlayQA from '../components/coursePlay/CoursePlayQA'
    import CoursePlayNotes from '../components/coursePlay/CoursePlayNotes'
    import CoursePlayComments from '../components/coursePlay/CoursePlayComments'

    import CoursePlayWriteNote from '../components/coursePlay/CoursePlayWriteNote'
    import CoursePlayQuestion from '../components/coursePlay/CoursePlayQuestion'
    import CoursePlayMoreComment from '../components/coursePlay/CoursePlayMoreComment'
    import CoursePlayShare from '../components/coursePlay/CoursePlayShare';
    import CoursePlayTable from "../components/coursePlay/CoursePlayTable";
    import CoursePlayDownLoad from "../components/coursePlay/CoursePlayDownLoad"

    import Vue from 'vue'
    import { Popup } from 'vant';
    Vue.use(Popup);


    export default {

        name: "coursePlay",
        data(){
            return {
                showNode:false,
                showNode1:false,
                showNode2:false,
                showNode3:false,
                showNode4:false,
                showNode5:false,
                tip:true,
                show: false,
                flag: 0,
                courseNavList: [
                    {
                        title: "章节",
                        name: "chapter"
                    },
                    {
                        title: "详情",
                        name: "detalis",
                    },
                    {
                        title: "评论",
                        name: "comments",
                    },
                    {
                        title: "问答",
                        name: "qa",
                    },
                    {
                        title: "笔记",
                        name: "notes",
                    },
                ],
                pageForm: "CoursePlayChapterLi",
                video:"",
                flow:"38.9",
                courseMsg:[],
                coursePlayTxt:[],
                UserNoteContent:[],
                userInfo:{},
                sid:{},

            }
        },
        created(){
                 let {id}=this.$route.query;
                    this.sid=id
                // console.log(this.sid)

            fetch('http://localhost:3000/cart/api/course').then(response => response.json())//解析为可读数据
            .then(data => {
                let datas = data.coursemain[this.sid]
            //console.log(data.coursemain[this.sid]),
           // this.pageForm = data.coursemain[this.sid].video,
                this.video = datas.video
                //console.log(this.video)
                this.courseMsg = datas.courseMsg,
                this.coursePlayTxt=datas.coursePlayTxt,
                    //console.log(datas.coursePlayTxt)
                this.UserNoteContent=datas.UserNoteContent
                // this.UserNoteContent=datas.UserNoteContent
            })//执行结果是 resolve就调用then方法
            .catch(err => console.log("Oh, error", err))//执行结果是 reject就调用catch方法srccourseMsg
            
           
            },
        methods:{
            isShowNotes(data){
                this.showNode = data
            },
            isShowNotes1(data){
                this.showNode1 = data
            },
            isShowNotes2(data){
                this.showNode2 = data
            },
            isShowNotes3(data){
                this.showNode3 = data
            },
            isShowNotes4(data){
                this.showNode4 = data
            },
            isShowNotes5(data){
                this.showNode5 = data
            },
            isShowNote(){
                //组件
                this.showNode = true;
                //底部模态
                this.show = false;
                //触发按钮
                this.tip = true
            },
            isShowNote1(){
                //组件
                this.showNode1 = true;
                //底部模态
                this.show = false;
                //触发按钮
                this.tip = true
            },
            isShowNote2(){
                //组件
                this.showNode2 = true;
                //底部模态
                this.show = false;
                //触发按钮
                this.tip = true
            },
            isShowNote3(){
                //组件
                this.showNode3 = true;
                //底部模态
                this.show = false;
                //触发按钮
                this.tip = true
            },
            isShowNote4(){
                //组件
                this.showNode4 = true;
                //底部模态
                this.show = false;
                //触发按钮
                this.tip = true
            },
            isShowNote5(){
                //组件
                this.showNode5 = true;
                //底部模态
                this.show = false;
                //触发按钮
                this.tip = true
            },
            showPopup() {
                this.show = true;
                this.tip = false
            },
            closePopup(){
                this.tip=true;
                this.show=false
            },
            showMsg(data){
                //console.log(data)
                this.video = data[0];
                // console.log("11"+this.src)
                this.flow = data[1]
            },
            goBack(){
              this.$router.go(-1);
            },
            handle(index){
                this.flag = index
                switch(index){
                    case 0:
                        this.pageForm="CoursePlayChapterLi";
                        break;
                    case 1:
                        this.pageForm="CoursePlayDetalis";
                        break;
                    case 2:
                        this.pageForm="CoursePlayComments";
                        break;
                    case 3:
                        this.pageForm="CoursePlayQA";
                        break;
                    case 4:
                        this.pageForm="CoursePlayNotes";
                        break;
                }
            },

        },

        components:{
            "CoursePlayChapterLi":CoursePlayChapterLi,
            "CoursePlayComments":CoursePlayComments,
            "CoursePlayQA":CoursePlayQA,
            "CoursePlayNotes":CoursePlayNotes,
            "CoursePlayDetalis":CoursePlayDetalis,
            "CoursePlayWriteNote":CoursePlayWriteNote,
            "CoursePlayQuestion":CoursePlayQuestion,
            "CoursePlayMoreComment":CoursePlayMoreComment,
            "CoursePlayShare":CoursePlayShare,
            "CoursePlayTable":CoursePlayTable,
            "CoursePlayDownLoad":CoursePlayDownLoad,
        },
    }
</script>

<style scoped>
    
</style>