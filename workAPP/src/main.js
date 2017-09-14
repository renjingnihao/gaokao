import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import axios from 'axios'
import router from './router/index.js';
Vue.prototype.$http =axios

Vue.use(Vuex);
let store = new Vuex.Store({
	state:{
		question:null,
		selected_question:[]
	},
	mutations:{
		set_question:function(state,data){
           state.question = data
		},
		set_selected_question:function(state,type){

			let arr=[];
			let {question}=state;

			function getFore(arr){
	            let brr=[];
	            for(let i=0;i<4;i++){
	              let tmp=random(0,arr.length);
	              if(brr.indexOf(tmp)==-1){
	                brr.push(tmp)
	              }else{
	                i--;
	              }
	            }
	           // console.log(brr)
	            return [arr[brr[0]],arr[brr[1]],arr[brr[2]],arr[brr[3]]]
	        }
	        function random(min,max){
	            return Math.floor(Math.random()*(max-min))
	        }

			if(type=='liberal'){				
				Object.values(question).forEach((val,idx)=>{
					if(val.type!==1){
						arr.push(val)
					}
				})

			}
			if(type=='science'){
				Object.values(question).forEach((val,idx)=>{
					if(val.type==1 || val.type==2){
						arr.push(val)
					}
				})
				//return arr;
			}
			console.log(getFore(arr))
			state.selected_question = getFore(arr);
		}
	},
	actions:{
		get_question:function({commit},data){
          commit('set_question',data)
		}
	}
	/*getters:{
		get_question:function({question}){
			let arr=[];
            
          function get4from(arr){
               let tmp_arr= []
               for (let i=0;i<4;i++){
               	let tmp =this.random(0,arr,length);
               	  if(tmp_arr.indexOf(tmp)==-1){
               	  	 tmp_arr.push(tmp)
               	  }else{
               	  	i--;
               	  }
               }
               console.log(tmp_arr)
               return [arr[tmp_arr[0]],arr[tmp_arr[1]],arr[tmp_arr[2]],arr[tmp_arr[3]]]
    		},
    		function random(min,max){
    			return Math.floor(Math.random()*max-min+1)
    		}


			if(type="liberal"){
					
				Object.values(question).forEach((val)=>{
					if(val.type !== 1 ){
						 arr.push(val)
					} 
				})
				//console.log(Object.values(question))
				
			}
			if(type='science'){
	                Object.values(question).forEach((val)=>{
					if(val.type == 1 || val.type ==2){
						 arr.push(val)
					} 
				})
			}

			return get4from(arr)
			
		},
		get_sicience:function({question}){
             let arr=[];
           

		}
	}*/
})

new Vue({
  el: '#app',
  beforeCreate:function(){
  	this.$http.get('./src/service/question.json').then((res)=>{
  		//console.l og(res.data)
  		this.$store.dispatch('get_question',res.data)
  	})
  },
  store:store,
  router,
  render: h => h(App)
})


