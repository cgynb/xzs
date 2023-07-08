<template>
    <a-row>
        <a-col :span="6">
            <a-row>
                <img class="avatar" alt="avatar" :src="store.user.pictureUrl" />
            </a-row>
            <a-row>
                <input style="display: none" ref="inpFile" name="file" type="file" @change="uploadPhoto" />
                <a-button :style="{ margin: '10px 30px 0px 30px' }" @click="upload">上传图片</a-button>
            </a-row>
        </a-col>
        <a-col :span="6">
            <p>用户ID：{{ store.user.userId }}</p>
            <p>用户名：{{ store.user.username }}</p>
            <p>电话号码：{{ store.user.phone }}</p>
            <p>注册时间：{{ store.user.registerAt }}</p>
        </a-col>
        <a-col :span="6">
            <p>交易数量：{{ store.user.transactionsNumber }}</p>
            <p>交易成功：{{ store.user.successNumber }}</p>
            <p>交易成功率：{{ store.user.successRate }}</p>
            <p>账户余额：{{ store.user.balance }}</p>
            <a-button status="danger" @click="logout">退出账号</a-button>
        </a-col>
        <a-col :span="6">
            <a-select :options="['用户名', '密码']" placeholder="修改信息" v-model="modifyKey" />
            <a-input :style="{ marginTop: '5px' }" placeholder="输入原密码" v-model="oldPwd" v-if="modifyKey == '密码'" />
            <a-input :style="{ marginTop: '5px' }" placeholder="输入新密码" v-model="newPwd" v-if="modifyKey == '密码'" />
            <a-input :style="{ marginTop: '5px' }" placeholder="输入新用户名" v-model="newUsername" v-if="modifyKey == '用户名'" />
            <a-button :style="{ width: '100%', marginTop: '5px' }" v-if="modifyKey != null"
                @click="handleClick">修改</a-button>
        </a-col>
    </a-row>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { Message } from "@arco-design/web-vue";
import { useRouter } from "vue-router";
import { useCommonStore } from "../../store/common";
import { modifyPwd, modifyUsername, getInfo } from "@/api/basic";

const store = useCommonStore();
const router = useRouter();

const inpFile = ref();

const modifyKey = ref(null);
const oldPwd = ref(null);
const newPwd = ref(null);
const newUsername = ref(null);

const handleClick = () => {
    switch (modifyKey.value) {
        case "用户名":
            modifyUsername(newUsername.value)
                .then((res) => {
                    if (res.code === 200) {
                        Message.info("修改成功");
                        store.user.username = newUsername.value;
                    } else {
                        Message.warning(res.msg);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    Message.error("修改失败");
                });
            break;
        case "密码":
            modifyPwd(oldPwd.value, newPwd.value)
                .then((res) => {
                    if (res.code === 200) {
                        Message.info("修改成功");
                    } else {
                        Message.warning(res.msg);
                    }
                })
                .catch((err) => {
                    Message.error("修改失败");
                });
            break;
    }
};
const upload = () => {
    inpFile.value.click();
};
const uploadPhoto = (event) => {
    let file = event.target.files[0];
    let params = new FormData();
    params.append("file", file);
    let config = {
        headers: {
            "Content-Type": "multipart/form-data",
            token: store.token,
        },
    };
    axios
        .post("http://81.71.138.10:8080/info/picture/modify", params, config)
        .then((res) => {
            getInfo()
                .then((res) => {
                    store.user = res.data;
                });
            Message.success("图片上传成功");
        })
        .catch((err) => {
            Message.error("上传头像失败");
        });
};
const logout = () => {
    store.user = null;
    store.token = null;
    store.role = null;
    router.push("/homepage");
}
</script>
<style scoped>
.avatar {
    margin: 30px 30px 10px 30px;
    border: 3px dotted;
    height: 80px;
    width: 80px;
    object-fit: cover;
}
</style>