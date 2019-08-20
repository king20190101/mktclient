<template>
    <div class="WriteNoteBox">
        <div class="WriteNote_header">
            <span @click="isShowNote">×</span>
            <span>写评论</span>
        </div>
        <!--        <course-play-more-header :title="title"></course-play-more-header>-->
        <div class="WriteNote_content">
            <textarea class="WriteNote_content_txt" name="" id="" width="100%" height="100%" placeholder="请输入评论内容">

            </textarea>
        </div>
        <div class="WriteNote_save">
            <span></span>
            <span class="blueSpan">发布</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CoursePlayMoreComment",
        data(){
            return{
                showNode2:false,
            }
        },
        methods:{
            isShowNote(){
                this.$emit("isShowNote2",this.showNode2)
                console.log([this.showNode2,this.show])
            },
        }
    }
</script>

<style scoped>
    /*.WriteNote_content_txt{*/
    /*    !*background: #21cd85;*!*/
    /*    width: 94.5%;*/
    /*    height: 5rem;*/
    /*    font-size: .32rem;*/
    /*    !*line-height: .38rem;*!*/
    /*    padding: 0 .2rem;*/
    /*    border: none;*/
    /*    padding-top: .2rem;*/
    /*}*/
    /*.WriteNoteBox{*/
    /*    position: fixed;*/
    /*    top: 0;*/
    /*    left: 0;*/
    /*    bottom: 0;*/
    /*    right: 0;*/
    /*    background: white;*/
    /*    z-index: 2200;*/
    /*}*/
    /*.WriteNote_header{*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    position: relative;*/
    /*    width: 100%;*/
    /*    height: 1rem;*/
    /*}*/
    /*.WriteNote_header span:first-child{*/
    /*    font-size: .45rem;*/
    /*    font-weight: 600;*/
    /*    position: absolute;*/
    /*    left: .3rem;*/
    /*    top: .2rem;*/
    /*}*/
    /*.WriteNote_header span:last-child{*/
    /*    font-size: .36rem;*/
    /*    font-weight: 600;*/
    /*}*/
    /*.WriteNote_save{*/
    /*    position: fixed;*/
    /*    bottom:0 ;*/
    /*    width: 100%;*/
    /*    padding:.2rem .35rem;*/
    /*    border-top: 1px solid #ece8e8;*/
    /*}*/
    /*.blueSpan{*/
    /*    float: right;*/
    /*    background: #277AD6;*/
    /*    font-size: .32rem;*/
    /*    padding: .05rem .3rem;*/
    /*    color: #FFF;*/
    /*    border-radius: .03rem;*/
    /*}*/
    /*.WriteNote_content_txt ,.questionTit{*/
    /*    color: #333;*/
    /*    caret-color: red;*/
    /*}*/
    /*.questionTit{*/
    /*    width: 100%;*/
    /*    font-size: .32rem;*/
    /*    margin-left:.2rem;*/
    /*    margin-right:.2rem;*/
    /*    padding: .2rem 0;*/
    /*    border-bottom: 1px solid #ece8e8;*/
    /*}*/
</style>