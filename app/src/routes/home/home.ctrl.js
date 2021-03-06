"use strict";

const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");
const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },

  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    console.log("/////-ccd", response);
    return res.json(response);
  },

  register: async (req, res) => {
    console.log("click");
    const user = new User(req.body);
    const response = await user.register();
    //console.log('/////-ccd', response)
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
