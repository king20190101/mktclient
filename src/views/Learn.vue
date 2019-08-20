<template>
    <div class="learn-box">
<!--    头部签到-->
        <div class="learnTop" v-show="flew">
            <div class="learnTop1">
                <div class="learnTopLeft">
                    <img src="../../public/img/learn/learn1.png" alt="">
                    <span id="edit">未登录</span>
                    <i class="iconfont icon-directionbottom"></i>
                </div>
                <span @click="sign" class="learnRight">签到</span>
            </div>


<!--        日期跳转-->
            <ul class="learnTop2">
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
                <li>日</li>
            </ul>

        </div >
        <div class="learnTop-no" v-show="!flew">
            <div>
                <img src="../../public/img/account/01.gif" alt="">
                <p>点击登录</p>
            </div>
        </div>
<!--        定位学习时间-->
        <div class="learnTime" v-show="flew">
            <div class="learnTime1">
                <b>2小时</b>
                <p>今日学习</p>
            </div>
            <i></i>
            <div class="learnTime1">
                <b>10</b>
                <p>经验增长</p>
            </div>
            <i></i>
            <div class="learnTime1">
                <b>950</b>
                <p>奋斗排名</p>
            </div>
        </div>
<!--        最近学习-->
        <LearnXuexi v-show="flew"></LearnXuexi>
        <div class="learnXuexi-no">
            <p>最近学习</p>
            <i class="fa fa-chevron-right"></i>
        </div>

        <div class="learnBgc"></div>
<!--        下载管理-->
        <div class="learnLoading">
            <p>下载管理</p>
            <i class="fa fa-chevron-right"></i>
        </div>
        <div class="learnBgc"></div>

<!--        个人中心-->
        <learn-personal v-show="flew"></learn-personal>
        <learn-personal class="learnPersonal-no" v-show="!flew"></learn-personal>
        <!--footer-->
        <mk-footer/>
    </div>


</template>


<script>

    import LearnXuexi from "../components/learn/learnXueXi"
    import LearnPersonal from "../components/learn/LearnPersonal"
    import Footer from "../components/common/Footer"



    export default {
        components:{
            LearnXuexi,
            LearnPersonal,
            "mk-footer":Footer
        },
        methods:{
          sign:function (event) {
             //alert('确认签到'+ '!');
              var d=new Date();
              var num=d.getDay();
              var arr=document.querySelector(".learnTop2").children;
              arr[num-1].style.backgroundColor="#36c6ab";
              var  s=document.querySelector(".learnRight");
              //s.style.backgroundColor="red";
              s.innerText="已签到";
          },
          getweek(){
              var d=new Date();
              var num=d.getDay();
              var arr=document.querySelector(".learnTop2").children;
              arr[num-1].style.backgroundColor="red";
          }
        },
        mounted(){
            this.getweek()
        },
        mounted() {
            //console.log(1111);
            var edit = document.getElementById("edit");
            edit.onblur = function() {
                localStorage.getItem("username");
            };
            if (localStorage.getItem("username")) {
                edit.innerHTML = localStorage.getItem("username");
            }
        },


        data(){
            return{
                "top2data":[
                    {"id":"yi"},
                    {"img":"lifan-images/images/2.png", "id":"关于TS的前世今生一篇打尽"}
                ],
                flew:true
            }
        }

    }
</script>

<style scoped>
    /* @import "../../src/assets/css/learn.css"; */
</style>