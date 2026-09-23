import React from 'react';

function ProductList({ products, filterEco }) {
  const displayedProducts = filterEco 
    ? products.filter(product => product.isEcoFriendly) 
    : products;

  return (
    <div data-testid="product-list">
      {displayedProducts.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {displayedProducts.map(product => (
            <li key={product.id} data-testid="product-item" style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '10px', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 8px 0' }}>{product.name}</h3>
              <p style={{ margin: '0 0 8px 0' }}>{product.description}</p>
              <span style={{ 
                backgroundColor: product.isEcoFriendly ? '#d4edda' : '#f8d7da', 
                color: product.isEcoFriendly ? '#155724' : '#721c24',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                Eco-Friendly: {product.isEcoFriendly ? 'Yes' : 'No'}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductList;
