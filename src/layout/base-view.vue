<template>
    <div>
        <!--        显示内容-->
        <div class="header-part">顶部内容</div>
        <div class="content-box">
            <div class="nav">
                <router-link to="/index">首页</router-link>
                <br>
                <router-link to="/content/post-article">文章</router-link>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "base"
    }
</script>

<style>
    .header-part {
        background: aqua;
    }

    .nav {
        float: left;
        background: antiquewhite;
        height: 500px;
        width: 159px;
    }

    .content {
        width: 800px;
        height: 500px;
        background: aliceblue;
        float: left;

    }
</style>
