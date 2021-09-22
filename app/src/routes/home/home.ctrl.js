"use strict";

const UserStorage = require("../../models/UserStorage")
const User = require("../../models/User")
const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
}

const process = {
  login: (req, res) => {
    const user = new User(req.body)
    const response = user.login()
    console.log('/////-ccd', response)
    return res.json(response)
    //  

    // response.success = false
    // response.message = 'failed login!'
    // return res.json(response)
  },
}


module.exports = {
  output,
  process
};
