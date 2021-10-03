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
        icon: "",
        name: "",
        component: baseView,
        redirect: "/index",//用于重定向
        children: [
            {
                path: "/index",
                hidden: false,
                icon: "el-icon-s-home",
                name: "首页",
                component: index
            },
            {
                path: "/content",
                hidden: false,
                icon: "el-icon-tickets",
                name: "内容",
                component: rightView,
                children: [
                    {
                        path: "manage-article",
                        hidden: false,
                        icon: "el-icon-document",
                        name: "文章管理",
                        component: articleManage
                    }, {
                        path: "manage-comment",
                        hidden: false,
                        icon: "el-icon-chat-dot-round",
                        name: "评论管理",
                        component: commentManage
                    }, {
                        path: "manage-image",
                        hidden: false,
                        icon: "el-icon-picture-outline",
                        name: "图片管理",
                        component: imageManage
                    }, {
                        path: "post-article",
                        hidden: false,
                        icon: "el-icon-edit-outline",
                        name: "发表文章",
                        component: postArticle
                    },
                ]
            },
            {
                path: "/user",
                hidden: false,
                icon: "el-icon-user",
                name: "用户",
                component: rightView,
                children: [
                    {
                        path: "list",
                        hidden: false,
                        icon: "el-icon-s-operation",
                        name: "用户列表",
                        component: list
                    }, {
                        path: "email",
                        hidden: false,
                        icon: "el-icon-message",
                        name: "邮箱设置",
                        component: email
                    }, {
                        path: "info",
                        hidden: false,
                        icon: "el-icon-info",
                        name: "用户信息",
                        component: info
                    }, {
                        path: "reset-password",
                        hidden: false,
                        icon: "el-icon-refresh-right",
                        name: "重置密码",
                        component: resetPassword
                    },
                ]
            },
            {
                path: "/operation",
                hidden: false,
                icon: "",
                name: "运营",
                component: rightView,
                children: [
                    {
                        path: "manage-category",
                        hidden: false,
                        icon: "el-icon-folder-opened",
                        name: "分类管理",
                        component: categoryManager
                    }, {
                        path: "loop",
                        hidden: false,
                        icon: "el-icon-data-board",
                        name: "轮播图设置",
                        component: loop
                    },
                ]
            },
            {
                path: "/settings",
                hidden: false,
                icon: "el-icon-setting",
                name: "设置",
                component: rightView,
                children: [
                    {
                        path: "friend-link",
                        hidden: false,
                        icon: "el-icon-view",
                        name: "网站信息",
                        component: friendLink
                    }, {
                        path: "websize-info",
                        hidden: false,
                        icon: "el-icon-help",
                        name: "友情链接",
                        component: websizeInfo
                    },
                ]
            }
        ]
    },
    {
        path: "/login",
        hidden: false,
        icon: "",
        name: "登录",
        component: login
    }
];


const router = new VueRouter({
    routes: routes
});

export default router;
