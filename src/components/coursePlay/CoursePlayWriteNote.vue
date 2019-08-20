<template>
    <div class="WriteNoteBox">
        <div class="WriteNote_header">
            <span @click="isShowNote">×</span>
            <span>记笔记</span>
        </div>
        <div class="WriteNote_content">
            <textarea v-model="msg" class="WriteNote_content_txt" name="" id="" width="100%" height="100%" placeholder="请输入笔记内容">
            </textarea>
        </div>
        <div class="WriteNote_save">
            <span></span>
            <span class="blueSpan" @click="save">保存</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CoursePlayWriteNote",
        data(){
            return{
                showNode:false,
                msg:"",
            }
        },
        props:["sid"],
        methods:{
            isShowNote(){
                this.$emit("isShowNote",this.showNode)
                console.log([this.showNode,this.show])
            },
            save(){
                let userName = localStorage.getItem('userName')
                let userImg = localStorage.getItem('userImg')
                this.$emit("isShowNote",this.showNode)
                console.log([this.showNode,this.show])
                let hours = new Date().getHours();
                console.log("日期"+hours)
                console.log(userImg)
                console.log(userName)
                let info = {
                    "userName": userName,
                    "userImg": userImg,
                    "noteTime": hours,
                    "noteTxt": this.msg,
                    "fabulous": 0,
                    "adopt": 0,
                    "sid":this.sid
                };
                fetch('http://localhost:3000/cart/api/note', {
                    method: "post", //传参方式
                    headers: {
                        "Content-Type": "application/json" //请求头
                    },
                    body: JSON.stringify(info) //传的参数
                }).then(res => {
                    res.json().then(data => {
                        console.log(data)
                        if (data.state == 1) {
                            alert("上传数据到course.json");
                        }
                    });
                })
            }
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
    /*textarea {*/
    /*    color: #333;*/
    /*    caret-color: red;*/
    /*}*/
</style>