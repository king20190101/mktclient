<template>
    <div>
        <div class="searchContent">
            <div class="searchNums">共找到460个相关内容</div>
            <div class="searchContentList flex"
                 v-for="(item,index) in pageFormList[flag].searchCourse[flag1].title1Con"
                 :key = "index"
            >
                <div class="searchPhoto">
                    <img :src="item.Img" alt="">
                </div>
                <div class="searchDirection flex">
                    <div class="searchDirectionText">
                        <p>{{item.tit}}</p>
                        <li>
                            <span v-for="u in item.tips">{{u}}</span>
                        </li>
                    </div>
                    <div class="searchCartSign">购</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchCourse",
        props:["pageFormList","flag","flag1"],
        data(){
            return{
            }
        }
    }
</script>

<style scoped>

</style>