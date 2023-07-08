import request from "./config";

export const getToManageList = (pageNum, pageSize) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: "/manager/commodity/view/all",
            data: {
                pageNum,
                pageSize,
            }
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export const passCommodity = (commodityId) => {
    return new Promise((resolve, reject) => {
        request({
            method: "put",
            url: `/manager/commodity/inspect/allow/${commodityId}`,
            data: {}
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export const forbidCommodity = (commodityId) => {
    return new Promise((resolve, reject) => {
        request({
            method: "put",
            url: `/manager/commodity/inspect/reject/${commodityId}`,
            data: {}
        }).then(resp => {
            resolve(resp.data);
        }).catch(err => {
            reject(err);
        })
    })
}
