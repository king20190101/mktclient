<template>
    <div>
        <!--header部分-->
        <mk-index-header/>
<!--     下拉刷新-->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <!--中间部分-->
        <div class="indexMain">
            <!--banner部分-->
            <mk-index-banner/>
            <!--nav部分-->
            <mk-index-nav v-if="kecheng" :kecheng="kecheng"/>
            <!--就业班部分-->
            <mk-index-jobs/>
            <!--慕课大专栏-->
            <div class="indexItem">
                <div class="indexItemTit">
                    <h3>慕课专栏</h3>
                    <span>6个月，起步成为工程师</span>
                </div>
                <div class="indexItemCon">
                    <mk-index-column v-if="zhuanlan" :zhuanlandata="zhuanlan"/>
                </div>
                <div class="indexItemBot">
                    <div class="indexItemB"><span>查看更多</span><span><></span></div>
                    <div class="indexItemB"><span>换一换</span><span><></span></div>
                </div>
            </div>
            <!--实战推荐 -->
            <div class="indexItem">
                <div class="indexItemTit">
                    <h3>实战推荐</h3>
                    <span>6个月，起步成为工程师</span>
                </div>
                <div class="indexItemCon">
                    <mk-index-practical class="indexItemP"
                                      v-if="shizhan" :data="shizhan" />
                </div>
                <div class="indexItemBot">
                    <div class="indexItemB"><span>查看更多</span><span><></span></div>
                    <div class="indexItemB" ><span>换一换</span><span><></span></div>
                </div>
            </div>
            <!--专题推荐-->
            <div class="indexItem">
                <div class="indexItemTit">
                    <h3>专题推荐</h3>
                    <span>6个月，起步成为工程师</span>
                </div>
                <div class="indexItemCon">
                    <mk-index-topic/>
                </div>
                <div class="indexItemBot">
                    <div class="indexItemB"><span>查看更多</span><span><></span></div>
                    <div class="indexItemB"><span>换一换</span><span><></span></div>
                </div>
            </div>
            <!--新上好客-->
            <div class="indexItem">
                <div class="indexItemTit">
                    <h3>新上好客</h3>
                    <span>6个月，起步成为工程师</span>
                </div>
                <div class="indexItemCon">
                    <mk-index-paracticals class="indexItemPs"
                                        v-if="haoke" :data="newList" />
                </div>
                <div class="indexItemBot">
                    <div class="indexItemB"><span>查看更多</span><span><></span></div>
                    <div class="indexItemB" @click="replace"><span>换一换</span><span><></span></div>
                </div>
            </div>
            <!--免费精选-->
            <div class="indexItem">
                <div class="indexItemTit">
                    <h3>免费精选</h3>
                    <span>6个月，起步成为工程师</span>
                </div>
                <div class="indexItemCon">
                    <mk-index-free v-if="free" :data="free" />
                </div>
                <div class="indexItemBot">
                    <div class="indexItemB search-more" @click = "Change"><span>查看更多</span><span><></span></div>
                    <div class="indexItemB"><span>换一换</span><span><></span></div>
                </div>
            </div>
            <!--猜你喜欢-->
            <div class="indexItem" >
                <div class="indexItemTit">
                    <h3>猜你喜欢</h3>
                    <span>6个月，起步成为工程师</span>
                </div>
                <div class="indexItemCon">
                    <mk-index-practical class="indexItemP"
                                          v-if="practs" :data="practs"/>
                </div>
                <div class="indexItemBot">
                    <div  class="indexItemB "><span>查看更多</span><span><></span></div>
                    <div class="indexItemB"><span>换一换</span><span><></span></div>
                </div>
            </div>
            <!--bottom-->
            <div class="indexFootTop">
                <p>—— 编制梦想 · 程就未来 ——</p>
            </div>
        </div>
        <!--footer-->
        <mk-footer/>
        </van-pull-refresh>
    </div>
</template>

<script>
    import Vue from 'vue'
    import 'vant/lib/button/style';
    import { Lazyload } from 'vant';
    // options 为可选参数，无则不传
    Vue.use(Lazyload);
    import Header from '../../src/components/index/Header'
    import Banner from '../../src/components/index/Banner'
    import Nav from '../components/index/Nav'
    import Jobs from '../../src/components/index/Jobs'
    import Practical from "../components/common/Practical"
    import Topic from '../../src/components/index/Topic'
    import Free from '../../src/components/index/Free'
    import Column from '../components/index/Column'
    import Footer from "../components/common/Footer"
    import Paracticals from '../components/common/Paracticals'
    export default {
        name: "index",
        components:{
            "mk-index-header":Header,
            "mk-index-banner":Banner,
            "mk-index-nav":Nav,
            "mk-index-jobs":Jobs,
            "mk-index-column":Column,
            "mk-index-practical":Practical,
            "mk-index-topic":Topic,
            "mk-index-free":Free,
            "mk-footer":Footer,
            "mk-index-paracticals":Paracticals,
        },
        data(){
            return{

                haoke: [],
                //处理后的list
                newList: [],
                //截取第几组的开始参数
                timeStart: 0,
                //截取第几组的结束参数
                timeEnd: 1,
                //默认为0组
                group: 0,
                //一页展示list数量
                num: 3,
                //点击的次数
                clickNum: 0,
                isLoading:false,
                practs:{},   //得到猜你喜欢栏目数据
                free:{} ,  //得到免费精选栏目的数据
                shizhan:{},   // 得到实战推荐的数据


                zhuanlan:{},    //得到慕课专栏的数据
                kecheng:{}    //得到五个分类课程的数据
            }
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
            replace() {
                if (this.haoke.length > 3 && this.haoke.length > this.num) {
                    //点击的时候获取分为几组
                    this.listlen();
                    //每点击一次记录点击次数
                    this.autoIncre();
                    this.clear();
                    this.renderR();
                }
            },
            // 计算数据的长度，共分为几组，如果不能整除则加1
                listlen() {
                var len = this.haoke.length;
                this.group = len / this.num;
                if (len % this.num != 0) {
                    this.group = parseInt(this.group) + 1;
                }
            },
            //计算将点击次数和开始截取的参数清空, 如果点击此时大于当前数据的组数，则重新开始计数。
            clear() {
                if (this.clickNum > this.group - 1) {
                    this.timeStart = 0;
                    this.timeEnd = 1;
                    this.clickNum = 0;
                }
            },
            //每点击一次，记录次数
            autoIncre() {
                this.clickNum++;
                this.timeStart++;
                this.timeEnd++;
            },
            //截取当前每组的数据
            renderR() {
                this.newList = this.haoke.slice(
                    this.num * this.timeStart,
                    this.num * this.timeEnd
                );
               // console.log(this.newList);

        },

            Change(){
             $(".search-more").css({"display":'none'})
            }
        },

        created() {
            fetch("http://localhost:3000/cart/api/test").then(res => {
                res.json().then(data => {
                    this.practs = data.practs
                    this.free = data.free
                    this.shizhan = data.shizhan
                    this.haoke = data.haoke
                    this.zhuanlan = data.zhuanlan
                    this.kecheng = data.kecheng

                    this.renderR()
                })
            })
        }

    }
</script>

<style scoped>
    /* @import '../assets/css/index.css'; */
</style>