<template>
    <div>
        <el-container>
            <el-header id="admin-header-box">
                <top-header></top-header>
            </el-header>
            <el-container>
                <el-aside id="left-menu-list-box" width="200px">
                    <left-menu/>
                </el-aside>
                <el-container>
                    <el-main>
                        <div class="content">
                            <router-view></router-view>
                        </div>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        //生命周期
        mounted: function () {
            //动态设置侧边菜单栏的高度
            let leftMenuLBox = document.getElementById("left-menu-list-box");
            let adminHeaderBox = document.getElementById("admin-header-box");
            if (leftMenuLBox && adminHeaderBox) {
                leftMenuLBox.style.height = (window.innerHeight - adminHeaderBox.offsetHeight) + 'px';
            }
        }
    }
</script>

<style>
    .el-header {
        background-color: dodgerblue;
        line-height: 46px;
        height: 46px !important;
    }

    .el-aside {
        border-right: aliceblue solid 1px;
        line-height: 100px;
    }


</style>
