<template>
    <div class="Account-box">
        <account-header></account-header>
        <account-picture></account-picture>
        <account-nav></account-nav>
        <!--底部-->
        <mk-footer/>
    </div>
</template>

<script>
import header from "../components/account/header.vue"
import picture from "../components/account/picture.vue"
import nav from "../components/account/nav.vue"
import Footer from "../components/common/Footer"
import $ from "jquery"
export default {
    components:{
        accountHeader:header,
        accountPicture:picture,
        accountNav:nav,
        "mk-footer":Footer

    },
    mounted() {
        this._show()
    },
    methods:{
        _show(){
            $(function () {
                $(".AccountHeader > div > i").eq(1).click(function () {
                    $(this).toggleClass("fa-circle-o fa-moon-o");
                    $("#app").toggleClass("header-o")
                    $(".footer").toggleClass("header-o")
                    $(".indexHeaderbox").toggleClass("header-o")
                    $(".detailpage-model-lis").toggleClass("header-o")
                })
            })
        }
    }

}
</script>

<style scoped>
    /* @import "../../public/cssb/all.css" */
</style>


