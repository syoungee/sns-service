const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const loginRouter = require("./loginRouter");
const postRouter = require("./postRouter");

router.use("/user", userRouter);
router.use("/login", loginRouter);
router.use("/post", postRouter);

module.exports = router;
