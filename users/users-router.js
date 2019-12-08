const router = require('express').Router();
const Users = require('./users-model.js');
// we bring in the validation middleware and assign the exported method to a
// constant called "authrequred", so we can use it to protect any handlers that
// need an authenticated user. Note that we are not doing ANYTHING about
// authorization in this sample project... If you exist, and can prove you are
// you by knowing your password, you can do All The Things(tm). 
// const authrequired = require('../auth/auth-required-middleware.js');

// This method is protected by adding the "authrequired" middleware function to
// the chain before the actual handler function that finds and returns all the
// users from the users model (DB). 
router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
