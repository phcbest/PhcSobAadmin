<template>
    <div class="admin-login-box">
        <div class="admin-login-header-box">
            <div class="admin-login-header-center center">
                <div class="admin-login-logo">
                    博客系统 | 登录
                </div>
            </div>
        </div>
        <!--中间内容-->
        <div class="admin-login-center-box">
            <div class="center login-center-box">
                <!--                mode是动态绑定的数据对象-->
                <el-row :gutter="20" justify="center" type="flex">
                    <el-col :span="10">
                        <el-form label-position="right" label-width="100px">
                            <el-form-item label="账号" required>
                                <el-input v-model="sobUser.userName" placeholder="用户名/邮箱地址"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" required>
                                <el-input v-model="sobUser.password" placeholder="密码"></el-input>
                            </el-form-item>
                            <el-form-item label="人类验证码" required>
                                <el-input v-model="loginInfo.verifyCode" placeholder="验证码"></el-input>
                                <img :src="captchaPath" @click="updateVerifyCode" class="captcha-code">
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="doLogin">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!--底部内容-->
    </div>
</template>

<script>
    const axios = require('axios').default;

    export default {
        name: "login",
        data: function () {
            return {
                sobUser: {
                    userName: "",
                    password: "",
                },
                loginInfo: {
                    verifyCode: "",
                    from: "",
                    captcha: "",
                    captcha_key: ""
                },
                captchaPath: ''
            }
        },
        methods: {
            doLogin: function () {

            },
            updateVerifyCode: function () {
                axios
                    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                    .then(response => {
                        console.log(response)
                    });
                this.captchaPath = 'http://api.coincent.cn/user/utils/captcha?captcha_key=' + Date.now();
                console.log(this.captchaPath);
            }
        },
        mounted: function () {
            this.updateVerifyCode();
        }
    }
</script>

<style>
    /*设置首型*/
    .captcha-code {
        cursor: pointer;
        width: 100px;
        margin-left: 10px;
        /*图片居中*/
        vertical-align: middle;
        height: 40px;
    }

    .center {
        margin: 0 auto 0;
        width: 1140px;
    }

    .login-center-box .el-form-item__label {
        background: #fbfbfb;
        text-align: center;
        border-left: #e6e6e6 solid 1px;
        border-top: #e6e6e6 solid 1px;
        border-bottom: #e6e6e6 solid 1px;
    }

    .login-center-box .el-input__inner {
        border: #e6e6e6 solid 1px;
        height: 42px;
        border-radius: 0;
    }

    .login-center-box .el-input {
        width: 60%;
    }

    .login-center-box {
        border-right: 10px;
        padding: 20px;
        width: 1100px;
        height: auto;
        background: #fff;
        box-shadow: 0 1px 10px #afafaf;
    }

    .admin-login-header-box {
        height: 46px;
        background: dodgerblue;
        margin-bottom: 20px;
        width: 100%;
    }

    .admin-login-header-center {
        line-height: 46px;
    }

    .admin-login-logo {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
    }
</style>
