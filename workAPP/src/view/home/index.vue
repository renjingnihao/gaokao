<template>
<div>
     <div class="app-home">
     <router-link :to="{name:'question',params:{step:1},query:{type:1}}"><div class="like"></div></router-link>
     <router-link :to="{name:'question',params:{step:1},query:{type:0}}"><div class="wenke"></div></router-link>        
           <h1 class='isP'></h1>
           <div class="left-hand">
              <img src="../../imgs/home-left-hand.png" alt=""> 
           </div>
           <div class="right-hand">
              <img src="../../imgs/home-right-hand.png" alt="">
           </div>
           <div class="left-yes">
              <img src="../../imgs/home-icon-1.png" alt="">
           </div>
            <div class="right-no">
              <img src="../../imgs/home-icon-2.png" alt="">
           </div>
     </div> 
</div>
</template>
<script>
   export default{

   }

</script>
<style>

   .app-home{
    width: 80%;
    height:85%;
    background: url(../../imgs/home-pepole.png) no-repeat center top;
    background-size: 100% 73%;
    margin: 0 auto;
    overflow: hidden;
}
.app-home .like{
  width: 35%;
  position: absolute;
  top:35%;
  left: 17%;
  height: 10%;
  background: url(../../imgs/f-like.png)no-repeat;
  background-size: 80% 80%;
}
.app-home .wenke{
  width: 35%;
  position: absolute;
  top:33%;
  left: 58%;
  height: 10%;
  background: url(../../imgs/f-wenke.png)no-repeat;
  background-size: 80% 80%;
}
.app-home .isP{
    width: 320px;
    height: 162px;
    background: url(../../imgs/home-title.png) no-repeat;
    background-size: 43% 37%;
    margin: 37px auto 0 65px;
}
.app-home .left-hand{
    width: auto;
    height: auto;
    position: absolute;
    left: 0;
    top: 55%;
     
}
.app-home .left-hand img{
         width: 0.6rem;
         height: 0.8rem;
    
}
.app-home .right-hand{
    width: auto;
    height: auto;
    position: absolute;
    right: 0;
    top: 48%;
}
.app-home .right-hand img{
         width: 0.8rem;
         height: 1rem;
}
.left-yes{
    width: auto;
    height: auto;
    position: absolute;
    left: 20%;
    bottom: 20%;
}
.left-yes img{
   width: 0.55rem;
   height: 0.6rem;
}
.right-no{
    width: auto;
    height: auto;
    position: absolute;
    right: 20%;
    bottom: 20%;
}
.right-no img{
   width: 0.5rem;
   height: 0.48rem;
}


</style>

