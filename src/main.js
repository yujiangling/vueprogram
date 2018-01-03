//导入vue 模块
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

//导入app模块
import app from './App.vue'

//导入mint-ui模板
import { Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入 mui 样式
import './lib/mui/css/mui.css' 
//导入 extra 样式
import './lib/mui/css/icons-extra.css'

//导入路由模块
import router from './router.js'

var vm = new Vue({
	el: '#app',
	router,
	render: c => c(app)	
})
