<template>
    <div class="jobs-four">
        <!--标题-->
        <div class="jobs-four-tit">
            <p>
                {{title[0]}}
                <span>{{title[1]}}</span>
            </p>
        </div>
        <!--可循环组件-->
        <div class="jobs-four-model">
            <div class="jobs-four-left">
                <!--左边循环-->
                <div class="jobs-left-lis" >
                   
                </div>
                <div class="jobs-left-lis" >
                   
                </div>
            </div>
            <div class="jobs-four-right">
                <!--右边循环-->
                <div class="jobs-right-lis" >
                    <!-- <h2>{{lir.title}}</h2>
                    <p>{{lir.describe}}</p> -->
                </div>
                <div class="jobs-right-lis">
                </div>
                <div class="jobs-right-lis">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                title:["就业班","6个月，从零起步成为工程师"],
                
            }
        }
    }
</script>
<style scoped>
    
</style>


