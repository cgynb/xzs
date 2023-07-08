<template>
    <a-card :title="`下单时间：${item.addAt}`" v-for="item, key in orderList" :key="key">
        <template #extra>
            <a-link :href="`/#/goods/${item.commodityId}`">商品详情</a-link>
        </template>
        <a-card-meta title="订单进度">
            <template #description>
                <a-tag :color="item.color" :style="{ margin: '10px' }">{{ item.statusText }}</a-tag>
                <a-progress :steps="5" :percent="item.progress" :status="item.progressColor" :show-text="false" />
                <a-divider />
                <a-button-group type="text">
                    <a-button v-if="item.status == 0" @click="pay(item.orderId, key)"> 付款 </a-button>
                    <a-button v-if="item.status == 0" @click="cancel(item.orderId, key)" status="danger"> 取消订单 </a-button>
                    <a-button v-if="item.status == 2" @click="refuse(item.orderId, key)" status="danger"> 拒绝收货 </a-button>
                    <a-button v-if="item.status == 2" @click="confirm(item.orderId, key)" status="danger"> 确认收货 </a-button>
                </a-button-group>
            </template>
        </a-card-meta>
    </a-card>
    <a-empty v-if="orderList.length === 0" />
</template>

<script setup>
import { ref, reactive } from "vue";
import { Message } from "@arco-design/web-vue";
import { getOrderList, payOrder, cancelOrder, refuseOrder, confirmOrder } from "@/api/buyer";

const orderList = reactive([]);

const pay = (orderId, index) => {
    payOrder(orderId)
    .then(res => {
        if(res.code === 200){
            Message.success("付款成功");
            orderList[index].status = 1;
            orderList[index].progress = status2Progress(orderList[index].status);
            orderList[index].color = status2Color(orderList[index].status);
            orderList[index].statusText = status2Text(orderList[index].status);
            orderList[index].progressColor = status2ProgressColor(orderList[index].status);
            console.log(index, orderList[index].progress, orderList[index].color, orderList[index].statusText, orderList[index].progressColor);
        }else{
            Message.error(res.msg);
        }
    })
    .catch(err => {
        Message.error("付款失败，请检查网络");
    });
}

const cancel = (orderId, index) => {
    cancelOrder(orderId)
    .then(res => {
        if(res.code === 200){
            Message.success("取消订单成功");
            orderList[index].status = 3;
            orderList[index].progress = status2Progress(orderList[index].status);
            orderList[index].color = status2Color(orderList[index].status);
            orderList[index].statusText = status2Text(orderList[index].status);
            orderList[index].progressColor = status2ProgressColor(orderList[index].status);
        }else{
            Message.error(res.msg);
        }
    })
    .catch(err => {
        Message.error("取消订单失败，请检查网络");
    });
}

const refuse = (orderId, index) => {
    refuseOrder(orderId)
    .then(res => {
        if(res.code === 200){
            Message.success("拒收成功");
            orderList[index].status = 6;
            orderList[index].progress = status2Progress(orderList[index].status);
            orderList[index].color = status2Color(orderList[index].status);
            orderList[index].statusText = status2Text(orderList[index].status);
            orderList[index].progressColor = status2ProgressColor(orderList[index].status);
        }else{
            Message.error(res.msg);
        }
    })
    .catch(err => {
        Message.error("操作失败，请检查网络");
    });
}
const confirm = (orderId, index) => {
    confirmOrder(orderId)
    .then(res => {
        if(res.code === 200){
            Message.success("确认收货成功");
            orderList[index].status = 7;
            orderList[index].progress = status2Progress(orderList[index].status);
            orderList[index].color = status2Color(orderList[index].status);
            orderList[index].statusText = status2Text(orderList[index].status);
            orderList[index].progressColor = status2ProgressColor(orderList[index].status);
        }else{
            Message.error(res.msg);
        }
    })
    .catch(err => {
        Message.error("操作失败，请检查网络");
    });
}
const status2ProgressColor = (status) => {
    /*
    primary 0, 1, 2
    success 7
    danger 3, 4, 6
    */
    let color = 'primary';
    switch (status) {
        case 0:
            color = 'primary';
            break;
        case 1:
            color = 'primary';
            break;
        case 2:
            color = 'primary';
            break;
        case 3:
            color = 'danger';
            break;
        case 4:
            color = 'danger';
            break;
        case 6:
            color = 'danger';
            break;
        case 7:
            color = 'success';
            break;
    }
    return color;
};
const status2Color = (status) => {
    /*
    arcoblue 0, 1, 2
    green 7
    red 3, 4, 6
    */
    let color = 'arcoblue';
    switch (status) {
        case 0:
            color = 'arcoblue';
            break;
        case 1:
            color = 'arcoblue';
            break;
        case 2:
            color = 'arcoblue';
            break;
        case 3:
            color = 'red';
            break;
        case 4:
            color = 'red';
            break;
        case 5:
            color = 'red';
            break;
        case 6:
            color = 'red';
            break;
        case 7:
            color = 'green';
            break;
    }
    return color;
};
const status2Progress = (status) => {
    /*
    0.2 买家下单：0,
    0.4买家付款：1（3
    0.6卖家发货：2（4
    0.8买家验货：6
    1买家确认：7
    */
    let progress = 0;
    switch (status) {
        case 0:
            progress = 0.2;
            break;
        case 1:
            progress = 0.4;
            break;
        case 2:
            progress = 0.6;
            break;
        case 3:
            progress = 0.4;
            break;
        case 4:
            progress = 0.6;
            break;
        case 6:
            progress = 0.8;
            break;
        case 7:
            progress = 1;
            break;
    }
    return progress;
};
const status2Text = (status) => {
    const statusMap = {
        0: "未支付",
        1: "已支付",
        2: "已发货",
        3: "买家取消订单",
        4: "卖家取消订单",
        5: "异常订单",
        6: "买家拒绝收货",
        7: "订单已完成",
    };
    return statusMap[status];
}
getOrderList()
    .then(res => {
        if(res.code === 200){
            for (let item of res.data) {
                item.progress = status2Progress(item.status);
                item.color = status2Color(item.status);
                item.statusText = status2Text(item.status);
                item.progressColor = status2ProgressColor(item.status);
                orderList.push(item);
            }
        }else{
            Message.error(res.msg);
        }
    })
    .catch(err => {
        Message.error("获取订单列表失败，请检查网络");
    })

</script>