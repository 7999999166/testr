module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '48dfa62bc9edc96aa4f46257984ebc53'),
  },
});
