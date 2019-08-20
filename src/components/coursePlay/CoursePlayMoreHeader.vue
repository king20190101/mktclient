<template>
    <div class="WriteNote_header">
        <span @click="isShowNote">×</span>
        <span>提问</span>
    </div>
</template>

<script>
    export default {
        name: "CoursePlayMoreHeader",
        data(){
            return{
                showNode:false,
                show:false
            }
        },
        methods:{
            isShowNote(){
                this.$emit("isShowNote",this.showNode)
                console.log([this.showNode,this.show])
            },
        }

    }
</script>

<style scoped>

    /*.WriteNote_header{*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    position: relative;*/
    /*    width: 100%;*/
    /*    height: 1rem;*/
    /*}*/
    /*.WriteNote_header span:first-child{*/
    /*    font-size: .45rem;*/
    /*    font-weight: 600;*/
    /*    position: absolute;*/
    /*    left: .3rem;*/
    /*    top: .2rem;*/
    /*}*/
    /*.WriteNote_header span:last-child{*/
    /*    font-size: .36rem;*/
    /*    font-weight: 600;*/
    /*}*/
</style>