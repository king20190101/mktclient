<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>
<script>
  export default {
    name:"App",
  created(){
    (function(){
        fetch('http://localhost:3000/cart/api/style')
          .then(response => response.json())//解析为可读数据
          .then(data => { 
            document.getElementById("change").href = data.style[0].style})//执行结果是 resolve就调用then方法
          .catch(err => console.log("Oh, error", err))//执行结果是 reject就调用catch方法
      })();
    }
  }
</script>

<style lang="scss">
  #app{
    height:100%;
    display:flex;
    flex-direction: column;
    overflow-x:hidden;
  }
</style>
