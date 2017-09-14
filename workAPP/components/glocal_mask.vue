<template>
	<div class="mark" :class="{'active':isActive}">
	  <p> loading...</p>
	</div>
</template>
<script>
	export default {
         name:'mark-view',
         data:function(){
         	return {
         		isActive:false
         	}
         },
         mounted(){
           this.isActive = this.$store.state.mask_active;
         }, 
         methods:{
         	show(){
         		this.isActive = true;
         	},
         	hide(){
         		this.isActive = !1;
         	}
         }
	}
</script>
<style>
  .mark{
  	 position: absolute;
  	 top:0px;
  	 color: #fff;
  	 left: 0px;
  	 width: 100%;
  	 height: 100%;
  	 background:#333;
  	 opacity: 0.5;
  	 display: none;
  }
	
 .active{
 	 display: block;
 }
</style>