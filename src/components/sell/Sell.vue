<template>
    <a-form :model="form" :style="{ width: '75%', margin: '15%' }" @submit="handleSubmit" layout="vertical">
        <a-form-item field="title" label="标题">
            <a-input v-model="form.title" placeholder="请输入标题" />
        </a-form-item>
        <a-form-item field="game" label="游戏名称">
            <a-input v-model="form.game" placeholder="请输入游戏名称" />
        </a-form-item>
        <a-form-item field="description" label="详情描述">
            <a-input v-model="form.description" placeholder="请输入详情描述" />
        </a-form-item>
        <a-form-item field="price" label="价格">
            <a-input-number v-model="form.price" placeholder="请输入价格" />
        </a-form-item>
        <a-form-item field="accountNum" label="账号">
            <a-input v-model="form.accountNumber" placeholder="请输入账号" />
        </a-form-item>
        <a-form-item field="price" label="密码">
            <a-input v-model="form.accountPassword" placeholder="请输入密码" />
        </a-form-item>
        <a-form-item field="files" lable="上传图片">
            <input style="display: none;" name="file" type="file" @change="uploadPhoto" ref="inpFile"/>
            <a-button @click="upload">上传图片</a-button>
        </a-form-item>
        <a-form-item>
            <a-button html-type="submit" type="long">上架</a-button>
        </a-form-item>
    </a-form>
</template>
  
<script setup>
import { ref, reactive } from "vue";
import axios from "axios";
import { Message } from "@arco-design/web-vue";
import { useCommonStore } from '../../store/common';

const store = useCommonStore();
const inpFile = ref();

const form = reactive({
    title: "",
    description: "",
    price: 0,
    game: "",
    files: null,
    accountNumber: "",
    accountPassword: ""
});
const handleSubmit = (data) => {
    let params = new FormData();
    params.append("files", form.files);
    params.append("title", form.title);
    params.append("description", form.description);
    params.append("price", form.price);
    params.append("game", form.game);
    params.append("accountNumber", form.accountNumber);
    params.append("accountPassword", form.accountPassword);
    params.append("allowBargaining", 1);
    let config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'token': store.token
        }
    }
    axios.post("http://81.71.138.10:8080/seller/release", params, config)
        .then(res => {
            console.log(res.data);
            if(res.code === 200){
                Message.success("发布成功");
            }else{
                Message.error(res.msg);
            }
        })
        .catch(err => {
            Message.error("上传头像失败");
        })
};
const upload = () => {
    inpFile.value.click()
}
const uploadPhoto = (event) => {
    let file = event.target.files[0];
    form.files = file;
    Message.success("图片上传成功");
}
</script>
  