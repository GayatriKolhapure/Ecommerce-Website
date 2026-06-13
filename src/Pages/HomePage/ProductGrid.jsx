import Product from './Product';
function ProductGrid({ products, loadCart }) {

  return (
    <div className="products-grid">
      {products.map(product =>
        <Product 
        product = {product}
        key = {product.id}
        loadCart = {loadCart}
        />
      )}

    </div>
  )
}

export default ProductGrid;