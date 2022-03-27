//导入路由方法
import { createRouter, createWebHistory } from 'vue-router'
//导入组件
// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
//路由规则
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]
//路由创建
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router