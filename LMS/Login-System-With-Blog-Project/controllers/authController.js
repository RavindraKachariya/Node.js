const Admin = require("../models/Admin");

exports.loginPage = (req, res) => {
    res.render("admin/login");
};

exports.signupPage = (req, res) => {
    res.render("admin/signup");
};

exports.signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.send("Error: Email already registered. Please use a different email.");
        }
        const admin = new Admin({ email, password });
        await admin.save();
        res.redirect("/login");
    } catch (err) {
        console.log(err);
        res.send("Error: " + err.message);
    }
};

exports.loginSuccess = (req, res) => {
    res.redirect("/admin/dashboard");
};

exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) return res.send("Error logging out");
        res.redirect("/login");
    });
};