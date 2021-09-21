"use strict"

class UserStorage{
    static #users = {
        id: ["a123", "b123", "c123"],
        name:["lea", "chris", "josh"],
        psword:["1234", "aaa", "jjj"]
      }
    
    static getUsers(...fields){
        console.log(fields)
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field]
               
            }
            return newUsers
        },{})
        return newUsers
    }
}

module.exports = UserStorage