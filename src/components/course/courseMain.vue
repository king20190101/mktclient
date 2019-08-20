<template>
        <div class="courseMain">
            <course-main :data="coursedata.coursemain">
            </course-main>
        </div>
</template>

<script>
    import courseMain from "../common/FreeStyle"

    export default {
        props:["coursedata"],
        name: "courseMain",
        components:{
            "course-main":courseMain
        },
        methods: {
           

        },
        data(){
            return{
               
            }
        },
    }
</script>

<style scoped>

</style>