import passport from "passport";
import { Strategy as LocalStrategy, Strategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

// Local Strategy
passport.use(new LocalStrategy({

}))

// Google Strategy
passport.use(new GoogleStrategy({

}))