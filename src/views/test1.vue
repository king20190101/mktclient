<template>
    <div>
        <button @click="add(5)">+5</button>
        <button @click="add(6)">+6</button>
        <p style="font-size:.4rem">{{getCount}}</p>
        <button @click="$router.replace('/test')">1111</button>
    </div>
</template>



<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "test1",
        methods:{
            ...mapActions(["add","sub"])
        },
        computed:{
            ...mapGetters(['getCount'])
        }
    }
</script>

<style scoped>

</style>