import Vue from 'vue'
import Router from 'vue-router'
/*页面组件*/
import Index from "../views/Index.vue"
/*首页nav*/
import Course from '../views/Course.vue'
import Combat from '../views/Combat.vue'
import Employment from "../views/Employment.vue"
import Search from '../views/Search'
/*分类*/
import Category from "../views/Category.vue"
import CategoryDetailPage from "../views/CategoryDetailPage.vue"

/*学习*/
import Learn from "../views/Learn.vue"

/*账号*/
import Account from "../views/Account.vue"
import Set from "../views/Set.vue"
import ShoppingCar from "../views/ShoppingCar.vue"
import Order from "../views/Order.vue"

/*登录/注册*/
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
/*支付*/
import Payment from '../views/Payment'
import path from 'path'
/*商品详情*/
import DetailsPage from '../views/DetailsPage.vue'


/*课程播放前一页 */
import CourseVideoDetails from "../views/CourseVideoDetails.vue"
/*视频播放详页 */
import coursePlay from '../views/coursePlay.vue'

/*专栏圈 点击进去 */
import zhuanlan from '../views/zhuanlan.vue'

/*大专栏轮播点击进去页面 */
import ZhuanlanInside from "../views/zhuanlanInside.vue"


/*我的学习页个人中心点击页面 */
import first from "../views/learnFirst.vue"
import second from "../views/learnSecond.vue"
import third from "../views/learnThird.vue"

/*搜索的子頁面*/
import searchRelativeContent from '../views/searchRelativeContent.vue'




import test from '../views/test'
import test1 from '../views/test1'



Vue.use(Router)

let router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/test",
          name:"Test",
      component:test,
  },
  {
      path:"/test1",
          name:"Test1",
      component:test1,
  },


    {
      path:"/",
      redirect:'/index',
    },
    {
      path:"/index",
      name:"Index",
      component:Index,
    },
    {
      path:"/category",
      name:"Category",
      component:Category,
    },
    {
      path:"/learn",
      name:"Learn",
      component:Learn,
    },
    {
      path:"/account",
      name:"Account",
      component:Account,
    },
    {
      path:"/employment",
      name:"Employment",
      component:Employment,
    },
    {
      path:"/categorydetailpage/:id",
      name:"CategoryDetailPage",
      component:CategoryDetailPage,
    },

    {
      path:"/course",
      name:"Course",
      component:Course,
    },
    {
      path:"/combat",
      name:"Combat",
      component:Combat,
    },
    {
      path:"/login",
      name:"login",
      component:Login,
    },
    {
      path:"/register",
      name:"Register",
      component:Register,
    },
    {
      path:"/search",
      name:"Search",
      component:Search,
    },
    {
      path:"/payment",
      name:"Payment",
      component:Payment,
    },
    {
      path:"/set",
      name:"Set",
      component:Set,
    },
    {
      path:"/shoppingCar",
      name:"ShoppingCar",
      component:ShoppingCar,
    },
    {
      path:"/order",
      name:"Order",
      component:Order,
    },
    {
      path:"/detailsPage",
      name:"DetailsPage",
      component:DetailsPage,
    },
    {
      path:"/courseVideoDetails",
      name:"CourseVideoDetails",
      component:CourseVideoDetails,
      meta:{
        flag:false
      }
    },
    {
      path:"/coursePlay",
      name:'coursePlay',
      component:coursePlay
    },
    {
      path:"/zhuanlan",
      name:'zhuanlan',
      component:zhuanlan
    },
    {
      path:"/zhuanlanInside",
      name:"ZhuanlanInside",
      component:ZhuanlanInside,
      meta:{
        flag:false
      }
    },
    {
      path: '/first',
      name: 'learnfirst',
      component: first
    },
    {
      path: '/second',
      name: 'learnSecond',
      component: second
    },
    {
      path: '/third',
      name: 'learnThird',
      component: third
    },
    {
      path:"/searchRelativeContent",
      name:'searchRelativeContent',
      component:searchRelativeContent
    }
    

    
  ]
})

// router.beforeEach((to,from,next)=>{

    
//       if(to.name==="login" || to.name==="Register"){
//         next()
//       }else{
//         //需要验证是否登录成功
//         if(localStorage.getItem("username")){
//             next();
//         }else{
//             next({
//               path:"/login"
//             })
//         }
//     }
//   }
// )
export default router;
