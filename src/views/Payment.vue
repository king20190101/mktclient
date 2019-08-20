<template>
    <div class="payment">
        <!--支付头部-->
        <van-nav-bar
                title="确认购买"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
                class="paymentHeader"
        />
        <!--支付中间-->
        <div class="paymentMain">
            <!--商品信息-->
            <div class="paymentBox">
                <van-cell-group >
                    <van-cell class="payShopDetailTit" title="商品信息"/>
                </van-cell-group>
                <div class="payShopProduct">
                    <div class="payShopProductLeft"><img src="../../public/img/index/index1.png" alt=""></div>
                    <div class="payShopProductRight">
                        <p>微信小程序入门微信小程序入门微信小程序入门微信小程序入门</p>
                        <span class="shopMoney moneySign ">366</span>
                    </div>
                </div>
            </div>
            <!--优惠券-->
            <div class="paymentBox">
                <!-- 优惠券单元格 -->
               <div class="paymentItem">
                    <div class="paymentQuan flex">
                        <van-coupon-cell
                                :coupons="coupons"
                                :chosen-coupon="chosenCoupon"
                                @click="showList = true"
                        />
                    </div>
               </div>
                <!-- 优惠券列表 -->
                <!--没有优惠券的时候-->
                <van-popup v-if="!coupon" class="showNo" v-model="showList" position="right">
                    <van-nav-bar
                            title="优惠券"
                            left-arrow
                            @click-left="displayNone"
                            class="paymentQuanHeader"

                    />
                    <div class="noQuanBox">
                        <img src="../../public/img/payment/noQuan.jpg" alt="">
                    </div>
                </van-popup>
                <!--有优惠券的时候-->
                <!-- 优惠券列表 -->
                <van-popup  v-else v-model="showList" position="right">
                    <van-coupon-list
                            :coupons="coupons"
                            :chosen-coupon="chosenCoupon"
                            :disabled-coupons="disabledCoupons"
                            @change="onChange"
                            @exchange="onExchange"
                    />
                </van-popup>
            </div>
            <!--商品金额-->
            <div class="paymentBox">
                <div class="paymentMoney flex">
                    <div class="paymentMoneyLeft flex">
                        <p>商品金额</p>
                    </div>
                    <div class="paymentMoneyRight moneySign">366</div>
                </div>
                <div class="paymentMoney flex">
                    <div class="paymentMoneyLeft flex">
                        <p>余额抵扣</p>
                        <van-tag color="red">充值</van-tag>
                    </div>
                    <div class="paymentMoneyRight flex">
                        <span class="decMoneySign">1.24</span>
                        <van-checkbox v-model="checked1" checked-color="#07c160"></van-checkbox>
                    </div>
                </div>
            </div>
            <!--支付方式-->
            <div class="paymentBox">
                <van-panel title="支付方式">
                    <!--支付宝-->
                    <div class="paymentMethods flex">
                        <div class="paymentMethodsListLeft">
                            <img src="../../public/img/pay-zhifubao.png" alt="">
                            <span>支付宝</span>
                        </div>
                        <!--引入的按鈕-->
                        <van-radio-group v-model="radio">
                            <van-radio name="1" checked-color="#07c160"></van-radio>
                        </van-radio-group>
                    </div>
                    <!--微信支付-->
                    <div class="paymentMethods flex">
                        <div class="paymentMethodsListLeft">
                            <img src="../../public/img/pay-weixin.png" alt="">
                            <span>微信支付</span>
                        </div>
                        <!--引入的按鈕-->
                        <van-radio-group v-model="radio">
                            <van-radio name="2" checked-color="#07c160"></van-radio>
                        </van-radio-group>
                    </div>
                    <!--花呗分期-->
                    <div class="paymentMethods flex">
                        <div class="paymentMethodsListLeft">
                            <img src="../../public/img/pay-huabei.png" alt="">
                            <span>花呗分期</span>
                        </div>
                        <!--花呗的弹出层-->
                        <div class="flex" style="align-items: center">
                            <div class="paymentFenqiMoney">{{fQ}}</div>
                            <van-radio name="3"
                                       v-model="radio"
                                       checked-color="#07c160"
                                       type="primary"
                                       @click="showHuaBei"
                                       class="huabeiBtn"
                            ></van-radio>
                        </div>

                        <!--当金额超过140的时候，支持花呗分期-->
                        <van-popup
                                class="huabeiBox"
                                v-model="showHuabei"
                                position="bottom"
                        >
                            <!--能分期则动态填充的数据-->
                            <div class="payHuaBeiChoose">请选择</div>
                            <div class="payFenQiList">
                                <ul class="payFenQiListLeft">
                                    <li><span>{{money}}</span><span>元</span></li>
                                    <li>花呗支付</li>
                                </ul>
                                <div>
                                    <van-radio name="5"
                                               v-model="radio"
                                               checked-color="#07c160"
                                               @click="chooseFenqi"
                                    ></van-radio>
                                </div>
                            </div>
                            <!--花呗分期-->
                            <div class="payFenQiList"
                                 v-for="(item,index) in fenqiMoney"
                                 :key = "index"
                            >
                                <ul class="payFenQiListLeft">
                                    <li>{{item.money}}元*{{item.fenqiTime}}期</li>
                                    <li>手续费{{item.fenqiLixi}}元/期</li>
                                </ul>
                                <div>
                                    <van-radio
                                            :name="item.n"
                                            v-model="radio"
                                            checked-color="#07c160"
                                            @click="chooseFenqi(index)"
                                    ></van-radio>
                                </div>
                            </div>
                        </van-popup>
                        <!--当商品金额小于140时，删除dom-->
<!--                        <van-popup v-else></van-popup>-->
                    </div>
                    <div class="paymentMethods flex">
                        <div class="paymentMethodsListLeft">
                            <img src="../../public/img/pay-huabei.png" alt="">
                            <span>京东支付</span>
                        </div>
                        <!--引入的按鈕-->
                        <van-radio-group v-model="radio">
                            <van-radio name="4" checked-color="#07c160"></van-radio>
                        </van-radio-group>
                    </div>
                </van-panel>
            </div>
        </div>
        <!--支付按钮-->
        <mk-payment-footer
                :money="money"
                :totalMoney = "totalMoney"
                @cClick = "submitBtn"
        />
    </div>
</template>

<script>
    import $ from "jquery"
    import Practical from '../components/common/Practical'
    import paymentFooter from '../components/payment/paymentFooter'
    const coupon = {
        available: 0,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1563163258,
        endAt: 1563163258,
        valueDesc: '2.5',
        unitDesc: '元'
    };
    export default {
        name: "Pay",
        components:{
            Practical,
            "mk-payment-footer":paymentFooter
        },
        data() {
            return {
                checked1: false,//优惠券的复选按钮
                chosenCoupon: -1,//优惠券的选中状态
                coupons: [],//优惠券的信息
                coupon:true,//是否存在优惠券
                disabledCoupons: [coupon],//失效的优惠券
                /*优惠券的时候*/
                showList:false,

                /*花呗*/
                showHuabei: false,
                /*radio*/
                radio:1,
                /*商品金额*/
                money:336,
                /*分期金额*/
                fenqiMoney:[
                    {
                        money:124.80,
                        fenqiTime:3,
                        fenqiLixi:2.8,
                        n:6
                    },
                    {
                        money:63.74,
                        fenqiTime:6,
                        fenqiLixi:2.74,
                        n:7
                    },
                    {
                        money:32.78,
                        fenqiTime:12,
                        fenqiLixi:2.28,
                        n:8
                    }
                ],
                /*fQ*/
                fQ:"",
                totalmoney:0,
                /*登录状态*/
                state:1
            }
        },
        mounted(){
            this.quanNum()
            // this.HuaBeiIsShow()
        },
        methods: {
            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;

            },
            onExchange(code) {
                this.coupons.push(coupon);
            },
            /**/
            showPopup() {
                this.showList = true;
            },
            /*点击支付页面让页面后退*/
            onClickLeft() {
                this.$router.go(-1)
            },
            /*点击花呗出现花呗分期的信息*/
            showHuaBei(){
                this.showHuabei= true
            },
            /*点击优惠券时让关闭优惠券页面*/
            displayNone(){
                this.showList = false
            },
            /*优惠券的计算*/
            quanNum(){
                // $(function(){
                //     if(!this.coupon){
                //         $(".van-cell__value>span").text("0张可用")
                //     }
                //     if(this.coupon){
                //         $(".van-cell__value>span").text("1张可用")
                //     }
                // })
            },
            /*当价格小于380的时候，按钮禁用,花呗分期不显示*/
            // HuaBeiIsShow(){
            //     $(function(){
            //         let shopMoney = $(".shopMoney").text();
            //        this.money = shopMoney
            //         console.log(this.money)
            //     })
            // },

            /*花呗分期金额确定之后，按花呗分期的金额结算*/
            chooseFenqi(index){
                return this.fQ = this.fenqiMoney[index].money+"元*"+this.fenqiMoney[index].fenqiTime+"期"
            },
            /*点击提交按钮的时候*/
            submitBtn(){
                if(this.state==0){
                    alert("购买成功")
                }else if(this.state==1){
                    alert("请先登录")
                    this.$router.replace("./login")
                }
            },
        },
        computed:{
            //这个方法就可以当做一个属性来用
            totalMoney(){
                //对原始数据进行计算后返回一个新的数据
                let decCount = $(".decMoneySign").text();
                var newMoney = this.money;
                console.log(newMoney)
                if(this.checked1==true){
                     newMoney= this.money-decCount;
                }
                return newMoney
            }
        },

    }
</script>

<style scoped>
        @import '../../src/assets/css/payment.css';
</style>