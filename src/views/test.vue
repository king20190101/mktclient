<template>
    <div>
        <p style="font-size:.4rem">{{getCount}}</p>
        <p style="font-size:.4rem">{{this.$store.state.count}}</p>
        <p style="font-size:.4rem">{{count}}</p>
        <button @click="add(10)">+</button>
        <button @click="sub(10)">-</button>
        <button @click="$router.replace('/test1')">1111</button>
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
    export default {
        data(){
            return{

            }
        },
        name: "test",
        methods:{
            ...mapActions(["add","sub"])
        },
        computed:{
            ...mapState(['count']),
            ...mapGetters(['getCount'])
        }

    }
//    vuex流程：

</script>

<style scoped>

</style>