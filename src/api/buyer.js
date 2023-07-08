import request from "./config";

export const addFavorite = (commodityId) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: `/favorite/commodity/${commodityId}`,
            data: {}
        }).then(resp => {
            resolve(resp.data);                
        }).catch(err => {
            reject(err);
        })
    })
}


export const delFavorite = (commodityId) => {
    return new Promise((resolve, reject) => {
        request({
            method: "delete",
            url: `/favorite/commodity/${commodityId}`,
            data: {}
        }).then(resp => {
            resolve(resp.data);                
        }).catch(err => {
            reject(err);
        })
    })
}


export const getFavoriteList = (pageNum, pageSize) => {
    console.log(pageNum, pageSize)
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: `/favorite/commodity`,
            data: {
                pageNum,
                pageSize
            }
        }).then(resp => {
            resolve(resp.data);                
        }).catch(err => {
            reject(err);
        })
    })
}


export const addOrder = (commodityId) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: `/buyer/order/add/${commodityId}`,
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
            url: "/buyer/order/view",
            data: {}
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export const payOrder = (orderId) => {
    console.log(orderId)
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: `/buyer/order/pay/${orderId}`,
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
            url: `/buyer/order/del/${orderId}`,
            data: {}
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export const refuseOrder = (orderId) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: `/buyer/order/refuse/${orderId}`,
            data: {}
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export const confirmOrder = (orderId) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: `/buyer/order/confirm/${orderId}`,
            data: {}
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}


