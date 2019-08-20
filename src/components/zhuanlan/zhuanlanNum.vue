<template>
    <div>
        <div class="zhuanlanNum">
            <div class="zhuanlanbig" v-for="(item,index) in Num" :key="index">
                <div class="zhuanlanTop">
                    <div class="zhuanlanLeft">
                        <p class="zhuanlan-p-one">{{item.word[0]}}</p>
                        <p class="zhuanlan-p-two">{{item.word[1]}}</p>
                        <p class="zhuanlan-p-three">{{item.word[2]}}</p>
                        <div class="zhuanlan-num">
                            {{item.word[3]}} {{item.word[4]}} <span class="zhuanlan-back">{{item.word[5]}}</span>
                        </div>
                    </div>
                    <div class="zhuanlanRight">
                        <img :src="item.src" alt="">
                    </div>
                </div>
                <div class="zhuanlanBottom">
                    <span class="zhuanlanTop-one">{{item.word[6]}}</span>
                    <span class="zhuanlanTop-two">{{item.word[7]}} <span class="zhuanlanTop-three">{{item.word[8]}}</span></span>
                </div>
            </div>
        </div>
        <div class="zhuanlanfooter">
            一  书贵于精,不贵于多  一
        </div>
    </div>
</template>

<script>
export default {
    name:"zhuanlanNum",
    data(){
        return{
            // src:"./img/1.png"
            Num:[
                {
                    word:["零基础实现微信电商小程序开发",,"刘婕Jay · 首批微信开发从业者","50节 · 限时优惠 "," ￥49.90","￥68.00","小程序开发一线战地笔记","250人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan01.png"
                },
                {
                    word:["Linux命令行与Shell脚本编程大全",,"Oscar老师 · 10年Linux老司机","49节 · 限时优惠"," ￥49.90","￥68.00","程序员基础必修课","545人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan02.png"
                },
                {
                    word:["JavaScript 设计模式精讲",,"SHERlocked93 · 开源社区活跃贡献度","29节 · 限时优惠"," ￥36.00","￥48.00","以不变的设计应对常变框架","611人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan03.png"
                },
                {
                    word:["零基础实现微信电商小程序开发",,"刘婕Jay · 首批微信开发从业者","50节 · 限时优惠"," ￥49.90","￥68.00","小程序开发一线战地笔记","250人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan04.png"
                },
                {
                    word:["零基础实现微信电商小程序开发",,"刘婕Jay · 首批微信开发从业者","50节 · 限时优惠"," ￥49.90","￥68.00","小程序开发一线战地笔记","250人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan05.png"
                },
                {
                    word:["零基础实现微信电商小程序开发",,"刘婕Jay · 首批微信开发从业者","50节 · 限时优惠"," ￥49.90","￥68.00","小程序开发一线战地笔记","250人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan06.png"
                },
                {
                    word:["零基础实现微信电商小程序开发",,"刘婕Jay · 首批微信开发从业者","50节 · 限时优惠"," ￥49.90","￥68.00","小程序开发一线战地笔记","250人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan07.png"
                },
                 {
                    word:["零基础实现微信电商小程序开发",,"刘婕Jay · 首批微信开发从业者","50节 · 限时优惠"," ￥49.90","￥68.00","小程序开发一线战地笔记","250人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan08.png"
                },
                 {
                    word:["零基础实现微信电商小程序开发",,"刘婕Jay · 首批微信开发从业者","50节 · 限时优惠"," ￥49.90","￥68.00","小程序开发一线战地笔记","250人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan09.png"
                },
                 {
                    word:["零基础实现微信电商小程序开发",,"刘婕Jay · 首批微信开发从业者","50节 · 限时优惠"," ￥49.90","￥68.00","小程序开发一线战地笔记","250人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan10.png"
                },
                 {
                    word:["零基础实现微信电商小程序开发",,"刘婕Jay · 首批微信开发从业者","50节 · 限时优惠"," ￥49.90","￥68.00","小程序开发一线战地笔记","250人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan11.png"
                },

                 {
                    word:["零基础实现微信电商小程序开发",,"刘婕Jay · 首批微信开发从业者","50节 · 限时优惠"," ￥49.90","￥68.00","小程序开发一线战地笔记","250人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan12.png"
                },
                 {
                    word:["零基础实现微信电商小程序开发",,"刘婕Jay · 首批微信开发从业者","50节 · 限时优惠"," ￥49.90","￥68.00","小程序开发一线战地笔记","250人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan13.png"
                },
                 {
                    word:["零基础实现微信电商小程序开发",,"刘婕Jay · 首批微信开发从业者","50节 · 限时优惠"," ￥49.90","￥68.00","小程序开发一线战地笔记","250人订阅 · ","试读"],
                    src:"./img/zhuanlan/zhuanlan14.png"
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>