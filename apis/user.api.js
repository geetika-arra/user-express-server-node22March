const express = require("express");
const apis = express.Router();
const userServ = require("../services/user.service");
const userService = new userServ();

apis.get('/', (req, res) => {
    res.json({
        "users": userService.getUsers()
    })

})
apis.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    res.json(
        userService.getUsersById(id)
    )

})


module.exports = {
    apis
}
