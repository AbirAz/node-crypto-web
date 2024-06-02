import config from "config";
import passport from "passport";
import { Profile, Strategy } from "passport-github2";
import getModel from "../models/user/factory";

passport.serializeUser((user, done) => {
    done(null,user);
})

passport.deserializeUser((user: Express.User, done) => {
    done(null,user);
})

passport.use(new Strategy({...config.get('github')},
 async (accessToken: string, refreshToken: string, profile: Profile, done: Function) => {
    // console.log(accessToken);
    // console.log(refreshToken);
    // console.log(profile);
    // console.log(done);

    try{
        // now i have profile.od
        // to determine if its a signup or sign in
        const user = await getModel().login(profile.id);
        // get user with githubID = profile.id
        // if succeed, then this is a login
        if (user) return done(null,user);
        // else, this is a sign up
        const newUser = await getModel().signup(profile.id);
        if (newUser) return done(null,newUser);
        // if nothing worked
        return done(null,false);
    }catch(err){
        done(err);
    }
 }))

export default passport;