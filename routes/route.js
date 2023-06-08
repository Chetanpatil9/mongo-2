const route=require("express").Router();
const {insertEmployeedata} = require("../controller/employee")
route.post("/employee",insertEmployeedata)

module.exports=route;
