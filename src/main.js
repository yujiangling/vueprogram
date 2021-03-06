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
//设置 请求根路径
Vue.http.options.root = 'http://vue.studyit.io';
Vue.http.options.emulateJSON = true;

//导入缩略图模块
import VuePreviw from 'vue-preview'
Vue.use(VuePreviw)

//导入app模块
import app from './App.vue'

//导入mint-ui模板
/*import { Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);*/
//如果要使用懒加载需要导入全部的包
import MintUi from 'mint-ui'
Vue.use(MintUi)
import 'mint-ui/lib/style.css'

//引入时间格式化的包
import moment from 'moment'
Vue.filter('dateFormate',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
	return moment(dataStr).format(pattern);
})

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
