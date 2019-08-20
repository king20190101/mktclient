<template>
    <div>
        <div class="mkZhuanLan1" >
            <div class="lists" v-for="(item,index) in zhuanlandata" :key='index'>
                <img :src=item.img>
                <p>{{item.id}}</p>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: "ColumnStyle",
        props:["zhuanlandata"],
    }
</script>

<style scoped>
    
</style>