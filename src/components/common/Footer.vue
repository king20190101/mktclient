<template>
    <ul class="mkfooter">
        <router-link
               
                :to="item.path"
                tag="li"
                v-for="(item,index) in tabbar"
                :key = 'index'
                @click.native="handleChange(index)"
        >
            <span v-html='item.iconfont' class="iconfont"></span>
            <p>{{item.title}}</p>
        </router-link>
    </ul>
</template>

<script>
    export default {
        name: "Footer",
        methods:{
            handleChange(index){
                this.flag = index;
            }
        },
        data(){
            return {
                tabbar:[
                    {
                        iconfont:"&#xe62e;",
                        title:"首页",
                        path: '/index',
                    },
                    {
                        iconfont:"&#xe630;",
                        title:"分类" ,
                        path: '/category',
                    },
                    {
                        iconfont:"&#xe64c;",
                        title:"我的学习",
                        path: '/learn',
                    },
                    {
                        iconfont:"&#xe629;",
                        title:"账号" ,
                        path: '/account',
                    },
                ],
                flag:0,
            }
        },
    }
</script>

<style scoped>
    /*  */
</style>