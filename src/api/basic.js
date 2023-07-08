import request from "./config";

export const getCaptcha = (phone, type) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: "/getCode",
            data: {
                phone,
                type
            }
        }).then(resp => {
            resolve(resp.data);                
        }).catch(err => {
            reject(err);
        })
    })
}


export const register = (phone, code) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: "/register",
            data: {
                phone,
                code
            }
        }).then(resp => {
            resolve(resp.data);                
        }).catch(err => {
            reject(err);
        })
    })
}


export const loginByPwd = (username, password) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: "/login",
            data: {
                username,
                password
            }
        }).then(resp => {
            resolve(resp.data);                
        }).catch(err => {
            reject(err);
        })
    })
}


export const resetPwd = (phone, code) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: "/forgetpwd",
            data: {
                phone,
                code
            }
        }).then(resp => {
            resolve(resp.data);                
        }).catch(err => {
            reject(err);
        })
    })
}


export const loginByCaptcha = (phone, code) => {
    return new Promise((resolve, reject) => {
        request({
            method: "post",
            url: "/login/code",
            data: {
                phone,
                code
            }
        }).then(resp => {
            resolve(resp.data);                
        }).catch(err => {
            reject(err);
        })
    })
}

export const getInfo = () => {
    return new Promise((resolve, reject) => {
        request({
            method: "get",
            url: "/info/view",
            data: {}
        }).then(resp => {
            resolve(resp.data);                
        }).catch(err => {
            reject(err);
        })
    })
}

export const modifyUsername = (newUsername) => {
    return new Promise((resolve, reject) => {
        request({
            method: "put",
            url: "/info/username/modify",
            data: {
                newUsername
            }
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            reject(err);
        })
    })
}

export const modifyPwd = (oldPassword, newPassword) => {
    console.log("f", oldPassword, newPassword)
    return new Promise((resolve, reject) => {
        request({
            method: "put",
            url: "/info/password/modify/byPassword",
            data: {
                oldPassword,
                newPassword
            }
        }).then(resp => {
            resolve(resp.data)
        }).catch(err => {
            reject(err);
        })
    })
}
