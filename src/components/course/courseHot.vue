<template>
    <div class="courseMain" >
        <course-hot :data="coursedata.courseHot" >

        </course-hot>
    </div>
</template>

<script>
    import courseHot from "../common/FreeStyle"

    export default {
        props:["coursedata"],
        name: "courseHot",
        components:{
            "course-hot":courseHot
        },
        methods: {
           

        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>