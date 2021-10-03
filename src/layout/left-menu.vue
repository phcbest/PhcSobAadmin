<template>

    <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo">
        <el-menu-item index="2">
            <i class="el-icon-s-home  "></i>
            <span slot="title">首页</span>
        </el-menu-item>

        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <el-menu-item index="1-1">
                <i class="el-icon-user"/>
                <span slot="title">选项1</span>
            </el-menu-item>
            <el-menu-item index="1-2">
                <i class="el-icon-menu"/>
                <span slot="title">选项2</span>
            </el-menu-item>
            <el-menu-item index="1-3">
                <i class="el-icon-star-on"/>
                <span slot="title">选项3</span>
            </el-menu-item>
        </el-submenu>


    </el-menu>
</template>

<script>
    import {routes} from "../router"

    export default {
        mounted: function () {
            let children = routes[0].children;
            console.log(children)
        }
    }
</script>

<style scoped>

</style>
