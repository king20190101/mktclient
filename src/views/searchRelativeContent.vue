<template>
    <div>
            <!--头部-->
            <mk-search-header
                    @gBack="goBack"
                    @sInfo = "searchInfo"
                    :keyWord = "keyWord"
                    class="searchHeader"
            />
            <!--导航部分-->
            <div class="searchCourseNav" >
                <div class="searchNavOutside flex">
                    <div
                            v-if="pageFormList"
                            v-for="(item,index) in pageFormList"
                            :key = "index"
                            @click = "handlePage(index)"
                            :class="{'active':flag == index}"
                    >
                        <p >{{item.title}}</p>
                        <p class="searchLine" v-show="flag == index"></p>
                    </div>
                </div>
                <div class="searchNavInside flex" v-if="flag==0">
                    <div
                            v-if="pageFormList[0].searchCourse"
                            v-for="(item1,index1) in pageFormList[0].searchCourse"
                            :key = index1
                            :class="{'active':flag1 == index1}"
                            @click = handleChildPage(index1)
                    >
                    <span v-if="item1.childTitle">{{item1.childTitle}}</span>
                    </div>
                </div>

                <div class="searchNums searchNotesNums" v-else>共找到460个相关内容</div>
            </div>
        <!--课程和手记两个组件间的切换-->
        <!--keep-alive是用来缓存的-->
        <keep-alive>
            <component :is="pageForm" v-if="pageFormList" :pageFormList="pageFormList" :flag1="flag1" :flag = "flag"></component>
        </keep-alive>
        <!--没有更多数据了-->
        <div class="searchNoMore">
            没有更多数据了
        </div>
    </div>
</template>

<script>
    import searchHeader from "../components/search/searchHeader"
    import  searchCourse from "../components/courseRelativeContent/searchCourse"
    import  searchNotes from "../components/courseRelativeContent/searchNotes"
    import  searchCourse1 from "../components/courseRelativeContent/searchCourse1"
    import  searchPracticalCourse from "../components/courseRelativeContent/searchPracticalCourse"
    import  searchEmployment from "../components/courseRelativeContent/searchEmployment"
    export default {
        name: "searchRelativeContent",
        components:{
            "mk-search-header":searchHeader,
            "mk-search-course":searchCourse,
            "mk-search-notes":searchNotes,
            "mk-search-course1":searchCourse1,
            "mk-search-practical":searchPracticalCourse,
            "mk-search-employment":searchEmployment,
        },
        data(){
            return{
                /*头部信息*/
                keyWord:{},
                notShow:true,
                flag:0,//导航1
                flag1:0,//导航条2
                pageForm:"mk-search-course",
                pageFormList:""

            }
        },
        created(){
            let {keyWord} = this.$route.query
            this.keyWord = keyWord
            /*模糊查询*/
            fetch("http://localhost:3000/cart/api/searchShopInfo").then(res=>{
                res.json().then(data=>{
                    this.pageFormList = data.pageFormList
                    //console.log(this.pageFormList)
                })
            })


        },
        methods:{
            goBack(){
                this.$router.go("-1")
            },
            searchInfo(){
                /*向数据库添加数据*/
                this.serVal = $(".con").val()
                let info ={
                    "sV":this.serVal
                }
                fetch("http://localhost:3000/cart/api/search",{
                    method:"post",
                    headers: {
                        "Content-Type": "application/json" //请求头
                    },
                    body:JSON.stringify(info),
                }).then(res => {
                    res.json().then(data => {
                        alert("添加成功");
                        this.$router.push("/searchRelativeContent?key="+this.serVal);
                    });
                });
            },
            /*课程和手记之间的切换*/
            handlePage(index){
                this.flag=index
                switch(index){
                    case 0:this.pageForm = "mk-search-course";break;
                    case 1:this.pageForm = "mk-search-notes";break;
                }
            },
            /*课程下的组件的切换*/
            handleChildPage(index){
                this.flag1=index
                switch(index){
                    case 0:this.pageForm = "mk-search-course";break;
                    case 1:this.pageForm = "mk-search-course1";break;
                    case 2:this.pageForm = "mk-search-practical";break;
                    case 3:this.pageForm = "mk-search-employment";break;
                }
            }


        }
    }
</script>

<style scoped>
@import "../../src/assets/css/searchRelativeContent.css";
.searchNotesNums{
    padding:0.3rem 0.3rem;
}
.searchNavInside{
    height: 0.95rem;
}
</style>