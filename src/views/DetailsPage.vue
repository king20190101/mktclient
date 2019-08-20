<template>
    <div>
        <DetailsPageheaders/>
        <DetailsPageSection :arr="arr"/>
        <DetailsPageFooter :arr="arr" />
    </div>
</template>


<script>
import DetailsPageheaders from "../components/DetailsPage/DetailsPageheaders"
import DetailsPageSection from "../components/DetailsPage/DetailsPageSection"
import DetailsPageFooter from "../components/DetailsPage/DetailsPageFooter"
export default {
    name:"DetailsPage",
    components:{
        DetailsPageheaders,
        DetailsPageSection,
        DetailsPageFooter
    },
    data(){
        return{
            str:{},
            practs:{},
            arr:[]
           
        }
    },
    created(){
        let {id}=this.$route.query;
       // let {name}=this.$route.query;
        this.str=id;
        this.practs=this.str.split(",");
        this.arr.push(this.practs);
        //console.log(this.arr)
        //console.log(this.practs);
        //console.log(this.str);
       
    }
}
</script>


<style scoped>
    @import "../assets/css/DetailsPage.css";

</style>