<template>
    <div class="RegisterPhone">
        <div class="first">
            <span>+86</span>
            <i class="fa fa-chevron-down"></i>
            <input v-model="userPhone" @input="phoneCheck()"  @blur="isRepeatUser()"  type="text" placeholder="手机号">
        </div>
         <div>
            <p style="color:red;font-size:0.3rem">{{nameMsg}}</p>
        </div>
        <div class="box">
                    密码：<input v-model="userPass"  @input="passCheck()" type="password" name="" placeholder="输入密码">
        </div>
         <div>
                    <p style="color:red;font-size:0.3rem">{{passMsg}}</p>
                </div>
        <div class="second">
            <p ref="ygdwkgmj" @click="register">注册</p>
             
        </div>
        <div class="third">
            <span>登录/注册即视为同意</span>
            <i>慕课网注册协议</i>
        </div>
    </div>
</template>

<script>
export default {
     data(){
            return{
                userPhone:'', //输入用户名
                userPass:'',  //输入密码
                nameMsg:'',  //用户名输错提示信息
                passMsg:'',  //密码输错提示信息
                
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
                    this.nameMsg='手机号不正确';
                    this.$refs.ygdwkgmj.style.backgroundColor = "#b7bbbf";
                }
            },
            //密码的正则匹配
            passCheck(){
                var regPass=/^\w{6,18}$/;
                if(regPass.test(this.userPass)==true){
                    this.$refs.ygdwkgmj.style.backgroundColor = "#2b333b";
                    this.passMsg='';
                    this.pass=1;
                }else if(this.userPass==''){
                    this.passMsg="密码不能为空";
                }else{
                    this.passMsg='密码输入错误';
                    this.$refs.ygdwkgmj.style.backgroundColor = "#b7bbbf";
                }
            },
            //注册判断用户名和密码是否正确
            register(){
              
                    if(this.checkCode==this.codeDate && this.phone==1 && this.pass==1){
                        
                        let info={
                            username:this.userPhone,
                            userpass:this.userPass
                        };

                        fetch("http://localhost:3000/cart/api/register", {
                            method: "post", //传参方式
                            headers: {
                                "Content-Type": "application/json" //请求头
                            },
                            body: JSON.stringify(info) //传的参数
                        }).then(res => {
                            res.json().then(data => {
                                if (data.state == 1) {
                                    alert("注册成功");
                                    this.$router.push("/login");
                                }
                            });
                        });

                    }
                
                },
              
            
            //注册判断是否有重复的用户名
            isRepeatUser(){
                let info = {
                    username: this.userPhone
                };
                fetch("http://localhost:3000/cart/api/register/isRepeatUser", {
                    method: "post", //传参方式
                    headers: {
                        "Content-Type": "application/json" //请求头
                    },
                    body: JSON.stringify(info) //传的参数
                }).then(res => {
                    res.json().then(data => {
                        console.log(data.state);
                        if (data.state == 0) {
                            this.nameMsg = "手机号已经注册了";
                            this.phone=0;
                        } else {
                            this.nameMsg = "";
                            this.phone=1;
                        }
                    });
                });
            }
        }
}
</script>

<style scoped>

</style>


