const formatProductDetails = (product) => ({
  id: product.id,
  name: product.name,
  price: product.price.replace('.', ','),
  quantity: product.sales_products.quantity,
  subTotal:
    (Number(product.price) * Number(product.sales_products.quantity))
      .toFixed(2).replace('.', ','),
});

module.exports = {
  formatProductDetails,
};