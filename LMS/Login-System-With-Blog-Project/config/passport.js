const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Admin = require("../models/Admin");

passport.use(new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
        try {
            const admin = await Admin.findOne({ email });
            if (!admin) return done(null, false, { message: "Email not registered" });
            
            const isMatch = await admin.comparePassword(password);
            if (!isMatch) return done(null, false, { message: "Invalid password" });
            
            return done(null, admin);
        } catch (err) {
            return done(err);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const admin = await Admin.findById(id);
        done(null, admin);
    } catch (err) {
        done(err, null);
    }
});

module.exports = passport;