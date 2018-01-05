import VueRouter from 'vue-router'

//导入 模板文件
import homecomponent from './components/tabbar/HomeComponent.vue'
import membercomponent from './components/tabbar/MemberComponent.vue'
import searchcomponent from './components/tabbar/SearchComponent.vue'
import shopcarcomponent from './components/tabbar/ShopcarComponent.vue'
import newslist from './components/news/NewsList.vue'
import newsinfo from './components/news/NewsInfo.vue'

var router = new VueRouter({
	routes: [
		{ path:'/',redirect: '/home'},
		{ path:'/home',component: homecomponent},
		{ path:'/member',component: membercomponent},
		{ path:'/shopcar',component: shopcarcomponent},
		{ path:'/search',component: searchcomponent},
		{ path:'/home/newslist',component: newslist},
		{ path:'/home/newsinfo/:id',component: newsinfo}
	],
	linkActiveClass: 'mui-active'
})

export default router