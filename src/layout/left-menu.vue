<template>

    <el-menu
            default-active="0"
            :unique-opened="true"
            class="el-menu-vertical">
        <!--遍历菜单内容 两种，一种有子类的，一种没子类的-->
        <template v-for="(item,index) in menuList">
            <router-link :to="item.path" v-if="!item.children&&!item.hidden" :key="index">
                <el-menu-item :index="index+''">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </router-link>

            <el-submenu :key="index" :index="index+''" v-if="item.children&&!item.hidden">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                </template>
                <template v-for="(subItem,subIndex) in item.children">
                    <router-link v-if="!subItem.hidden"
                                 :to="item.path+'/'+subItem.path" :key="subIndex">
                        <el-menu-item :index="index+'-'+subIndex">
                            <i :class="subItem.icon"></i>
                            <span>{{subItem.name}}</span>
                        </el-menu-item>
                    </router-link>
                </template>

            </el-submenu>
        </template>
    </el-menu>
</template>

<script>
    import {routes} from "../router"

    export default {
        data: function () {
            return {
                menuList: []
            }
        },
        mounted: function () {
            let menuList = routes[0];
            this.menuList = menuList.children;
            console.log(this.menuList)
        }
    }
</script>

<style scoped>
    .el-menu-vertical a {
        text-decoration: none;
    }
</style>
