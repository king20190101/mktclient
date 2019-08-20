<template>
    <div class="zhuanlanInsidelist">
        <span class="zhuanlanInsidelistspan">专栏目录</span>
        <div class="zhuanlanInsidelistBox">
            <p>零基础实现微信电商小程序开发</p>
            <ul class="zhuanlanInsidelistbig">
                <li v-for="(item,index) in ZhuanlanInsideList">
                    <p>第{{index+1}}章 {{item.title}}</p>
                    <ul class="zhuanlanInsidelistsmall">
                        <li v-for="(s,ids) in item.listcontent">
                            <span>{{ids+1}}.{{s}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="zhuanlanInsidelistew">
            <div class="zhuanlanInsidelistewconent">
                <img src="../../../public/img/ew.png" alt="">
                <div class="zhuanlanInsidelistewconentright">
                    <p>零基础实现电商微信小程序开发</p>
                    <span>——慕课网出品——</span>
                </div>
            </div>
        </div>
        <div class="zhuanlanInsidelistbottom">
            <span>—— 造烛求明 · 读书求理 ——</span>
        </div>
    </div>

</template>

<script>
    export default {
        name: "zhuanlanInsideList",
        props: ["ZhuanlanInsideList"],

        // data(){
        //     return {
        //         ZhuanlanInsideList:[
        //             {
        //                 title: "开篇词",
        //                 "listcontent": [
        //                     "为什么学编程好难？",
        //                     "分类拆解法简介:助你马上起飞的编程论",
        //                     "专栏使用指南：他们都说一开始要重点"
        //                 ]
        //             },
        //             {
        //                 title: "小程序开发准备",
        //                 "listcontent": [
        //                     "开发环境准备：屠龙勇士的有把好武器",
        //                     "源代码：了解构造才能下笔如有神",
        //                     "解剖分类拆解法详解"
        //                 ]
        //             },
        //             {
        //                 title: "小程序开发基础",
        //                 "listcontent": [
        //                     "开发环境准备：屠龙勇士的有把好武器",
        //                     "源代码：了解构造才能下笔如有神",
        //                     "解剖分类拆解法详解"
        //                 ]
        //             },
        //             {
        //                 title: "实战商业项目-设计开发成长体系",
        //                 "listcontent": [
        //                     "为什么学编程好难？",
        //                     "分类拆解法简介:助你马上起飞的编程论",
        //                     "专栏使用指南：他们都说一开始要重点"
        //                 ]
        //             },
        //             {
        //                 title: "实战商业项目-设计开发成长体系",
        //                 "listcontent": [
        //                     "开发环境准备：屠龙勇士的有把好武器",
        //                     "源代码：了解构造才能下笔如有神",
        //                     "解剖分类拆解法详解"
        //                 ]
        //             },
        //             {
        //                 title: "实战商业项目-设计开发积分体系",
        //                 "listcontent": [
        //                     "为什么学编程好难？",
        //                     "分类拆解法简介:助你马上起飞的编程论",
        //                     "专栏使用指南：他们都说一开始要重点"
        //                 ]
        //             },
        //             {
        //                 title: "实战商业项目-设计开发成长体系",
        //                 "listcontent": [
        //                     "为什么学编程好难？",
        //                     "分类拆解法简介:助你马上起飞的编程论",
        //                     "专栏使用指南：他们都说一开始要重点"
        //                 ]
        //             },
        //             {
        //                 title: "实战商业项目-设计开发成长体系",
        //                 "listcontent": [
        //                     "为什么学编程好难？",
        //                     "分类拆解法简介:助你马上起飞的编程论",
        //                     "专栏使用指南：他们都说一开始要重点"
        //                 ]
        //             },
        //             {
        //                 title: "实战商业项目-设计开发成长体系",
        //                 "listcontent": [
        //                     "为什么学编程好难？",
        //                     "分类拆解法简介:助你马上起飞的编程论",
        //                     "专栏使用指南：他们都说一开始要重点"
        //                 ]
        //             },
        //
        //         ]
        //
        //     }
        // }
    }
</script>

<style scoped>
    /*.zhuanlanInsidelist {*/
    /*    margin-top: 0.8rem;*/
    /*}*/
    /*.zhuanlanInsidelist>.zhuanlanInsidelistspan {*/
    /*    font-size: 0.4rem;*/
    /*    text-align: left;*/
    /*    width: 90%;*/
    /*    display: inline-block;*/
    /*}*/
    /*.zhuanlanInsidelistBox {*/
    /*    width: 90%;*/
    /*    text-align: left;*/
    /*    margin: 0 auto;*/
    /*}*/
    /*.zhuanlanInsidelistBox {*/
    /*    margin-top: 0.2rem;*/
    /*}*/
    /*.zhuanlanInsidelistBox>p {*/
    /*    font-size: 0.4rem;*/
    /*    background-color: #fff7e7;*/
    /*    text-align: center;*/
    /*    height: 1rem;*/
    /*    line-height: 1rem;*/
    /*}*/
    /*.zhuanlanInsidelistbig {*/
    /*    margin-top: 0.2rem;*/
    /*    text-align: left;*/
    /*}*/
    /*.zhuanlanInsidelistbig>li>p {*/
    /*    width: 100%;*/
    /*    font-size: 0.35rem;*/
    /*    margin-top: 0.3rem;*/
    /*    background-color: #ffe7b5;*/
    /*    height: 1rem;*/
    /*    line-height: 1rem;*/
    /*}*/
    /*.zhuanlanInsidelistsmall>li>span {*/
    /*    width: 100%;*/
    /*    font-size: 0.3rem;*/
    /*    display: inline-block;*/
    /*    margin-top: 0.2rem;*/
    /*    background-color: #fff7e7;*/
    /*    height: 1rem;*/
    /*    line-height: 1rem;*/
    /*}*/
    /*.zhuanlanInsidelistbottom>span {*/
    /*    font-size: 0.3rem;*/
    /*    color: #999999;*/
    /*    height: 2rem;*/
    /*    line-height: 2rem;*/
    /*}*/
    /*.zhuanlanInsidelistew {*/
    /*    width: 100%;*/
    /*    margin-top: 0.3rem;*/
    /*}*/
    /*.zhuanlanInsidelistewconent {*/
    /*    width: 90%;*/
    /*    margin: 0 auto;*/

    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    align-items: center;*/
    /*}*/
    /*.zhuanlanInsidelistewconent>img {*/
    /*    width: 20%;*/
    /*    background-color: #a71d5d;*/
    /*    display: block;*/
    /*}*/
    /*.zhuanlanInsidelistewconentright {*/
    /*    width: 70%;*/
    /*    background-color: #ffe7b5;*/
    /*    height: 1.4rem;*/
    /*    font-size: 0.28rem;*/
    /*    display: flex;*/
    /*    flex-wrap: wrap;*/
    /*    justify-content: center;*/
    /*    align-content: space-around;*/
    /*}*/
    /*.zhuanlanInsidelistewconentright>p {*/
    /*    font-size: 0.33rem;*/
    /*}*/

</style>