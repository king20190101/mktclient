<template>
    <!--  头部-->
    <div class="indexHeaderbox">
        <div class="indexHeader">
            <router-link
                    to="./search"
                    class="indexHeaderFind">
                <span class="fa fa-search "></span>
                <div class="swiper-container1 ">
                    <div class="swiper-wrapper c">
                        <div class="swiper-slide " >算法 · Vue.js · Python</div>
                        <div class="swiper-slide">面试 · 算法 · Vue.js</div>
                        <div class="swiper-slide ">小程序 · 毕设 · react</div>
                        <div class="swiper-slide ">Go · 小程序 · Python</div>
                        <div class="swiper-slide">Python · Go · 小程序</div>
                    </div>
                </div>
            </router-link>
            <router-link
                to="./login"
            >
                <span class="iconfont icon-shejiao"></span>
            </router-link>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    // import 'swiper/dist/css/swiper.css'
    export default {
        name:"App",
        data () {
            return {
                swiper: null
            }
        },
        mounted () {
            this.swiper= new Swiper('.swiper-container1', {
                direction: 'vertical',

                loop:true,
                autoplay:true,
                spaceBetween:12
            })
        }
    }
</script>

<style scoped>
    @import '../../../node_modules/swiper/dist/css/swiper.css';
    /* @import '../../assets/css/index.css'; */

</style>

