<template>
    <div class="coursePage">
        <course-header></course-header>
        <course-main-nav v-if="coursedata" :coursedata="coursedata"></course-main-nav>
        
    </div>

</template>

<script>
    import courseHeader from "../../src/components/course/courseHeader"
    import courseMainnav from "../../src/components/course/courseMainnav"

    export default {
        name: "Course",
        components: {
            "course-header": courseHeader,
            "course-main-nav": courseMainnav,
            
        },
        data(){
            return{
                coursedata:{}
            }
        },
        created(){
            fetch("http://localhost:3000/cart/api/course").then(res=>{
                res.json().then(data=>{
                    this.coursedata=data
                    //console.log(this.coursedata.courseHot);
                })
            })
        }

    }
</script>

<style scoped>
   
    @import "../assets/css/course.css";
</style>