"use strict"

const fs = require("fs").promises
class UserStorage {
    static #getUserInfo(data, id) {

        return fs.readFile("./src/databases/users.json")
            .then((res) => {
                const users = JSON.parse(data)
                const keys = Object.keys(users)
                const idx = users.id.indexOf(id)
                //console.log('idx >>> ', idx)
                const UserInfo = keys.reduce((previous, current) => {
                    // console.log('current', current)
                    // console.log('previous', previous)

                    previous[current] = users[current][idx]

                    return previous

                }, {})
                return UserInfo
            })
            .catch((err) => console.log(err))
    }

    static getUsers(...fields) {
        console.log(fields)
        //const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field]

            }
            return newUsers
        }, {})
        return newUsers
    }

    static getUserInfo(id) {

        return fs.readFile("./src/databases/users.json")
            .then((res) => this.#getUserInfo(res, id))
            .catch((err) => console.log(err))
    }

    static save(userInfo) {
        const data = 'a'
        fs.writeFile("./src/databases/users.json", data)

    }


}

module.exports = UserStorage