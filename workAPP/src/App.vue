<template>
  <div id="app">
   <router-view class="test"></router-view>
   <mask-view ref="mark"></mask-view>
     <router-link to="/q1"><div class="like"></div></router-link>
     <router-link to="/q2"><div class="wenke"></div></router-link>  
  </div>
</template>

<script>
import  './css/reset.css';
import maskView from "../components/glocal_mask.vue"
import VueRouter from "vue-router"
export default {
  name: 'app',
  components:{
    "mask-view":maskView
  },
  mounted:function(){
    console.log(this.$refs.mark)
    /*setTimeout(()=>{
       this.$refs.mark.show();
    },1000)*/
  },
/*  watch:{
    "$route":function(n){
        if(n.name=="question"){
          this.$refs.mark.show();
        }else{
          this.$refs.mark.hide();
        }
    }
  }*/
 
}
</script>

<style>
html,body{
   width: 100%;
   height: 100%;
   overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
   background:url('./imgs/bg.jpg') no-repeat;
  /*   height:1390px; */
    background-size:100% 100%;
     position: relative;
    overflow: hidden;
}
.test{
  width: 100%;
   height: 100%;
}

</style>
