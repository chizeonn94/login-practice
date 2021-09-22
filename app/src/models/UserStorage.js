"use strict"

const fs = require("fs")
class UserStorage {


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

        //const users = this.#users

        fs.readFile("./src/databases/users.json", (err, data) => {
            if (err) throw err;
            console.log(JSON.parse(data))
            const users = JSON.parse(data)
            const keys = Object.keys(users)
            const idx = users.id.indexOf(id)
            console.log('idx >>> ', idx)
            const UserInfo = keys.reduce((previous, current) => {
                //console.log('current', current)
                //console.log('previous', previous)

                //previous[current] = this.#users[current][idx]

                return previous

            }, {})
            console.log(UserInfo)
            return UserInfo
        })

    }


}

module.exports = UserStorage