<template>
    <div class="WriteNoteBox">
        <div class="WriteNote_header">
            <span @click="isShowNote">×</span>
            <span>下载视频</span>
        </div>
<!--        <Course-play-chapter-li :coursePlayTxt="coursePlayTxt"></Course-play-chapter-li>-->
        <div style="overflow: auto;height: 85%">
            <div class="coursePlayChapter">
                <ul class="coursePlayChapterList">
                    <li class="coursePlayChapterLi" v-for="(item,index) in coursePlayTxt" :key="index" >
                    <div class="coursePlayChapterTitBox">
                        <p class="coursePlayChapterTit grayTit">{{item.Chapter}}</p>
                    </div>
                    <div class="coursePlayChapterContent">
                        <ul class="coursePlaySummaryList">
                            <van-checkbox-group v-model="result">
                                <li class="coursePlaySummaryLi" v-for="(item1,index) in item.summary"
                                    :key="index"
                                     >
    <!--                                @click="handle(item1.flags,item1.src)"-->
    <!--                                :class="item1.flags===active?'activeRed':''"-->
                                    <div class="coursePlaySummaryLiLeft">
    <!--                                    <i :class="item.iconFont"></i>-->
                                        <van-checkbox @click="yesOrNo(item1.flags)" class="checkedBox" :name="item1.flags" v-model="checked" checked-color="#07c160">{{item1.summaryTit}}</van-checkbox>
    <!--                                    <span class='checkedBox'>{{item1.summaryTit}}</span>-->
                                    </div>
                                    <span class="grayTit">{{item1.summaryFlow}}</span>
    <!--                                <span>{{summeryFlow}}</span>-->
                                </li>
                            </van-checkbox-group>
                        </ul>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        <div class="coursePlayDownloadFooter" >
            <span @click="allChecked" v-if="isAll">全选</span>
            <span @click="allNoChecked" v-else>取消全选</span>
            <span>确认下载</span>
        </div>
    </div>
</template>

<script>
    // import CoursePlayChapterLi from './CoursePlayChapterLi'
    import Vue from 'vue'
    import { Checkbox, CheckboxGroup } from 'vant';

    Vue.use(Checkbox).use(CheckboxGroup);
    export default {
        name: "CoursePlayDownLoad",
        props:[
            'coursePlayTxt'
        ],
        data(){
            return{
                checked: false,
                showNode3:false,
                result:[],
                isAll:true,
                count:0,
                arr:[]
            }
        },

        methods:{
            yesOrNo(data){
                console.log(data)

            },
            isShowNote(){
                this.$emit("isShowNote3",this.showNode3)
                console.log([this.showNode3,this.show])
            },
            allChecked(){
                let num = document.getElementsByClassName("checkedBox").length;
                let arr = [];
                for(var i=0;i<num;i++){
                    arr.push(i)
                }
                this.result = arr;
                this.isAll = false;
                console.log(this.result)
                console.log(typeof this.result)
                this.count = 0
                //全不选
            },
            allNoChecked(){
                //全不选

                this.result = [];
                this.isAll = true;
                this.count = 0
                // console.log(this.checked);
            },

        },
        // computed:{
        //     summeryFlow:function(){
        //
        //     }
        // }
    }
</script>

<style scoped>
/*    .coursePlayDownloadFooter{*/
/*        height: 7.5%;*/
/*        display: flex;*/
/*        justify-content: space-around;*/
/*        align-items: center;*/
/*    }*/
/*    .coursePlayDownloadFooter span{*/
/*        width: 50%;*/
/*    }*/
/*    .grayTit{*/
/*        color: #aeacaf;*/
/*    }*/
/*    .WriteNote_content_txt{*/
/*        background: #21cd85;*/
/*        width: 94.5%;*/
/*        height: 5rem;*/
/*        font-size: .36rem;*/
/*        !*line-height: .38rem;*!*/
/*        padding: 0 .2rem;*/
/*    }*/
/*    .WriteNoteBox{*/
/*        position: fixed;*/
/*        top: 0;*/
/*        left: 0;*/
/*        bottom: 0;*/
/*        right: 0;*/
/*        background: white;*/
/*        z-index: 2200;*/
/*    }*/
/*    .WriteNote_header{*/
/*        display: flex;*/
/*        justify-content: center;*/
/*        align-items: center;*/
/*        position: relative;*/
/*        width: 100%;*/
/*        height: 1rem;*/
/*    }*/
/*    .WriteNote_header span:first-child{*/
/*        font-size: .45rem;*/
/*        font-weight: 600;*/
/*        position: absolute;*/
/*        left: .3rem;*/
/*        top: .2rem;*/
/*    }*/
/*    .WriteNote_header span:last-child{*/
/*        font-size: .36rem;*/
/*        font-weight: 600;*/
/*    }*/
/*!*    *!*/
/*    .coursePlayChapter{*/
/*        text-align: left;*/
/*        overflow-y: scroll;*/
/*    }*/
/*    .coursePlayChapterTitBox{*/
/*        height: 1.05rem;*/
/*        padding-left: .3rem;*/
/*        color: #57585a;*/
/*        font-size: .32rem;*/
/*        line-height: 1.05rem;*/
/*    }*/
/*    .coursePlaySummaryLi{*/
/*        width: 100%;*/
/*        height: 1.05rem;*/
/*        padding-left: .5rem;*/
/*        padding-right: .32rem;*/
/*        color: #57585a;*/
/*        font-size: .32rem;*/
/*        line-height: 1.05rem;*/
/*        display: flex;*/
/*        justify-content:space-between;*/
/*        align-item:center;*/
/*    }*/
/*    !*.coursePlaySummaryLi{*/
/*        color: #f50f1f;*/
/*    }*!*/
/*    .coursePlaySummaryLiLeft{*/
/*        display: flex;*/
/*        margin: auto 0;*/
/*    }*/

/*    .coursePlaySummaryLiLeft i{*/
/*        margin-right: .2rem;*/
/*    }*/
/*    .activeRed{*/
/*        color: #f50f1f!important;*/
/*    }*/
</style>