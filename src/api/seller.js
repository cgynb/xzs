import request from "./config";

export const changePrice = (commodityId, newPrice) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: `/seller/commodity/price/${commodityId}/${newPrice}`,
            data: {}
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export const getReleaseList = () => {
    return new Promise((resolve, reject) => {
        request({
            method: "get",
            url: "/seller/released/view",
            data: {}
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export const getOrderList = () => {
    return new Promise((resolve, reject) => {
        request({
            method: "get",
            url: `/seller/order/view`,
            data: {}
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export const deliverOrder = (orderId) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: `/seller/order/deliver/${orderId}`,
            data: {}
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export const cancelOrder = (orderId) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: `/seller/order/del/${orderId}`,
            data: {}
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

