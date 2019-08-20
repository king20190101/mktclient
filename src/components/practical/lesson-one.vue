<template>
    <div>
        <div class="practicalOne" v-for="practical in img" :key="practical.id">
            <img :src="practical.zzz" alt="" class="practicalTwo">
            <div class="practicalThree">
                <span class="practicalEight">{{practical.xxx}}</span>
                <span class="practicalFour ">{{practical.one}}</span>
                <span class="practicalFour " >{{practical.two}}</span>
                <span class="practicalFour  iconssssss">{{practical.three}}</span>
                <br>
                <span class="practicalFour">￥{{practical.four}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lesson-one",
        data(){
            return{
                img:[
                    {
                        zzz:"./img/index/index10.jpg",
                        xxx:"SpringCloud Finchley三版本(M2+RELEASE+SR2)微服我我教师节哦我爱上京东我今后我好的哈市",
                        one:"免费",
                        two:"中级",
                        three:"99999",
                        four:"666"
                    },
                    {
                        zzz:"./img/index/index10.jpg",
                        xxx:"SpringCloud Finchley三版本(M2+RELEASE+SR2)微服我我教师节哦我爱上京东我今后我好的哈市",
                        one:"免费",
                        two:"中级",
                        three:"99999",
                        four:"666"
                    },
                    {
                        zzz:"./img/index/index10.jpg",

                        xxx:"SpringCloud Finchley三版本(M2+RELEASE+SR2)微服我我教师节哦我爱上京东我今后我好的哈市",
                        one:"免费",
                        two:"中级",
                        three:"99999",
                        four:"666"
                    }
                    ,
                    {
                        zzz:"./img/index/index10.jpg",

                        xxx:"SpringCloud Finchley三版本(M2+RELEASE+SR2)微服我我教师节哦我爱上京东我今后我好的哈市",
                        one:"免费",
                        two:"中级",
                        three:"99999",
                        four:"666"
                    }
                    ,
                    {
                        zzz:"./img/index/index10.jpg",

                        xxx:"SpringCloud Finchley三版本(M2+RELEASE+SR2)微服我我教师节哦我爱上京东我今后我好的哈市",
                        one:"免费",
                        two:"中级",
                        three:"99999",
                        four:"666"
                    }
                    ,
                    {
                        zzz:"./img/index/index10.jpg",

                        xxx:"SpringCloud Finchley三版本(M2+RELEASE+SR2)微服我我教师节哦我爱上京东我今后我好的哈市",
                        one:"免费",
                        two:"中级",
                        three:"99999",
                        four:"666"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .practicalOne{
        width:100%;
        text-align: left !important;
        padding:0.4rem 0.3rem 0;
        display:flex;
    }
    .practicalTwo{
        width: 2.14rem;
        float:left;
        border-radius: 0.2rem;
    }
    .practicalThree{
        flex:1;
        display: inline-block;
        margin-left: 0.3rem;
        text-align: left !important;
    }
    .practicalThree .practicalEight{
        font-size: 0.28rem !important;
        /*margin-top: -1rem;*/
        font-weight: 700;
        display: inline-block;
        /*width: 4rem;*/
        /*height: 0.59rem;*/
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;


    }
    .practicalFour{
        font-size: 0.35rem;
        color:#8f9498;
        margin-top: 0.2rem;
        display: inline-block;
        /*width: pad;*/
        padding-right: 0.2rem;

    }

</style>