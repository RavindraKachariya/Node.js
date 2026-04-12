const express = require("express");
const router = express.Router();
const passport = require("passport");

const authController = require("../controllers/authController");

router.get("/login", (req, res) => {
    res.render("admin/login", { error: req.query.error || null });
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/admin/dashboard",
    failureRedirect: "/login?error=Invalid email or password"
}));

router.get("/signup", authController.signupPage);
router.post("/signup", authController.signup);

router.get("/logout", authController.logout);

module.exports = router;