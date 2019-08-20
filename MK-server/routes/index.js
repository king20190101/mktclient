var express = require('express');
var router = express.Router();
var fs=require('fs');



// /* GET home page. */  给首页相应的数据
router.get('/api/test', (req, res)=> {
  res.json(require("../data/tfTest.json"))
});
/* 课程选择目录页 */
router.get('/api/course', (req, res)=> {
  res.json(require("../data/gymCourse.json"))
});

/* 视频播放前一页 */
router.get('/api/CourseVideo', (req, res)=> {
  res.json(require("../data/CourseVideoDetails.json"))
});
//大专栏轮播点击进去页面
router.get('/api/zhuanlanInsidelists', (req, res)=> {
  res.json(require("../data/zhuanlanInside.json"))
});
/* 课程视频播放当前页 */
router.get('/course', (req, res)=> {
  // res.render('index', { title: 'Express' });
  res.json(require("../data/course.json"))
});






/* 换肤的请求数据 */
router.get('/api/style', (req, res)=> {
  // res.render('index', { title: 'Express' });
  res.json(require("../data/cart.json"))
});
router.post("/api/cart", (req, res) => {//将要换肤的css文件名添加
  var params = req.body;
  fs.readFile("./data/cart.json", function (err, data) {//读取json，读出来的是二进制
    if (err) {
      return console.error(err);
    }
    var dataString = data.toString();  //二进制的数据转换为字符串
    var dataJson = JSON.parse(dataString); //字符串转化为json对象

    dataJson.style.splice(0,dataJson.style.length);
    dataJson.style.push(params);  //将传来的对象push进json文件
    var str = JSON.stringify(dataJson);
    //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
    fs.writeFile("./data/cart.json", str, function (err) {
      if (err) {
        console.error(err);
      }
      console.log("切换成功，OK");
      res.json({
        "state": 1
      });
    });
  })
});



router.get("/app/goodscart", (req, res) => { //获取购物车的数据
    res.json(require("../data/goodscart"));
});

router.post("/api/goodscartt", (req, res) => { //向购物车添加数据
    var params = req.body;
    console.log(params)
    fs.readFile("./data/goodscart.json", function (err, data) {//读取json，读出来的是二进制
        if (err) {
            return console.error(err);
        }
        var dataString = data.toString();  //二进制的数据转换为字符串
        var dataJson = JSON.parse(dataString); //字符串转化为json对象
        let flag=false;
        
        dataJson.practs.push(params); //将传来的数组push进json文件
       
        var str = JSON.stringify(dataJson);
        //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile("./data/goodscart.json", str, function (err){
            if (err) {
                console.error(err);
            }
            console.log("购物车添加成功");
            res.json(require("../data/goodscart"));
        });

    })
});





//登录注册
router.post("/api/register", (req, res) => {//注册功能：将用户名密码保存至json文件
  var params = req.body;
  // console.log(params)
  fs.readFile("./data/user.json", function (err, data) {//读取json，读出来的是二进制
      if (err) {
          return console.error(err);
      }
      var dataString = data.toString();  //二进制的数据转换为字符串
      var dataJson = JSON.parse(dataString); //字符串转化为json对象
      console.log(dataJson)
      dataJson.userInfo.push(params);  //将传来的对象push进json文件
      var str = JSON.stringify(dataJson);
      //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
      fs.writeFile("./data/user.json", str, function (err) {
          if (err) {
              console.error(err);
          }
          console.log("用户注册操作，OK");
          res.json({
              "state": 1
          });
      });
  })
});

router.post("/api/register/isRepeatUser", (req, res) => {//注册功能：判断用户名是否注册过
  var params = req.body;
  fs.readFile("./data/user.json", function (err, data) {//读取json，读出来的是二进制
      if (err) {
          return console.error(err);
      }
      var dataString = data.toString();  //二进制的数据转换为字符串
      var dataJson = JSON.parse(dataString); //字符串转化为json对象
      for(var i=0;i<dataJson.userInfo.length;i++){
          if(params.username==dataJson.userInfo[i].username){
              console.log("用户名重复")
              res.json({
                  "state": 0,
              })
          }
      }
  })
});

router.post("/api/login", (req, res) => {//登录功能：查看账号和密码是否正确
  var params = req.body;
  fs.readFile("./data/user.json", function (err, data) {//读取json，读出来的是二进制
      if (err) {
          return console.error(err);
      }
      var dataString = data.toString();  //二进制的数据转换为字符串
      var dataJson = JSON.parse(dataString); //字符串转化为json对象

      let flag=false;
      for(var i=0;i<dataJson.userInfo.length;i++){
          if(params.username==dataJson.userInfo[i].username &&
              params.userpass==dataJson.userInfo[i].userpass){
              console.log("登录成功");
              flag=true;
              res.json({
                  "state": 1,
              })
          }
      }
      if(flag==false){
          console.log("登录失败")
          res.json({
              "state": 0,
          })
      }
  })
});




// 吴涛视频播放笔记
router.post("/api/note", (req, res) => {//将css写进至json文件
  var params = req.body;
  fs.readFile("./data/gymCourse.json", function (err, data) {//读取json，读出来的是二进制
      if (err) {
          return console.error(err);
      }
      var dataString = data.toString();  //二进制的数据转换为字符串
      // console.log(dataString)
      var dataJson = JSON.parse(dataString); //字符串转化为json对象
      // console.log(dataJson)
      // dataJson.style.splice(0,dataJson.style.length);
      // console.log(params)
      let sid = Number(params.sid);
      // console.log(sid)
      // console.log(dataJson.coursemain[0])//第一条课程信息对象
      // console.log(dataJson.coursemain[0].UserNoteContent)//第一一条课程信息对象的评论数组
      let noteLength = dataJson.coursemain[0].UserNoteContent.length
      console.log(noteLength)
      console.log(dataJson.coursemain.length)
      let tip = dataJson.coursemain.length
      for(let j=0;j<tip;j++){
          if(sid==j){
              for(var i=0;i<noteLength;i++){
                  if(sid == i ){
                      dataJson.coursemain[j].UserNoteContent.push(params);
                      // console.log(dataJson.coursemain[j])
                  }
              }
          }
      }


      // for(var i=0;i<noteLength;i++){
      //     if(sid == i ){
      //         dataJson.coursemain[0].UserNoteContent.push(params);
      //     }
      // }
      // console.log(dataJson)
      // dataJson.coursemain.UserNoteContent[i].push(params);

      //将传来的对象push进json文件
      var str = JSON.stringify(dataJson);
      //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
      fs.writeFile("./data/gymCourse.json", str, function (err) {
          if (err) {
              console.error(err);
          }
          console.log("上传成功，OK");
          res.json({
              "state": 1
          });
      });
  })
});








/*7.18      陈静娥 */
/*添加搜索页面的数据*/
router.post("/api/search", (req, res) => {//注册功能：将用户名密码保存至json文件
  var params = req.body;
  console.log(params)
  fs.readFile("./data/search.json", function (err, data) {//读取json，读出来的是二进制
      if (err) {
          return console.error(err);
      }
      var dataString = data.toString();  //二进制的数据转换为字符串
      var dataJson = JSON.parse(dataString); //字符串转化为json对象
      dataJson.historySearch.push(params);  //将传来的对象push进json文件
      console.log(dataJson)
      var str = JSON.stringify(dataJson);

      fs.writeFile("./data/search.json", str, function (err) {
          if (err) {
              console.error(err);
          }
          console.log("切换成功，OK");
          res.json({
              "state": 1
          });
      });
  })
});
/*获取搜索页面的数据*/
router.get('/api/searchVal', (req, res)=> {
  res.json(require("../data/search.json"))
});

/*清空搜索页面的数据*/
router.post("/api/clearSearch", (req, res) => {//注册功能：将用户名密码保存至json文件
  fs.readFile("./data/search.json", function (err, data) {//读取json，读出来的是二进制
      if (err) {
          return console.error(err);
      }
      var dataString = data.toString();  //二进制的数据转换为字符串
      var dataJson = JSON.parse(dataString); //字符串转化为json对象
      console.log(dataJson.historySearch.length)
      dataJson.historySearch.splice(0,dataJson.historySearch.length);//清空历史记录
      console.log(dataJson)
      var str = JSON.stringify(dataJson)
      fs.writeFile("./data/search.json", str, function (err) {
          if (err) {
              console.error(err);
          }
          console.log("删除成功，OK");
          res.json({
              "state": 1
          });
      });
  })
});

/*搜索页面查询页*/
router.get('/api/searchShopInfo', (req, res)=> {
  res.json(require("../data/searchShopInfo.json"))
});

















module.exports = router;
