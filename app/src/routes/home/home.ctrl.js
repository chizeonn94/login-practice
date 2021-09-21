"use strict";

const users = {
  id:["lea", "chris", "josh"],
  psword:["1234", "aaa", "jjj"]
}

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
}

const process = {
  login : (req, res) => {
     console.log('bbb',req.body);
    const id = req.body.id;
    const psword = req.body.psword;
    if(users.id.includes(id)){
      const idx = users.id.indexOf(id)
      if(users.psword[idx]===psword){
        return res.json({success:true})
      }
    }
    console.log('hihi')
    return res.json({success:false, message:'failed login'})
  },
}


module.exports = {
  output,
  process
};
