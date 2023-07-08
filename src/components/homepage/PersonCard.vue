<template>
    <a-card :style="{ height: '300px', margin: '20px' }">
        <a-row>
            <div class="avatar">
                <a-avatar :size="64" v-if="store.user === null">
                    <icon-user @click="handleClick" />
                </a-avatar>
                <a-avatar :size="64" v-if="store.user !== null && store.user.pictureUrl != null">
                    <img :alt="store.user.username" :src="store.user.pictureUrl" @click="handleClick"
                    onerror="(e) => { console.log('ljlj');e.target.src='https://c-ssl.dtstatic.com/uploads/blog/202207/09/20220709150824_97667.thumb.1000_0.jpg'}" />
                </a-avatar>
                <a-avatar :size="64" :style="{ backgroundColor: '#14a9f8' }"
                    v-if="store.user !== null && store.user.pictureUrl == null">
                    {{ store.user.username }}
                </a-avatar>
            </div>
        </a-row>
        <a-row>
            <a-col :span="12">
                <div class="btn">
                    <a-button type="primary" shape="round" size="large" @click="roll">我要买</a-button>
                </div>
            </a-col>
            <a-col :span="12">
                <div class="btn">
                    <a-button type="primary" shape="round" status="danger" size="large"
                        @click="changeRoute('sell')">我要卖</a-button>
                </div>
            </a-col>
        </a-row>
    </a-card>
    <a-modal v-model:visible="visible" title="登录/注册" @cancel="handleCancel" @before-ok="handleBeforeOk">
        <div class="menu">
            <a-menu mode="horizontal" :default-selected-keys="['0_1']" @menu-item-click="changeActionType">
                <a-sub-menu key="0">
                    <template #title>登录</template>
                    <a-menu-item key="0_0">验证码登录</a-menu-item>
                    <a-menu-item key="0_1">密码登录</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="1">注册</a-menu-item>
            </a-menu>
        </div>
        <a-form :model="captchaLoginForm" v-if="actionType == 'captchaLogin'">
            <a-form-item field="phone" label="手机号">
                <a-input v-model="captchaLoginForm.phone" />
            </a-form-item>
            <a-form-item field="captcha" label="验证码">
                <a-input v-model="captchaLoginForm.captcha" />
                <a-button @click="sendCaptcha" :style="{ marginLeft: '10px' }">发送验证码</a-button>
            </a-form-item>
        </a-form>
        <a-form :model="passwordLoginForm" v-if="actionType == 'passwordLogin'">
            <a-form-item field="username" label="用户名">
                <a-input v-model="passwordLoginForm.username" />
            </a-form-item>
            <a-form-item field="password" label="密码">
                <a-input v-model="passwordLoginForm.password" />
            </a-form-item>
        </a-form>
        <a-form :model="registerForm" v-if="actionType == 'register'">
            <a-form-item field="phone" label="手机号">
                <a-input v-model="registerForm.phone" />
            </a-form-item>
            <a-form-item field="captcha" label="验证码">
                <a-input v-model="registerForm.captcha" />
                <a-button @click="sendCaptcha" :style="{ marginLeft: '10px' }">发送验证码</a-button>
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<style scoped>
.avatar {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 100px;
    cursor: pointer;
}

.btn {
    width: 100%;
    display: flex;
    justify-content: center;
}

.menu {
    box-sizing: border-box;
    width: 100%;
    background-color: var(--color-neutral-2);
}
</style>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import {
    loginByPwd,
    loginByCaptcha,
    register,
    getCaptcha,
    getInfo,
} from "../../api/basic";
import { Message } from "@arco-design/web-vue";
import { useCommonStore } from "../../store/common";

const router = useRouter();
const store = useCommonStore();
const changeRoute = (key) => {
    switch (key) {
        case "buy":
            router.push("/buy/all");
            break;
        case "sell":
            router.push("/sell");
            break;
    }
};

// logic
const actionType = ref("captchaLogin");
const sendCaptcha = () => {
    switch (actionType.value) {
        case "captchaLogin":
            getCaptcha(captchaLoginForm.phone, "codeLogin")
                .then((res) => {
                    Message.info("验证码已发送");
                })
                .catch((err) => {
                    Message.error("验证码发送失败");
                });
            break;
        case "register":
            getCaptcha(registerForm.phone, "register")
                .then((res) => {
                    Message.info("验证码已发送");
                })
                .catch((err) => {
                    Message.error("验证码发送失败");
                });
            break;
    }
};
const changeActionType = (key) => {
    switch (key) {
        case "0_0":
            actionType.value = "captchaLogin";
            break;
        case "0_1":
            actionType.value = "passwordLogin";
            break;
        case "1":
            actionType.value = "register";
            break;
    }
};
const passwordLoginForm = reactive({
    username: "",
    password: "",
});
const captchaLoginForm = reactive({
    phone: "",
    captcha: "",
});
const registerForm = reactive({
    phone: "",
    captcha: "",
});

// modal
const visible = ref(store.token == null);
const handleClick = () => {
    visible.value = true;
    if (store.user != null) {
        router.push("/user");
    }
};
const handleBeforeOk = (done) => {
    switch (actionType.value) {
        case "captchaLogin":
            console.log("cpl", captchaLoginForm.captcha, captchaLoginForm.phone);
            loginByCaptcha(captchaLoginForm.phone, captchaLoginForm.captcha)
                .then((res) => {
                    console.log(res);
                    getInfo()
                        .then((res) => {
                            store.user = res.data;
                        })
                        .catch((err) => {
                            Message.error("登录失败，请重新尝试");
                        });
                })
                .catch((err) => {
                    Message.error("登录失败，请重新尝试");
                });
            break;
        case "passwordLogin":
            console.log("pwl", passwordLoginForm.username, passwordLoginForm.password);
            loginByPwd(passwordLoginForm.username, passwordLoginForm.password)
                .then((res) => {
                    console.log(res);
                    if(res.code === 200){
                        getInfo()
                            .then((res) => {
                                if(res.code === 200){
                                    Message.success("登陆成功");
                                    store.user = res.data;
                                }else{
                                    Message.error(res.msg);
                                }
                            })
                            .catch((err) => {
                                Message.error("登录失败，请重新尝试");
                            });
                    }else{
                        Message.error(res.msg)
                    }
                })
                .catch((err) => {
                    Message.error("登录失败，请重新尝试");
                });
            break;
        case "register":
            console.log("reg", registerForm.phone, registerForm.captcha);
            register(registerForm.phone, registerForm.captcha)
                .then((res) => {
                    console.log(res);
                    Message.info(`初始密码为123456，用户名为${res.data.username}`);
                    Message.info("个人信息可在个人主页进行修改");
                })
                .catch((err) => {
                    Message.error("注册失败，请重新尝试");
                });
            break;
    }
    done();
};
const handleCancel = () => {
    if(store.token == null){
        Message.info("请登录");
        visible.value = true;
    }else{
        visible.value = false;
    }
    return false;
};

const roll = () => {
    window.scrollByPages(1);
}
</script>
