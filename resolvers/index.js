const { Category } = require('../resolvers/Category');
const { Product } = require('../resolvers/Product');
const { Query } = require('../resolvers/Query');
const { Mutation } = require('../resolvers/Mutation');
exports.resolvers = {
  Query,
  Product,
  Category,
  Mutation,
};
