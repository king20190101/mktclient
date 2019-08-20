<template>
    <div class="mkfreeBig clearfix">
        <router-link :to="`/courseVideoDetails?id=${index}`" 
                        class="mkfreeTit"  
                        v-for="(item,index) in data" :key="index" 
                        tag="div">
            <div class="mkfreeLeft">
                <div class="mkfreeBj" :style="{backgroundImage: 'url(' + item.src+ ')'}">
                    <div class="mkGrade">{{item.word}}</div>
                    <div class="mkNum">
                        <img class="mkNumimg" :src="item.mine" alt="">
                        <span class="mkNUmSpan">{{item.num}}</span>
                    </div>
                </div>
                <span class="mkfreeSpan">{{item.message}}</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props:["data"],
        name: "FreeStyle"
    }
</script>

<style scoped>
    
</style>