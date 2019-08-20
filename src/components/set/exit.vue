<template>
    <div class="SetFooter">
        <!-- <router-link to="/login" tag="p"> -->
        <router-link to="/login">
        <p @click="onbeforeunload">退出登录</p>
        </router-link>
    </div>
</template>

<script>

export default {
        methods:{
          // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
            onbeforeunload(e) {
                var storage = window.localStorage;
                    storage.clear()
                }
        }

}
</script>

<style scoped>

</style>


