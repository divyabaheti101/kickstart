const routes = require("next-routes")();

routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show")
  .add("/campaigns/:address/requests", "/campaigns/requests/index");

module.exports = routes;

// campaigns/new is added here bcoz new was considered in wildcard,
// it is declared before so that it can be excluded.
