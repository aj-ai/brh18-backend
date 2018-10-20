const express = require('express');
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(
    new SpotifyStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: `http://localhost:${process.env.PORT}/auth/spotify/callback`
        },
        (accessToken, refreshToken, expiresIn, profile, done) => {
            console.log({
                accessToken,
            //     refreshToken,
            //     expiresIn,
            //     profile
            });
            return done(null, accessToken);
        })
);
