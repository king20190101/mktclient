<template>
    <div class="coursePlayChapter" style="padding-top: 5.2rem">
        <ul class="coursePlayChapterList">
            <li class="coursePlayChapterLi" v-for="(item,index) in coursePlayTxt" :key="index" >
                <div class="coursePlayChapterTitBox">
                    <p class="coursePlayChapterTit">{{item.Chapter}}</p>
                </div>
                <div class="coursePlayChapterContent">
                    <ul class="coursePlaySummaryList">

                        <li class="coursePlaySummaryLi" v-for="(item1,index) in item.summary"
                            :key="index"
                            @click="handle(item1.flags,[item1.src,item1.summaryFlow])"
                            :class="item1.flags===active?'activeRed':''" >
                            <div class="coursePlaySummaryLiLeft">
<!--                                <i :class="item.iconFont"></i>-->
                                <i style="line-height: 100%" class="fa fa-play-circle-o"></i>
                                <span>{{item1.summaryTit}}</span>
                            </div>
                            <span>{{item1.summaryTime}}</span>
<!--                            <p class="coursePlayTit">正在使用手机流量 当前视频<span>{{item1.summaryFlow}}</span>MB</p>-->
                        </li>
                    </ul>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "coursePlayChapterLi",
        methods:{
          handle(data,msg){
              this.active = data;
              this.$emit("goData",msg)
              //console.log(msg)
          },
        },
        created(){
         // console.log(this.coursePlayTxt)
        },
        props:['coursePlayTxt'],
        data(){
          return{
              active:0,
              iconFont:"",
          }
        },
    }
</script>

<style scoped>
    /*.coursePlayChapter{*/
    /*    text-align: left;*/
    /*    overflow-y: scroll;*/
    /*}*/
    /*.coursePlayChapterTitBox{*/
    /*    height: 1.05rem;*/
    /*    padding-left: .3rem;*/
    /*    color: #57585a;*/
    /*    font-size: .32rem;*/
    /*    line-height: 1.05rem;*/
    /*}*/
    /*.coursePlaySummaryLi{*/
    /*    width: 100%;*/
    /*    height: 1.05rem;*/
    /*    padding-left: .5rem;*/
    /*    padding-right: .32rem;*/
    /*    color: #57585a;*/
    /*    font-size: .32rem;*/
    /*    line-height: 1.05rem;*/
    /*    display: flex;*/
    /*    justify-content:space-between;*/
    /*    align-item:center;*/
    /*}*/
    /*!*.coursePlaySummaryLi{*/
    /*    color: #f50f1f;*/
    /*}*!*/
    /*.coursePlaySummaryLiLeft i{*/
    /*    margin-right: .2rem;*/
    /*}*/
    /*.activeRed{*/
    /*    color: #f50f1f!important;*/
    /*}*/
</style>