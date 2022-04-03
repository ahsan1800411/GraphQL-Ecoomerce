exports.Review = {
  product: ({ productId }, args, { db }) => {
    return db.products.filter((product) => product.id === productId);
  },
};
