import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Test from '../views/Test/index';

Vue.use(VueRouter);

// 静态路由
export const constantRoutes : RouteConfig[] = [
	{
		path: '/',
		name: 'Test',
    component: Test,
	},
	{
		path: '*',
		component: () => import('@/views/error-page/404'),
		meta:{title: '页面不存在',icon:''},
		// hidden: true
	},
]

const routes: RouteConfig[] = [
  ...constantRoutes
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
