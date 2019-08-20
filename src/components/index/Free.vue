<template>
    <div class="free">

       <mk-free-style :data="data"/>
    </div>
</template>

<script>
    import FreeStyle from "../common/FreeStyle"
    export default {
        name:"free",
        props:["data"],
        components:{
            "mk-free-style":FreeStyle
        }
    }
</script>
<style scoped>

</style>