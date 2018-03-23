const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  //处理返回链接,proxy代理出错
  app.get('/auth/google/callback', passport.authenticate('google'));
};
