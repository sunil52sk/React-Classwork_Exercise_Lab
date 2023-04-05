import React from 'react';

function withProductList(Component) {
  const products = [
    {
      name: 'Product 1',
      price: 10.99,
      image: 'https://tse3.mm.bing.net/th?id=OIP.V_MjT2Xw8yfnuGhgxc69cQHaEK&pid=Api&P=0',
    },
    {
      name: 'Product 2',
      price: 19.99,
      image: 'https://qph.cf2.quoracdn.net/main-qimg-74baad58aebc58c606c978d99366d2d2.webp',
    },
    // more products
  ];

  return function ProductList(props) {
    return <Component {...props} products={products} />;
  };
}

function D6CW({ products }) {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <img src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <div>${product.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withProductList(D6CW);