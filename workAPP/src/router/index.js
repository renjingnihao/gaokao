import Vue from 'vue';
import VueRouter from 'vue-router';
import question from '../view/q1/index.vue';
import result from '../view/result/index.vue';
import home from '../view/home/index.vue';
Vue.use(VueRouter);
let routes=[
	{
		
		path:"/",
		redirect:'/home'
	},
	{
		name:'home',
		path:"/home",
		component:home,
		beforeEnter:function(to,from,next){
			//console.log(to)
			next()
		}
	},
	{
		name:'question',
		path:"/question/:step",
		component:question
	},
	{
		name:'result',
		path:"/result",
		component:result
	}
]

let router=new VueRouter({
	routes
})
router.beforeEach(function(to,from,next){
	next()
})
export default router;
