<template>
<div>
  <div class="SetNav">
     <div>
         清除缓存
     </div>
     <div>
         <p>9.0MB</p>
         <!-- <i class="fa fa-chevron-right"></i> -->
     </div>
  </div>
  <div class="SetNav-one">
     <div class="first">
         <p>允许非WIFI网络下载视频</p>
         <p>请慎重选择开启 避免过度使用流量</p>
     </div>
     <div class=""  @click="change" >
        <van-switch-cell v-model="checked" inactive-color="#b2b2b2" active-color="#f01414"/>
         <!-- <i class="fa fa-chevron-right"></i> -->
     </div>
  </div>
   <div class="SetNav">
     <div class="first">
         播放设置
     </div>
     <div class="">
         <!-- <p>查看受益与提现</p> -->
         <i class="fa fa-chevron-right"></i>
     </div>
  </div>
 
  <div class="SetNav">
     <div class="first">
         版本更新
     </div>
     <div class="">
         
         <i class="fa fa-chevron-right"></i>
     </div>
  </div>
   <div class="SetNav">
     <div class="first">
         给我评分
     </div>
     <div class="">
         
         <i class="fa fa-chevron-right"></i>
     </div>
  </div>
  <div class="SetNav">
     <div class="first">
         关于慕课
     </div>
     <div class="">
     
         <i class="fa fa-chevron-right"></i>
     </div>
  </div>
  
</div>
</template>

<script>
import { Dialog } from 'vant'
export default { 
    data() {
        return {
            checked:false,
         }
  },
  
  methods:{
    change(){
        Dialog.confirm({
        confirmButtonColor:"#000",
        message: '温馨提示：允许流量下载本软件将不再做任何限制，可能造成流量损失，确认开启？'
        }).then(() => {
        // on confirm
        }).catch(() => {
        // on cancel
        });
    }
  }
}
</script>

<style scoped>


</style>
