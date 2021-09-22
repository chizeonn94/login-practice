"use strict"

const UserStorage = require("./UserStorage")

class User {
    constructor(body) {
        this.body = body
    }

    async login() {
        const client = this.body

        const { id, psword } = await UserStorage.getUserInfo(client.id)
        console.log('id and pswrod', id, psword)

        if (!client.id) return { success: false, message: '아이디를 입력하세요' }
        if (id) {
            if (id === client.id && psword === client.psword) {
                return { success: true }
            }
            return { success: false, message: '비밀번호가 틀렸습니다.' }
        }
        return { success: false, message: '존재하지않는 아이디 입니다.' }
    }

    register() {
        console.log('register')
        const client = this.body
        UserStorage.save(client)
    }
}

module.exports = User