import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Test from '../views/Test/index';
import Layout from "@/layout"

Vue.use(VueRouter);

export type RouteConfigType = RouteConfig & {
	hidden?: boolean
}

// 静态路由
export const constantRoutes: RouteConfigType[] = [
	{
		path: '/',
		component: Layout,
		meta: { title: '测试1', icon: 'el-icon-s-tools', noCache: true },
		children: [
			{
				path: '/',
				component: Test,
				meta: { title: '测试1', icon: 'el-icon-warning', noCache: true },
			}
		]
	},
	{
		path: '/sysmng',
		name: 'Test251',
		component: Layout,
		meta: { title: '测试4', icon: 'el-icon-user', noCache: true },
		children: [
			{
				path: "/sysmng/test",
				component: Test,
				name: 'test1621',
				meta: { title: '测试3', icon: 'alt', noCache: true },
			},
			{
				path: "/sysmng/test1",
				component: () => import('@/views/error-page/404'),
				name: 'test124124',
				meta: { title: '测试5', icon: 'app', noCache: true },
			}
		]
	},
	{
		path: '*',
		component: Layout,
		redirect: '/404',
		meta: { title: '测试2', icon: '', noCache: true },
		hidden: true,
		children: [
			{
				path: '/404',
				component: () => import('@/views/error-page/404'),
				meta: { title: '测试3', icon: '', noCache: true },
			}
		]
	},
]

const routes: RouteConfigType[] = [
	...constantRoutes
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
