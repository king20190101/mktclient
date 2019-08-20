<template>
    <div class="CourseVideorecommend">
        <span class="CourseVideorecommendspan">推荐课程</span>
        <Coursecommend v-if="commend" :data="commend">
        </Coursecommend>
        
    </div>
</template>

<script>
    import Coursecommend from "../common/Practical.vue"
    export default {
        name: "CourseVideorecommend",
        props: ["commend"],
        components: {
            "Coursecommend": Coursecommend,
        },

    }
</script>

<style scoped>
    

</style>