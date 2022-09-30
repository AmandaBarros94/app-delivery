const formatProductDetails = (sale) => ({
    id: sale.id,
    salesProducts: sale.salesProducts.map((saleProduct) => ({
        id: saleProduct.id,
        name: saleProduct.name,
        price: saleProduct.price.replace('.', ','),
        urlImage: saleProduct.urlImage,
        quantity: saleProduct.sales_products.quantity,
        subTotal:
          (Number(saleProduct.price) * Number(saleProduct.sales_products.quantity))
            .toFixed(2).replace('.', ','),
    })),
});

module.exports = formatProductDetails;