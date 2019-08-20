<template>
    <div class="CourseVideosection">
        <span class="sectionSpan">章节</span>
        <ul>
            <li v-for="(item,index) in sectionList">
                <p class="titleSpan">第{{index+1}}章 {{item.title}}</p>
                <ul>
                    <li v-for="(list,lId) in item.littleList">
                        <p class="littleListSpan"><i class="fa fa-play-circle"></i>{{list}}</p>
                    </li>
                </ul>
            </li>
       </ul>
    </div>
</template>

<script>
    export default {
        name: "CourseVideosection",
        props: ["sectionList"],
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    /*.CourseVideosection {*/
    /*    padding-top: 0.3rem;*/
    /*    width: 100%;*/
    /*    text-align: left;*/
    /*    border-top: 1.5px solid #f4f5f7;*/
    /*    border-bottom: 1px solid #f4f5f7;*/
    /*    padding-bottom: 0.3rem;*/
    /*}*/
    /*.sectionSpan {*/
    /*    font-size: 0.5rem;*/
    /*}*/
    /*.CourseVideosection .titleSpan {*/
    /*    font-size: 0.4rem;*/
    /*    margin: 0.2rem 0;*/
    /*}*/
    /*.CourseVideosection .littleListSpan {*/
    /*    font-size: 0.33rem;*/
    /*    margin: 0.2rem 0;*/
    /*}*/
</style>