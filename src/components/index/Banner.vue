<template>
    <div class="indexBanner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../../public/img/index/l2.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../../public/img/index/l3.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../../public/img/index/l4.png" alt=""></div>
                <div class="swiper-slide"><img src="../../../public/img/index/l5.png" alt=""></div>
                <div class="swiper-slide"><img src="../../../public/img/index/l6.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../../public/img/index/l7.jpg" alt=""></div>
            </div>
            <div class="swiper-pagination " id='buttes'></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        mounted(){
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: true,//可选选项，自动滑动

                loop: true, // 循环模式选项，true 循环播放
                observer: true,//实时检测，动态更新
                pagination: {
                    el: '.swiper-pagination',
                    type: 'custom',
                    autoplayDisableOnInteraction : false,
                    renderCustom: function (swiper, current, total) {
                        var paginationHtml = " ";
                        for (var i = 0; i < total; i++) {
                            if (i === (current - 1)) {
                                paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                            }else{
                                paginationHtml += '<span class="swiper-pagination-customs"></span>';
                            }
                        }
                        return paginationHtml;
                    },
                }
            });

        }
    }
</script>

<style scoped>


</style>





