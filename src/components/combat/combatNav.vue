<template>
    <div class="lessonNav lesson">
        <div class="lesson">
            <div id="lesson" >
                 <div class="tab">
                    <a href="#" @click="tabId=0" class="{tabId=0} active">默认</a>
                    <a href="#" @click="tabId=1" class="{tabId=1}">最新</a>
                    <a href="#" @click="tabId=2" class="{tabId=2}">销量</a>
                    <a href="#" @click="tabId=3" class="{tabId=3}">更新</a>
                 </div>
                <div class="lessonRight">
                   <div class="lessonR">全部</div>
                    <i class="iconfont icon-quanbu"></i>
                </div>
            </div>
        </div>
        <div class="box">
            <div v-show="tabId===0">
                <mk-index-practical v-if="practs" :data="practs"/>
            </div>
            <div v-show="tabId===1">
                <mk-index-practical v-if="practs" :data="practs"/>
                <mk-index-practical v-if="practs" :data="practs"/>
            </div>
            <div v-show="tabId===2">
                <mk-index-practical v-if="practs" :data="practs"/>
                <mk-index-practical v-if="practs" :data="practs"/>
                <mk-index-practical v-if="practs" :data="practs"/>
            </div>
            <div v-show="tabId===3">
                <mk-index-practical v-if="practs" :data="practs"/>
                <mk-index-practical v-if="practs" :data="practs"/>
                <mk-index-practical v-if="practs" :data="practs"/>
                <mk-index-practical v-if="practs" :data="practs"/>
            </div>
         </div>

    </div>

</template>

<script>
    import Practical from '../common/Practical'
    import $ from "jquery"
    export default {
        name: "lesson-nav",
        components:{
            "mk-index-practical":Practical,
        },
        data(){
            return {
                tabId: 0,
                navBarFixed:false,
                practs:{},
            }
        },
        methods:{
            handleChange(index){
                this.flag = index;
            }
        },

        created(){
            fetch("http://localhost:3000/cart/api/test").then(res=>{
                res.json().then(data=>{
                    this.practs=data.practs

                    console.log(this.practs);
                })
            })
        }
    }
    mounted:{
        $(document).ready(function (){// ready 事件
            $("a").each(function(index){//便利对象
                $(this).click(function(){//点击触发事件
                    // $("a").eq(0)addclass('active')
                    $("a").removeClass("active");//删除当前元素的样式
                    $("a").eq(index).addClass("active");//添加当前元素的样式
                });
            });
        })
    }


</script>

<style scoped>
    .navBarWrap {
        position:fixed;
        top:0;
        z-index:999;
    }

    .lessonRight{
        float: right;
        /*margin-top: 0.1rem;*/
        font-size: 0.3rem;
        height: 0.5rem;
        line-height: 0.5rem;
        margin-right: 0.3rem;
    }
    .lessonR{
        font-size: 0.35rem;
        display: inline-block;
    }
    .lessonRight i{
        /*width: 0.5rem;*/
        font-size: 0.4rem;
        margin-top: 0.1rem;
    }
    .tab{
        width: 60%;
        margin-left: 0.3rem;
    }
    .tab a{
        color: #bfbfbf;
          text-decoration: none;
          height: 0.5rem;
           width: 25%;
          float: left;
        line-height: 0.5rem;
         text-align: center;
        }
     .tab .active{
        background: #007aff;
         color:white;
    }
</style>