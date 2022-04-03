const { gql } = require('apollo-server');
exports.typeDefs = gql`
  type Query {
    products(filter: ProductsFilteredInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    reviews: [Review!]!
  }
  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
    updateCategory(id: ID!, input: updateCategoryInput!): Category
    updateProduct(id: ID!, input: UpdateProductInput): Product
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    image: String!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }
  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilteredInput): [Product!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    product: Product
  }
  input ProductsFilteredInput {
    onSale: Boolean
    avgRating: Int
  }
  input AddCategoryInput {
    name: String!
  }
  input updateCategoryInput {
    name: String!
  }
  input AddProductInput {
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    image: String!
    onSale: Boolean!
    categoryId: String
  }
  input UpdateProductInput {
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    image: String!
    onSale: Boolean!
    categoryId: String
  }
  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String!
  }
`;
