<template>
    <div style="width: 100%;height: 100%;">
        <div class="shareBox">
            <div class="shareTitle">
                <span>分享到</span>
            </div>
            <div class="shareWhere">
                <ul>
                    <li>
                        <span class="course_color_three"><i class="fa fa-weixin"></i></span>
                        <span>微信</span>
                    </li>
                    <li>
                        <span class="course_color_six"><i class="fa fa-qq"></i></span>
                        <span>QQ</span>
                    </li>

                    <li>
                        <span class="course_color_one"><i class="fa fa-telegram"></i></span>
                        <span>朋友圈</span>
                    </li>
                    <li>
                        <span class="course_color_seven"><i class="fa fa-weibo"></i></span>
                        <span>微博</span>
                    </li>
                    <li>
                        <span class="course_color_eight"><i class="fa fa-tumblr-square"></i></span>
                        <span>QQ空间</span>
                    </li>
                </ul>
            </div>
            <div class="copyLinkBox">
                <div class="copyLink">
                    <span class="course_color_five"><i class="fa fa-link"></i></span>
                    <span>复制链接</span>
                </div>
            </div><div @click="isShowNote"><span style="font-size: .32rem">取消</span></div>
        </div>

        <div @click="isShowNote" class="courseShareMask"></div>
    </div>
</template>

<script>
    export default {
        name: "CoursePlay",
        data(){
            return{
                showNode4:false,
            }
        },
        methods:{
            isShowNote(){
                this.$emit("isShowNote4",this.showNode4)
                console.log([this.showNode4,this.show])
            },
        }
    }
</script>

<style scoped>
/*    .courseShareMask{*/
/*        width: 100%;*/
/*        height: 100%;*/
/*        position: fixed;*/
/*        top: 0;*/
/*        right: 0;*/
/*        left: 0;*/
/*        bottom: 0;*/
/*        background: rgba(0,0,0,.6);*/
/*        z-index:2000;*/
/*    }*/
/*    .shareBox{*/
/*        position: fixed;*/
/*        top: 6.5rem;*/
/*        left: 0;*/
/*        bottom: 0;*/
/*        right: 0;*/
/*        background: #fff;*/
/*        z-index: 2200;*/
/*        border-top-left-radius:.2rem;*/
/*        border-top-right-radius:.2rem;*/
/*        !*border: 1px solid #333;*!*/
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
/*    .course_color_one{*/
/*        background: #ff4c69;*/
/*    }*/

/*    .course_color_two{*/
/*        background: #5794cb;*/
/*    }*/

/*    .course_color_three{*/
/*        background: #21cd85;*/
/*    }*/

/*    .course_color_four{*/
/*        background: #8193e7;*/
/*    }*/

/*    .course_color_five{*/
/*        background: #ff9e1f;*/
/*    }*/

/*    .course_color_six{*/
/*        background: #4cacd6;*/
/*    }*/
/*    .course_color_seven{*/
/*        background: #D64C40;*/
/*    }*/
/*    .course_color_eight{*/
/*        background: #D6C734;*/
/*    }*/
/*    .shareTitle{*/
/*        font-size: .36rem;*/
/*        margin-top: .40rem;*/
/*        margin-bottom: .45rem;*/
/*    }*/
/*    .shareWhere>ul{*/
/*        display: flex;*/
/*        flex-wrap: nowrap;*/
/*        overflow-x: scroll;*/
/*        margin: .3rem .4rem;*/
/*        border-bottom: 1px solid #EBEBEB;*/
/*    }*/
/*    .shareWhere>ul>li:last-child{*/
/*        margin-right: 0;*/
/*    }*/
/*    .copyLinkBox{*/
/*        !*width: 100%;*!*/
/*        margin: .4rem;*/
/*        border-bottom: 1px solid #EBEBEB;*/
/*    }*/
/*    .shareWhere>ul>li,.copyLink{*/
/*        width: .96rem;*/
/*        height: 1.8rem;*/
/*        !*margin-right: .87rem;*!*/
/*        color:#333;*/
/*        flex: 0 0 auto;*/
/*        margin-right: .5rem;*/

/*    }*/
/*    .shareWhere>ul>li span:first-child,.copyLink span:first-child{*/
/*        width: 100%;*/
/*        height: .96rem;*/
/*        border-radius: 50%;*/
/*        !*border: 1px solid;*!*/
/*        !*margin-bottom: .56rem;*!*/
/*        display: flex;*/
/*        justify-content: center;*/
/*        align-items: center;*/
/*        margin-bottom: .2rem;*/
/*    }*/
/*    .shareWhere>ul>li>span i,.copyLink>span i{*/
/*        display: block;*/
/*        width: .62rem;*/
/*        height: .62rem;*/
/*        border:1px solid #fff;*/
/*    }*/
</style>