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
    import lessonHeader from "../components/combat/combatHeader"
    import Banner from "../components/index/Banner"
    import lessonNav from "../components/combat/combatNav"
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