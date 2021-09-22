"use strict"

const UserStorage = require("./UserStorage")

class User {
    constructor(body) {
        this.body = body
    }

    login() {
        const { id, psword } = UserStorage.getUserInfo(this.body.id)
        if (id) {
            if (id === this.body.id && psword === this.body.psword) {
                return { success: true }
            }
            return { success: false, message: '비밀번호가 틀렸습니다.' }
        }
        return { success: false, message: '존재하지않는 아이디 입니다.' }
    }
}

module.exports = User