import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Test from '../views/Test/index';
import layout from "@/layout"

Vue.use(VueRouter);

// 静态路由
export const constantRoutes: RouteConfig[] = [
	{
		path: '/',
		name: 'Test',
		component: Test,
	},
	{
		path: '*',
		component: layout,
		redirect : '/404',
		children: [
			{
				path: '/404',
				component: () => import('@/views/error-page/404'),
			}
		]
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
