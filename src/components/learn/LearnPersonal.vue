<template>
    <div class="learnPersonal">
        <div class="learnPersonal1">
            <b>个人中心</b>


<!--            小图标循环-->
            <div class="learnGeren">
                <router-link  v-for="(item,index) in personaldata"
                              :key='index'
                              :to="item.path"
                             class="learnCenter"

                             tag="div">
                    <img :src=item.img>
                    <p>{{item.id}}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                "personaldata":[
                    {"img":"img/learn/learn7.png", "id":"我的收藏","path":"/first"},
                    {"img":"img/learn/learn8.png", "id":"我的收藏","path":"/second"},
                    {"img":"img/learn/learn9.png", "id":"我的收藏","path":"/second"},
                    {"img":"img/learn/learn10.png", "id":"我的收藏","path":"/second"},
                    {"img":"img/learn/learn11.png", "id":"我的收藏","path":"/third"},
                    {"img":"img/learn/learn12.png", "id":"我的收藏","path":"/third"},
                    {"img":"img/learn/learn13.png", "id":"我的收藏","path":"/first"},
                    {"img":"img/learn/learn14.png", "id":"我的收藏","path":"/second"}
                ]
            }
        }
    }
</script>

<style scoped>

</style>