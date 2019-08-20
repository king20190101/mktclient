<template>
    <div class="searchContent"  v-if="pageFormList[1].courseNote">
        <div class="searchNotesList flex"
             v-for="(item,index) in pageFormList[1].courseNote"
             :key = "index"
        >
            <div class="searchNotesListLeft" >
                <div class="searchNotesListTit">{{item.tit}}</div>
                <ul class="searchNotesListTips flex">
                    <li v-for="u in item.tips">{{u}}</li>
                    <span>{{item.lookNums}}</span>
                </ul>
            </div>
            <div class="searchNotesListRight">
                <img :src="item.Img"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchNotes",
        props:["pageFormList"],
        data(){
            return{

            }
        }

    }
</script>

<style scoped>

</style>