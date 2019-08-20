<template>
<!--    最近学习-->
    <div class="learnXuexi">
        <div class="learnXuexi1">
            <div class="learnZuijin">
                <p>最近学习</p>
                <i class="iconfont icon-arrow-right"></i>
            </div>
            <div class="learnRadio">
                <div class="learnList" v-for="(item,index) in xuexidata" :key='index'>
                    <img :src=item.img>
                    <p>{{item.id}}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                "xuexidata":[
                    {"img":"img/learn/learn2.png", "id":"3小时速成VUE的课程"},
                    {"img":"img/learn/learn3.png", "id":"3小时速成VUE的课程"},
                    {"img":"img/learn/learn4.png", "id":"3小时速成VUE的课程"},
                    {"img":"img/learn/learn5.png", "id":"3小时速成VUE的课程"},
                    {"img":"img/learn/learn6.png", "id":"3小时速成VUE的课程"},
                ]
            }
        }
    }
</script>

<style scoped>

</style>