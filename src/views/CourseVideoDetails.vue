<template>
    <div class="CourseVideoDetails">
        <div class="CourseVideoHeadertop">
            <i class="fa fa-angle-left"  @click="gotoBack"></i>
            <ul v-for="(item,index) in CourseVideoDetailsHeaderList" :key="index">
                <li>{{item}}</li>
            </ul>
            <i class="fa fa-envelope-o"></i>
        </div>
        <div class="CourseVideoDetailsHeader">
<!--            顶部定位上去的部分-->
            <!-- <CourseVideoHeadertop></CourseVideoHeadertop> -->
            <CourseVideoHeadersecond></CourseVideoHeadersecond>
<!--            简介-->
            <CourseVideoHeadersynopsis></CourseVideoHeadersynopsis>
<!--            章节-->
            <CourseVideosection v-if="sectionList" :sectionList="sectionList"></CourseVideosection>
<!--            课程推荐-->
            <CourseVideorecommend v-if="commend" :commend="commend"></CourseVideorecommend>
        </div>
        <div class="commendFooter">
            <div class="commendFooterleft">
                <i class="fa fa-envelope-open-o"></i>
                <p>收藏</p>
            </div>
            <router-link :to="`/coursePlay?id=${this.sid}`" tag="div" class="commendFooterleftright">立即学习
               
            </router-link>
        </div>
    </div>
</template>

<script>
    // import CourseVideoHeadertop from '../components/CourseVideoDetails/CourseVideoHeadertop.vue'
    import CourseVideoHeadersecond from '../components/CourseVideoDetails/CourseVideoHeadersecond.vue'
    import CourseVideoHeadersynopsis from '../components/CourseVideoDetails/CourseVideoHeadersynopsis.vue'
    import CourseVideosection from '../components/CourseVideoDetails/CourseVideosection.vue'
    import CourseVideorecommend from '../components/CourseVideoDetails/CourseVideorecommend.vue'



    export default {

        name: "CourseVideoDetails",
        data() {
            return{
                commend: {},
                sectionList: {},
                CourseVideoDetailsHeaderList: [
                    "简介","章节","推荐",
                ],
            sid:{}
            }
        },
        methods: {
            gotoBack(){
                this.$router.push("/course")
                // this.$router.replace("/course")
            }
        },
        components: {
            // CourseVideoHeadertop: CourseVideoHeadertop,
            CourseVideoHeadersecond: CourseVideoHeadersecond,
            CourseVideoHeadersynopsis: CourseVideoHeadersynopsis,
            CourseVideosection: CourseVideosection,
            CourseVideorecommend: CourseVideorecommend,
        },
        created(){
            fetch("http://localhost:3000/cart/api/CourseVideo").then(res=>{
                res.json().then(data=>{
                    // this.CourseVideo = data
                    this.commend = data.commend
                    this.sectionList = data.sectionList
                    // console.log(this.sectionList)
                    // console.log(this.commend)
                })
            })
            let {id}=this.$route.query;
            this.sid=id
            //console.log(this.sid)
        }
    }
</script>

<style scoped>
    
    @import "../assets/css/CourseVideoDetails.css";
</style>