<template>
    <a-row>
        <a-col :span="24">
            <div class="msg-box">
                <a-row v-for="(item, k) in msgList" :key="k">
                    <a-col :span="2">
                        <span class="avatar">
                            <a-avatar v-if="item.userId == store.user.userId">
                                <img alt="avatar" :src="store.user.pictureUrl" v-if="store.user.pictureUrl != null" />
                                <p v-else>{{ store.user.username }}</p>
                            </a-avatar>
                            <a-avatar v-if="item.userId == currentUser.userId">
                                <img alt="avatar" :src="currentUser.pictureUrl" v-if="currentUser.pictureUrl != null" />
                                <p v-else>{{ currentUser.username }}</p>
                            </a-avatar>
                        </span>
                    </a-col>
                    <a-col :span="14">
                        <div class="msg" :class="[item.userId == store.user.userId ? 'self-color': 'other-color']">
                            <p class="msg-txt">{{ item.msg }}</p>
                        </div>
                    </a-col>
                </a-row>
            </div>
            <textarea placeholder="回车发送消息" default-value="" :style="{resize: 'none', height: '19vh', width: '100%' }"
                :disabled="currentUser.userId == null" allow-clear @input="send" v-model="txt"/>
        </a-col>
    </a-row>
</template>

<script setup>
import { IconImage, IconUser, IconPen } from "@arco-design/web-vue/es/icon";
import { reactive, ref, onBeforeUnmount } from 'vue';
import { useCommonStore } from "../../store/common";

const store = useCommonStore();
const txt = ref("");
const props = defineProps({
    seller: Object
});

const currentUser = reactive({
    pictureUrl: null,
    username: props.seller.username,
    userId: props.seller.userId,
});

const msgList = reactive([]);

const send = (e) => {
    const value = txt.value;
    console.log(e.inputType)
    if ((e.inputType === "insertLineBreak" || value[value.length-1] == "\n") && value.trim().length != 0) {
        msgList.push({
            "userId": store.user.userId,
            "msg": value
        });
        ws.send(JSON.stringify({
            "toUserId": currentUser.userId,
            "msg": value
        }));
        txt.value = "";
    }
};

const ws = new WebSocket(`ws://81.71.138.10:8080/socket/${store.user.userId}`);
ws.onopen = () => {
    console.log('连接成功');
};
ws.onmessage = (event) => {
    if (event.data != "连接成功") {
        const data = JSON.parse(event.data);
        if (data.msg != undefined) {
            if (data.fromUserId == currentUser.userId) {
                msgList.push({
                    "userId": data.fromUserId,
                    "msg": data.msg
                });
            }
        }
    }
};
ws.onerror = (error) => {
    console.error('Websocket error occurred.', error);
};
ws.onclose = () => {
    console.log('Websocket connection closed.');
};
onBeforeUnmount(() => {
    ws.close()
})
</script>


<style scoped>
.chat-list {
    box-sizing: border-box;
    width: 100%;
    height: 75vh;
    padding: 0 6px;
    border: 3px solid rgb(var(--gray-2));
    overflow: scroll;
}

.flex-box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.flex-box:hover {
    background-color: rgb(var(--gray-2));
    cursor: pointer;
    transition: 0.5s;
}

.flex-box .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-right: 16px;
    color: var(--color-text-2);
    font-size: 16px;
    background-color: var(--color-fill-3);
    border-radius: 50%;
}

.flex-box .content {
    flex: 1;
    color: var(--color-text-2);
    font-size: 12px;
    line-height: 20px;
}

.msg-box {
    width: 100%;
    height: 55vh;
    overflow: scroll;
    padding: 0 10px;
}

.msg {
    border-radius: 5px;
    width: fit-content;
    margin: 20px 10px;
    padding: 10px;
    white-space: normal;
    word-break: break-all;
    overflow: hidden;
}

.msg-txt {
    display: inline-block;
    display: inline;
    zoom: 1;
    width: auto;
}

.self-color {
    background-color: aliceblue;
}

.other-color {
    background-color: rgb(238, 237, 237);
}</style>