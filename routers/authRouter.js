const router = require('express').Router();
const authController = require('../controller/auth');

router.post("/login",authController.loginController);
router.post("/signin",authController.signupController);
router.get("/getuser",authController.getUsers);
router.get("/getuser/:work",authController.getworker);
router.put("/updateuser/:_id",authController.updateuser);
router.delete("/delete/:_id",authController.deleteuser);
module.exports = router;