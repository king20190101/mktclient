<template>
    <div>
        <div class="searchContent">
            <div class="searchNums">共找到460个相关内容</div>
              <div class="searchContentList flex"
                   v-if="pageFormList[flag].searchCourse[flag1]"
                 v-for="(item,index) in pageFormList[flag].searchCourse[flag1].title1Con"
                 :key = "index"
            >
                <div class="searchPhoto">
                    <img v-if="item.Img" :src="item.Img">
                </div>
                <div class="searchDirection flex">
                    <div class="searchDirectionText">
                        <p v-if="item.tit">{{item.tit}}</p>
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
        props:["pageFormList","flag1","flag"],
        data(){
            return{
            }
        },
        created() {
            //console.log(this.pageFormList)
        }


    }
</script>

<style scoped>

</style>