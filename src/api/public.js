import request from "./config";

export const getCommodityList = (page) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: "/search/commodity/recommend",
            data: {
                "pageNum": page,
                "pageSize": 8
            }
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export const searchCommodityList = (keyword, page) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: "/search/commodity/list",
            data: {
                "keyword": keyword,
                "page": {
                    "pageNum": page,
                    "pageSize": 8
                }
            }
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export const getCommodity = (commodityId) => {
    return new Promise((resolve, reject) => {
        request({
            method: "get",
            url: `/search/commodity/one/${commodityId}`,
            data: {}
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}


export const addBalance = (money) => {
    return new Promise((resolve, reject) => {
        request({
            method: "put",
            url: "/balance/recharge",
            data: {
                money
            }
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export const reduceBalance = (money) => {
    return new Promise((resolve, reject) => {
        request({
            method: "put",
            url: "/balance/withdraw",
            data: {
                money
            }
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export const getChatList = () => {
    return new Promise((resolve, reject) => {
        request({
            method: "get",
            url: "/message/getList",
            data: {}
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}


