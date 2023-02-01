import React from 'react';
import logo from './logo.svg';
import { ProductList } from './components/ProductList/ProductList';

function App() {
  return (
    <div className="mx-auto max-w-5xl mt-10">
      <header className="text-center">
        <h1 className='text-4xl'>Shop</h1>
      </header>
      <ProductList />
    </div>
  );
}

export default App;
