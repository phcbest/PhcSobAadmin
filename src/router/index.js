/*使用这个类来初始化路由和路由列表*/
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);


//登录页面
// const login = () => import("@/page/login/login")
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


const
    routes = [
        {
            path: '',
            component: baseView,
            redirect: "/index",//用于重定向
            children: [
                {
                    path: "/index",
                    component: index
                },
                {
                    path: "/content",
                    component: rightView,
                    children: [
                        {
                            path: "manage-article",
                            component: articleManage
                        }, {
                            path: "manage-comment",
                            component: commentManage
                        }, {
                            path: "manage-image",
                            component: imageManage
                        }, {
                            path: "post-article",
                            component: postArticle
                        },
                    ]
                },
                {
                    path: "/user",
                    component: rightView,
                    children: [
                        {
                            path: "list",
                            component: list
                        }, {
                            path: "email",
                            component: email
                        }, {
                            path: "info",
                            component: info
                        }, {
                            path: "reset-password",
                            component: resetPassword
                        },
                    ]
                },
                {
                    path: "/operation",
                    component: rightView,
                    children: [
                        {
                            path: "manage-category",
                            component: categoryManager
                        }, {
                            path: "loop",
                            component: loop
                        },
                    ]
                },
                {
                    path: "/settings",
                    component: rightView,
                    children: [
                        {
                            path: "friend-link",
                            component: friendLink
                        }, {
                            path: "websize-info",
                            component: websizeInfo
                        },
                    ]
                }
            ]
        },
    ];


const router = new VueRouter({
    routes: routes
});

export default router;
