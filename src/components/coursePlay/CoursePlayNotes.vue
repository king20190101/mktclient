<template>
    <!--    <h1>我是问答</h1>-->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div style="padding-top: 5.2rem" v-if="isLogin">
        <div class="coursePlayDetalisTeacher"
             v-for="(item,index) in UserNoteContent"
             :key="index">
            <div class="coursePlayDetalisTeacherLeft">
                <div class="coursePlayImgBox">
                    <img :src="item.userImg" alt="">
                </div>
                <div class="coursePlayDetalisTeacherImg">
                    <span class="coursePlayDetalisTeacherName">{{item.userName}}</span>
                    <!--                    <span class="coursePlayDetalisTeacherLecturer">21小时之前</span>-->
                    <div class="coursePlayDetalisContentTxt">
                        <p>{{item.noteTxt}}</p>
                    </div>
                    <div class="FabulousMes">
                        <span>{{item.fabulous}}<span>赞</span></span>&nbsp;&nbsp;.&nbsp;&nbsp;<span>{{item.adopt}}<span>采集</span></span>
                    </div>
                </div>
            </div>
            <div class="coursePlayDetalisFabulous pdt_2">
                <!--                <span>0</span>-->
                <!--                <i>赞</i>-->
                <span>{{item.noteTime}}<span>小时之前</span></span>
            </div>
        </div>
        <!--        <div class="QaLine"></div>-->
        <!--        <div class="noData">没有更多数据了</div>-->
        <div class="courseZero">
            <img src="img/wt_img/zero.jpg" alt="">
            <span>暂无笔记</span>
        </div>

    </div>
    </van-pull-refresh>
</template>

<script>
    export default {
        name: "CoursePlayDetalis",
        props:["UserNoteContent"],
        data(){
            return{
                userName:'',
                isLogin:true,
                isLoading:false
            }
        },
        created(){
            this.userName = localStorage.getItem('username')
        },
        methods:{
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    // this.count++;
                    // this.onload()
                }, 500);
            },

        }
        // created(){
        //     this.username=localStorage.getItem('username');
        // },
        // methods:{
        //     logOut(){
        //         localStorage.removeItem('username');
        //         this.$router.push("/");
        //     }
        // }
    }
</script>

<style scoped>
    /*180 250 60*/
    /*    .courseZero{*/
    /*        padding-top: 1.8rem;*/
    /*        padding-bottom: .6rem;*/
    /*        display: flex;*/
    /*        flex-direction: column;*/
    /*    }*/
    /*    .courseZero img{*/
    /*        width: 2.5rem;*/
    /*        height: 2.5rem;*/
    /*        display: flex;*/
    /*        margin: auto;*/
    /*    }*/
    /*    .courseZero span{*/
    /*        font-weight: 500;*/
    /*        font-size:.36rem;*/
    /*    }*/
    /*    .coursePlayDetalisTeacherImg{*/
    /*        display: flex;*/
    /*        flex-direction: column;*/
    /*        padding-left: .24rem;*/
    /*    }*/
    /*    .coursePlayDetalisTeacherName{*/
    /*        color: #616161;*/
    /*        line-height: .6rem;*/
    /*        font-size: .25rem;*/
    /*        font-weight: 600;*/
    /*    }*/
    /*    .coursePlayDetalisTeacherLecturer{*/
    /*        line-height: .28rem;*/
    /*        font-size: .28rem;*/
    /*        color: #aeacaf;*/
    /*    }*/
    /*    .coursePlayImgBox{*/
    /*        position: relative;*/
    /*        width: .85rem;*/
    /*        height: .85rem;*/
    /*    }*/
    /*    .coursePlayImgBox img:first-child{*/
    /*        width: .85rem;*/
    /*        height: .85rem;*/
    /*        display: block;*/
    /*    }*/
    /*    .coursePlayDetalisTeacherLeft{*/
    /*        display: flex;*/
    /*        width: 80%;*/
    /*    }*/
    /*    .coursePlayDetalisTeacher{*/
    /*        display: flex;*/
    /*        justify-content: space-between;*/
    /*        padding-left: .48rem;*/
    /*        margin-top: .4rem;*/
    /*        padding-right: .48rem;*/
    /*        text-align: left;*/
    /*        padding-bottom: .22rem;*/

    /*    }*/
    /*    .coursePlayDetalisContentTxt{*/
    /*        width: 100%;*/
    /*    }*/
    /*    .coursePlayDetalisContentTxt p{*/
    /*        width: 100%;*/
    /*        padding-right: .1rem;*/
    /*        font-size: .28rem;*/
    /*        text-align: left;*/
    /*        line-height:.55rem;*/
    /*        color: #333;*/
    /*    }*/
    /*    .coursePlayDetalisFabulous{*/
    /*        color: #babebf;*/
    /*     }*/
    /*    .FabulousMes{*/
    /*        color: #babebf;*/
    /*    }*/
    /*    .QaLine{*/
    /*        margin:0 .48rem ;*/
    /*        border-bottom:1px solid #f7f7f7;*/
    /*    }*/
    /*    .noData{*/
    /*        color:#babebf;*/
    /*        font-size: .26rem;*/
    /*        padding-top: .3rem;*/
    /*    }*/
    /*    .pdt_2{*/
    /*        padding-top: .2rem;*/
    /*    }*/
</style>