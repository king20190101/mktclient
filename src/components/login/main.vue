<template>
    <div class="LoginPhone">
        <div class="first">
            <input v-model="userPhone" @input="phoneCheck()" type="text" placeholder="手机号">
        </div>
         <div>
            <p style="color:red;font-size:0.3rem">{{nameMsg}}</p>
        </div>
        <div class="second">
             <input v-model="userPass"  @input="passCheck()" type="password" placeholder="密码">
        </div>
         <div>
            <p style="color:red;font-size:0.3rem">{{passMsg}}</p>
        </div>
        <div class="third">
            <p ref="ygdwkgmj" @click="login()">登录</p>
             <van-loading v-if="bbb" color="#1989fa" size="1rem" />
        </div>
        <div class="forty">
            <p>手机短信登录</p>
            <p>忘记密码</p>
        </div>
        <div class="fifth">
            <p>无法登录</p>
            <p>社交账号登录</p>
        </div>
      
    </div>
</template>

<script>
export default {
    data(){
            return{
                userPhone:'',
                userPass:'',
                fs:'',
                checked:false,
                nameMsg:'',
                passMsg:'',
                bbb:false,
            }
        },
        methods:{
             //手机号的正则匹配
            phoneCheck(){
                var regPhone=/^1[34578]\d{9}$/;
                if(regPhone.test(this.userPhone)==true){
                    this.nameMsg='';
                    this.phone=1;
                }else if(this.userPhone==''){
                    this.nameMsg="手机号不能为空";
                   
                }else{
                    this.nameMsg='手机号格式输入错误';
                     this.$refs.ygdwkgmj.style.backgroundColor = "#b7bbbf";
                }
            },
            //密码的正则匹配
            passCheck(){
                var regPass=/^\w{6,18}$/;
                if(regPass.test(this.userPass)==true){
                    this.passMsg='';
                    this.$refs.ygdwkgmj.style.backgroundColor = "#2b333b";
                    this.pass=1;
                }else if(this.userPass==''){
                    this.passMsg="密码不能为空";
                }else{
                    this.passMsg='密码格式输入错误';
                    this.$refs.ygdwkgmj.style.backgroundColor = "#b7bbbf";
                }
            },
             login(){
                if(this.phone==1 && this.pass==1){
                    this.bbb=true;
                    let info={
                        username:this.userPhone,
                        userpass:this.userPass
                    };
                    fetch("http://localhost:3000/cart/api/login",{
                        method: "post", //传参方式
                        headers: {
                            "Content-Type": "application/json" //请求头
                        },
                        body: JSON.stringify(info) //传的参数
                    }).then(res=>{
                        res.json().then(data=>{
                            if (data.state == 0) {
                                alert("用户名或者密码错误");
                            }else{
                                alert("登录成功");
                                localStorage.setItem('username', info.username);//存储用户名
                                this.$router.push("/");
                                //将用户名，密码保存至浏览器
                            }
                        })
                    })
                }
            },


        }
      
}
</script>

<style scoped>

</style>


