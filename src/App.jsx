import React, { useState } from 'react';
import ProductList from './components/ProductList';

const mockProducts = [
  { id: 1, name: 'Bamboo Toothbrush', description: 'Eco-friendly biodegradable toothbrush.', isEcoFriendly: true },
  { id: 2, name: 'Plastic Water Bottle', description: 'Single-use plastic bottle.', isEcoFriendly: false },
  { id: 3, name: 'Reusable Coffee Cup', description: 'Made from recycled materials.', isEcoFriendly: true },
  { id: 4, name: 'Styrofoam Container', description: 'Not good for the environment.', isEcoFriendly: false },
];

function App() {
  const [filterEco, setFilterEco] = useState(false);

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Sustainable Products Guide</h1>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <input 
          type="checkbox" 
          checked={filterEco} 
          onChange={(e) => setFilterEco(e.target.checked)} 
        />
        Show only Eco-Friendly products
      </label>
      <ProductList products={mockProducts} filterEco={filterEco} />
    </div>
  );
}

export default App;
