<template>
    <div>
        <lesson-header></lesson-header>
        <div class="lesson-banner">
            <Banner></Banner>
        </div>
        <lesson-nav></lesson-nav>
    </div>


</template>

<script>
    import lessonNav from "../components/practical/lesson-nav"
    import Banner from "../components/index/Banner"
    import lessonHeader from "../components/practical/lesson-header"
    export default {
        name: "practical-lesson",
        components:{
            lessonHeader,
            Banner,
            lessonNav,
        },

    }
</script>

<style scoped>
    .lesson-banner{
        margin-top: 0.8rem;
    }

</style>