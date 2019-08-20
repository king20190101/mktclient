<template>
    <div class="zhuanlanInsideTop">
        <div class="zhuanlanInsideTopcontentone">
        <i class="fa fa-angle-left zhuanlanInsideTopfa" @click="gotoindexs"></i>
        <div class="zhuanlanInsideTopbox">
            <div class="zhuanlanInsideTopjiujiuba">分享赚9.98元</div>
            <i class="fa fa-envelope-o"></i>
        </div>
    </div>
        <div class="zhuanlanInsideTopcontenttwo">
            <div class="zhuanlanInsideTopcontenttwocontent">
                <div class="zhuanlanInsideTopcontenttwoLeft">
                    <img src="../../../public/img/1.png">
                </div>
                <div class="zhuanlanInsideTopcontenttwoRight">
                    <span>零基础实现微信小程序电商开发</span>
                    <p>小程序开发一线战地笔记</p>
                    <div class="zhuanlanInsideTopcontenttwoRightimg">
                        <img src="../../../public/img/91fcd6b46cc73114ab7d0fc43b2882a.png" alt="">
                        <div>刘婕jav·首批微信开发从业者</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="zhuanlanInsideTopcontenthree">
            <span>已更新10节·共计50节</span>
            <span>249人已订阅</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "zhuanlanInsideTop",
        methods: {
            gotoindexs(){
                this.$router.push("/index")
            }

        }
    }
</script>

<style scoped>
    /*.zhuanlanInsideTop {*/
    /*    width: 100%;*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    flex-wrap: wrap;*/
    /*    margin-top: -0.8rem;*/
    /*}*/
    /*.zhuanlanInsideTopcontentone {*/
    /*    width: 90%;*/
    /*    margin: 0 auto;*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    align-items: center;*/
    /*}*/
    /*.zhuanlanInsideTopbox {*/
    /*    width: 50%;*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    align-items: center;*/
    /*}*/
    /*.zhuanlanInsideTopjiujiuba {*/
    /*    height: 0.8rem;*/
    /*    color: white;*/
    /*    font-size: 0.36rem;*/
    /*    line-height: 0.8rem;*/
    /*    background: red;*/
    /*    color: white;*/
    /*    border-radius: 0.3rem;*/
    /*    width: 75%;*/
    /*}*/
    /*.zhuanlanInsideTopcontenttwo {*/
    /*    width: 100%;*/
    /*    margin-top: 0.2rem;*/
    /*}*/
    /*.zhuanlanInsideTopcontenttwocontent {*/
    /*    width: 90%;*/
    /*    margin: 0 auto;*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*}*/
    /*.zhuanlanInsideTopcontenttwoLeft {*/
    /*    width: 30%;*/
    /*}*/
    /*.zhuanlanInsideTopcontenttwoLeft>img {*/
    /*    width: 100%;*/
    /*}*/
    /*.zhuanlanInsideTopcontenttwoRight {*/
    /*    width: 70%;*/
    /*    text-align: right;*/
    /*}*/
    /*.zhuanlanInsideTopcontenttwoRight>span {*/
    /*    font-size: 0.4rem;*/
    /*    text-align: left;*/
    /*    width: 80%;*/
    /*    display: inline-block;*/
    /*    margin-top: 0.1rem;*/
    /*}*/
    /*.zhuanlanInsideTopcontenttwoRight>p {*/
    /*    font-size: 0.33rem;*/
    /*    width: 80%;*/
    /*    display: inline-block;*/
    /*    margin-top: 0.2rem;*/
    /*    text-align: left;*/
    /*}*/
    /*.zhuanlanInsideTopcontenttwoRightimg {*/
    /*    width: 80%;*/
    /*    text-align: left;*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    align-items: center;*/
    /*    margin-top: 0.2rem;*/
    /*    font-size: 0.33rem;*/
    /*    margin-right: 0;*/
    /*    text-align: left;*/
    /*}*/
    /*.zhuanlanInsideTopcontenttwoRightimg>img {*/
    /*    width: 15%;*/
    /*    margin-top: -0.4rem;*/
    /*    margin-left: 0rem;*/
    /*}*/
    /*.zhuanlanInsideTopcontenthree {*/
    /*    width: 90%;*/
    /*    height: 1.2rem;*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    align-items: center;*/
    /*    margin: 0 auto;*/
    /*    font-size: 0.33rem;*/
    /*}*/
</style>