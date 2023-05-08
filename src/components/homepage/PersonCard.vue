<template>
    <a-card :style="{ height: '300px', margin: '20px' }">
        <a-row>
            <div class="avatar">
                <a-avatar :size="64">
                    <icon-user @click="handleClick" />
                    <!-- <img alt="avatar"
                        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                        @click="handleClick" /> -->
                </a-avatar>
            </div>
        </a-row>
        <a-row>
            <a-col :span="12">
                <div class="btn">
                    <a-button type="primary" shape="round" size="large" @click="changeRoute('buy')">我要买</a-button>
                </div>
            </a-col>
            <a-col :span="12">
                <div class="btn">
                    <a-button type="primary" shape="round" status="danger" size="large" @click="changeRoute('sell')">我要卖</a-button>
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
                <a-button @click="sendCaptcha" :style="{marginLeft:'10px'}">发送验证码</a-button>
            </a-form-item>
        </a-form>
        <a-form :model="passwordLoginForm" v-if="actionType == 'passwordLogin'">
            <a-form-item field="phone" label="手机号">
                <a-input v-model="passwordLoginForm.phone" />
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
                <a-button @click="sendCaptcha" :style="{marginLeft:'10px'}">发送验证码</a-button>
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
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const changeRoute = (key) => {
    switch(key){
        case 'buy':
            router.push("/buy/all")
            break
        case 'sell':
            router.push("/sell")
            break
    }
}

// logic
const actionType = ref("captchaLogin")
const sendCaptcha = () => {
    console.log("send captcha")
}
const changeActionType = (key) => {
    switch (key) {
        case '0_0':
            actionType.value = "captchaLogin"
            break
        case '0_1':
            actionType.value = "passwordLogin"
            break
        case '1':
            actionType.value = "register"
            break
    }
}
const passwordLoginForm = reactive({
    phone: '',
    password: ''
})
const captchaLoginForm = reactive({
    phone: '',
    captcha: ''
})
const registerForm = reactive({
    phone: '',
    captcha: ''
})

// modal
const visible = ref(false)
const handleClick = () => {
    visible.value = true
}
const handleBeforeOk = (done) => {
    switch(actionType){
        case "captchaLogin":
            break
        case "passwordLogin":
            break
        case "register":
            break
    }
    window.setTimeout(() => {
        /*
        TODO: 
        if login
        then 
            done()
        else
            done(false)
        */
        
        done()
    }, 3000)
}
const handleCancel = () => {
    visible.value = false
}

</script>
