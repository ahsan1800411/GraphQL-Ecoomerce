exports.Category = {
  products: ({ id }, { filter }, { db }) => {
    let filteredCategoryProducts = db.products.filter(
      (product) => product.categoryId === id
    );
    if (filter) {
      if (filter.onSale) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => product.onSale
        );
      }
    }
    return filteredCategoryProducts;
  },
};
