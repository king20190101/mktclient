<template>
    <div>
        <!--头部-->
        <mk-search-header
                @gBack="goBack"
                @sInfo = "searchInfo"
        />
        <!--内容-->
        <div class="searchContent1">
            <!--热门搜索-->
            <div class="searchHot">
                <p>热门搜索</p>
                <ul class="searchList">
                    <li v-for="(item,index) in hotSearch"
                        :key = "index"
                        @click = "searchHotInfo(index)"
                    >
                        {{item.sV}}
                    </li>
                </ul>
            </div>
            <!--搜索历史-->
            <div class="searchHistory" v-show ='isHotSearch' v-if="historySearch.length>0">
                <div class="searchClear">
                    <p>历史搜索</p>
                    <span class="clearBtn" @click = "clearInfo">清空</span>
                </div>
                <ul class="searchList1" >
                    <li v-for="(item,index) in historySearch" :key = index>{{item.sV}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import searchHeader from "../components/search/searchHeader"
    export default {
        name: "search",
        components:{
            "mk-search-header":searchHeader,
        },
        data(){
            return{
                hotSearch:{},
                historySearch:{},
                serVal:"",
                isHotSearch:true,//热门搜索是否显示
            }
        },
        created(){
            fetch("http://localhost:3000/cart/api/searchVal").then(res => {
                res.json().then(data => {
                    //console.log(data)
                    this.hotSearch = data.hotSearch
                    this.historySearch = data.historySearch
                    //console.log(this.hotSearch)
                });
            });
        },
        methods:{
            searchInfo(){
                /*向数据库添加数据*/
                this.serVal = $(".con").val()
                let info ={
                    "sV":this.serVal
                }
                if(this.serVal){
                    fetch("http://localhost:3000/cart/api/search",{
                        method:"post",
                        headers: {
                            "Content-Type": "application/json" //请求头
                        },
                        body:JSON.stringify(info),
                    }).then(res => {
                        res.json().then(data => {
                            this.$router.push("/searchRelativeContent?keyWord="+this.serVal);
                        });
                    });
                }
            },
            searchHotInfo(index){
                let hotSearch = this.hotSearch[index].sV
                // console.log(hotSearch)
                this.$router.push("/searchRelativeContent?keyWord="+hotSearch);
                this.searchInfo()
            },

            clearInfo(){
                this.isHotSearch = false
                fetch("http://localhost:3000/cart/api/clearSearch",{
                    method:"post",
                    headers: {
                        "Content-Type": "application/json" //请求头
                    },
                    // body:JSON.stringify(info),
                }).then(res => {
                    res.json().then(data =>{

                    });
                })
            },
            goBack(){
                this.$router.go("-1")
            }
        }
    }
    /*数据传过去是空的*/
</script>

<style scoped>
    @import "../assets/css/search.css";

</style>