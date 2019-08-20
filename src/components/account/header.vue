
<template>
  <div>
    <div class="AccountHeader">
      <div>
        <i class="iconfont icon-saoyisao"></i>
        <i class="fa fa-moon-o"></i>
      </div>
    </div>
    <div class="AccountLogo">
      <div  @click.stop="uploadHeadImg">
        <img :src="userInfo.avatar" alt />
      </div>
       <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
      <h3 id="edit">点击登录</h3>
    </div>
  </div>
</template>

<script>
export default {
 
    data() {
      userInfo:''
      return {
         userInfo: {
              avatar: 'img/account/01.gif',
                        
          }
      };
    },
    
    //   methods:{
    //    init(){
    //         var _this = this;
    //         var theme=localStorage.getItem("username");
    //      _this.$refs.ygdwkgmj.innerHTML = "username";
    //    }
    //   },
    mounted() {
      console.log(1111);
      var edit = document.getElementById("edit");
      edit.onblur = function() {
        localStorage.getItem("username");
      };
      if (localStorage.getItem("username")) {
        edit.innerHTML = localStorage.getItem("username");
      }
    },
    methods:{
      // 打开图片上传
        uploadHeadImg: function () {
        this.$el.querySelector('.hiddenInput').click()
        },
        // 将头像显示
        handleFile: function (e) {
          let $target = e.target || e.srcElement
          let file = $target.files[0]
          var reader = new FileReader()
          reader.onload = (data) => {
            let res = data.target || data.srcElement
            this.userInfo.avatar = res.result
          }
          reader.readAsDataURL(file)
        },
    }
    
 
};
</script>

<style scoped>
.hiddenInput{
 display: none;
}
.AccountLogo img{
  border-radius: 50%
}
</style>



