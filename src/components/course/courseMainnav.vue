<template>
    <div class="courseMainnav">
        <div class="courseContainer">
            <!--课程头部下面的导航条-->
            <div class="courseNav">
                <!--导航条左边-->
                <div class="courseNavleft"
                     v-for="(item,index) in courseList"
                     @click="handlepage(index)"
                     :class="{'active':flag==index}"
                     :key="index"
                >
                    <span>{{item.title}}</span>
                </div>
                <!--                导航条右边-->
                <div class="courseNavright"  @click="gocategory">
                    <span>全部</span>
                    <i class="iconfont">&#xe630;</i>
                </div>
            </div>
<!--            最新和最热课程切换的两个组件courseMain和courseMain-->
            <keep-alive>
                <component :is="pageForm" :coursedata="coursedata"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import courseMain from "./courseMain.vue"
    import courseHot from "./courseHot.vue"

    export default {
        props:["coursedata"],
        name: "courseMainnav",
        components: {
            "courseMain": courseMain,
            "courseHot":courseHot,
        },
        methods: {
            // 点击跳转到分类页面
            gocategory(){
                this.$router.replace("../category")
                
            },
            // 点击切换颜色和组件
            handlepage(index){
                this.flag = index
                switch(index){
                    case 0:
                        this.pageForm="courseMain";
                        break;
                    case 1:
                        this.pageForm="courseHot";
                        break;
                }
            }
        },
        data(){
            return {
                flag:0,
                pageForm:"courseMain",
                courseList: [
                    {
                        title: "最新",
                        name: "newCourse"
                    },
                    {
                        title: "最热",
                        name: "hotCourse",
                    },
                ]
            }
        }
    }
</script>

<style scoped>

    /*.courseMainnav {*/
    /*    width: 100%;*/
    /*    font-size: 0.4rem;*/
    /*}*/
    /*.courseContainer {*/
    /*    width: 100%;*/
    /*}*/
    /*.courseNav {*/
    /*    width: 100%;*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    align-items: center;*/
    /*}*/
    /*.nav-right i {*/
    /*    margin-left: 0.3rem;*/
    /*}*/
    /*.courseNavleft {*/
    /*    width: 20%;*/
    /*}*/
    /*.courseNavright {*/
    /*    width: 80%;*/
    /*    text-align: right;*/
    /*}*/
    /*.courseNavright {*/
    /*    margin-right: 0.3rem;*/
    /*}*/
    /*.courseNavright>span {*/
    /*    margin-right: 0.3rem;*/
    /*}*/
    /*!*默认最新红色，点击哪个哪个变红*!*/
    /*.active {*/
    /*    color: red;*/
    /*}*/
</style>