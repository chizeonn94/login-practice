"use strict";

const fs = require("fs").promises;
class UserStorage {
  static #getUserInfo(data, id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((res) => {
        const users = JSON.parse(data);
        const keys = Object.keys(users);
        const idx = users.id.indexOf(id);
        //console.log('idx >>> ', idx)
        const UserInfo = keys.reduce((previous, current) => {
          // console.log('current', current)
          // console.log('previous', previous)

          previous[current] = users[current][idx];

          return previous;
        }, {});
        return UserInfo;
      })
      .catch((err) => console.log(err));
  }
  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) {
      return users;
    }
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/databases/users.json")
      .then((res) => this.#getUsers(res, isAll, fields))
      .catch((err) => console.log(err));
    console.log(fields);
    //const users = this.#users
  }

  static getUserInfo(id) {}

  static async save(userInfo) {
    const users = await this.getUsers(true);
    console.log("//////", users);
    //fs.writeFile("./src/databases/users.json", data)
    if (!users.id.includes(userInfo.id)) {
      users.id.push(userInfo.id);
      users.name.push(userInfo.name);
      users.psword.push(userInfo.psword);
      fs.writeFile("./src/databases/users.json", JSON.stringify(users));
      return { success: true };
    } else {
      console.log("aleady exists");
      throw "이미 존재하는 아이디 입니다. ";
    }
  }
}

module.exports = UserStorage;
