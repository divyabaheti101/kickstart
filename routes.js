const routes = require("next-routes")();

routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show");

module.exports = routes;

// campaigns/new is added here bcoz new was considered in wildcard,
// it is declared before so that it can be excluded.
