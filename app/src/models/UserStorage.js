"use strict"

class UserStorage {
    static #users = {
        id: ["a123", "b123", "c123"],
        name: ["lea", "chris", "josh"],
        psword: ["1234", "aaa", "jjj"]
    }

    static getUsers(...fields) {
        console.log(fields)
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field]

            }
            return newUsers
        }, {})
        return newUsers
    }

    static getUserInfo(id) {
        const keys = Object.keys(this.#users)
        const idx = this.#users.id.indexOf(id)
        console.log('idx >>> ', idx)
        const UserInfo = keys.reduce((previous, current) => {
            console.log('current', current)
            console.log('previous', previous)

            previous[current] = this.#users[current][idx]

            return previous

        }, {})
        console.log(UserInfo)
        return UserInfo
    }
}

module.exports = UserStorage