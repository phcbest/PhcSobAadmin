/*使用这个类来初始化路由和路由列表*/
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);


//登录页面
const login = () => import("@/page/login/login")
//内容部分
const articleManage = () => import("@/page/content/manage-article")
const commentManage = () => import("@/page/content/manage-comment")
const imageManage = () => import("@/page/content/manage-image")
const postArticle = () => import("@/page/content/post-article")
//首页
const index = () => import("@/page/dashboard/index")
//运营
const loop = () => import("@/page/operation/loop")
const categoryManager = () => import("@/page/operation/manage-category")
//设置
const friendLink = () => import("@/page/settings/friend-link")
const websizeInfo = () => import("@/page/settings/websize-info")
//用户
const email = () => import("@/page/user/email")
const info = () => import("@/page/user/info")
const list = () => import("@/page/user/list")
const resetPassword = () => import("@/page/user/reset-password")
//布局
const baseView = () => import("@/layout/base-view")
const rightView = () => import("@/layout/right-view")


export const routes = [
    {
        path: '',
        hidden: false,
        component: baseView,
        redirect: "/index",//用于重定向
        children: [
            {
                path: "/index",
                hidden: false,
                component: index
            },
            {
                path: "/content",
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: "manage-article",
                        hidden: false,
                        component: articleManage
                    }, {
                        path: "manage-comment",
                        hidden: false,
                        component: commentManage
                    }, {
                        path: "manage-image",
                        hidden: false,
                        component: imageManage
                    }, {
                        path: "post-article",
                        hidden: false,
                        component: postArticle
                    },
                ]
            },
            {
                path: "/user",
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: "list",
                        hidden: false,
                        component: list
                    }, {
                        path: "email",
                        hidden: false,
                        component: email
                    }, {
                        path: "info",
                        hidden: false,
                        component: info
                    }, {
                        path: "reset-password",
                        hidden: false,
                        component: resetPassword
                    },
                ]
            },
            {
                path: "/operation",
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: "manage-category",
                        hidden: false,
                        component: categoryManager
                    }, {
                        path: "loop",
                        hidden: false,
                        component: loop
                    },
                ]
            },
            {
                path: "/settings",
                hidden: false,
                component: rightView,
                children: [
                    {
                        path: "friend-link",
                        hidden: false,
                        component: friendLink
                    }, {
                        path: "websize-info",
                        hidden: false,
                        component: websizeInfo
                    },
                ]
            }
        ]
    },
    {
        path: "/login",
        hidden: false,
        component: login
    }
];


const router = new VueRouter({
    routes: routes
});

export default router;
